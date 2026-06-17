import { PrismaClient } from '../../../../prisma/generated/client'
import { createMeliClient } from '../meli.client'
import { MeliOauthService } from '../oauth/meli-oauth.service'

const prisma = new PrismaClient()
const meliOauthService = new MeliOauthService()

interface MeliOrderData {
  id: number
  status: string
  date_created: string
  buyer: {
    nickname: string
    phone: { number: string }
  }
  shipping: {
    shipping_deadline?: string
    receiver_address?: any
  }
  total_amount: number
  order_items: Array<{
    item: { id: string }
    quantity: number
  }>
}

export class MeliOrdersService {
  // Processa a notificação de pedido do Mercado Livre
  async processOrderNotification(meliOrderId: number, sellerId: string) {
    try {
      // Busca a integração ativa do vendedor
      const integration = await prisma.meliIntegration.findFirst({
        where: { userId: sellerId, isActive: true },
      })

      if (!integration) {
        throw new Error('Integração com Mercado Livre não encontrada')
      }

      // Busca o token de acesso
      const accessToken = await meliOauthService.getAccessToken(sellerId, integration.meliUserId)

      if (!accessToken) {
        throw new Error('Token de acesso expirado')
      }

      const meliClient = createMeliClient(accessToken)

      // Busca os detalhes do pedido no Meli
      const orderResponse = await meliClient.get(`/orders/${meliOrderId}`)
      const orderData: MeliOrderData = orderResponse.data

      // Encontra o mapeamento do produto
      const meliItemId = orderData.order_items[0]?.item.id

      const mapping = meliItemId
        ? await prisma.productMapping.findFirst({
            where: { meliItemId },
            include: { product: true },
          })
        : null

      // Cria ou atualiza o pedido no banco
      const order = await prisma.order.upsert({
        where: { meliOrderId: BigInt(meliOrderId) },
        update: {
          meliOrderStatus: orderData.status,
          internalStatus: this.mapMeliStatusToInternal(orderData.status),
          shippingAddress: orderData.shipping.receiver_address || null,
          shippingDeadline: orderData.shipping.shipping_deadline
            ? new Date(orderData.shipping.shipping_deadline)
            : null,
          totalAmount: orderData.total_amount,
          quantity: orderData.order_items[0]?.quantity || 1,
          statusHistory: [
            {
              status: orderData.status,
              date: new Date().toISOString(),
            },
          ],
        },
        create: {
          meliOrderId: BigInt(meliOrderId),
          meliOrderStatus: orderData.status,
          internalStatus: this.mapMeliStatusToInternal(orderData.status),
          sellerId,
          meliIntegrationId: integration.id,
          productMappingId: mapping?.id || null,
          supplierId: mapping?.product.fornecedorProfileId
            ? (await prisma.fornecedorProfile.findUnique({
                where: { id: mapping.product.fornecedorProfileId },
              }))?.userId || null
            : null,
          buyerName: orderData.buyer.nickname,
          buyerPhone: orderData.buyer.phone?.number || null,
          shippingAddress: orderData.shipping.receiver_address || null,
          totalAmount: orderData.total_amount,
          quantity: orderData.order_items[0]?.quantity || 1,
          orderDate: new Date(orderData.date_created),
          shippingDeadline: orderData.shipping.shipping_deadline
            ? new Date(orderData.shipping.shipping_deadline)
            : null,
        },
      })

      // Se o pedido foi aprovado, atualiza o estoque
      if (orderData.status === 'paid') {
        await this.updateStock(mapping?.productId, orderData.order_items[0]?.quantity || 1)
      }

      // Se o pedido está pronto para enviar, gera etiqueta
      if (orderData.status === 'ready_to_ship' && !order.shippingLabel) {
        await this.generateShippingLabel(meliOrderId, accessToken, order.id)
      }

      return order
    } catch (error: any) {
      console.error('Erro ao processar pedido:', error.response?.data || error.message)
      throw error
    }
  }

  // Atualiza o estoque do produto
  private async updateStock(productId: string | undefined, quantity: number) {
    if (!productId) return

    await prisma.product.update({
      where: { id: productId },
      data: {
        stockQuantity: { decrement: quantity },
      },
    })

    // Também atualiza o estoque no mapeamento
    await prisma.productMapping.updateMany({
      where: { productId },
      data: {
        announcedStock: { decrement: quantity },
      },
    })

    console.log(`📦 Estoque atualizado: -${quantity} unidades do produto ${productId}`)
  }

  // Gera etiqueta de envio no Mercado Livre
  private async generateShippingLabel(meliOrderId: number, accessToken: string, orderId: string) {
    try {
      const meliClient = createMeliClient(accessToken)

      const response = await meliClient.get(`/orders/${meliOrderId}/shipping/labels`)

      if (response.data && response.data.label_url) {
        await prisma.order.update({
          where: { id: orderId },
          data: {
            shippingLabel: response.data.label_url,
            internalStatus: 'READY_TO_SHIP',
            statusHistory: [
              {
                status: 'ready_to_ship',
                date: new Date().toISOString(),
                note: 'Etiqueta gerada automaticamente',
              },
            ],
          },
        })

        console.log(`🏷️ Etiqueta gerada para o pedido ${meliOrderId}`)
      }
    } catch (error: any) {
      console.error('Erro ao gerar etiqueta:', error.response?.data || error.message)
    }
  }

  // Mapeia status do Meli para status interno
  private mapMeliStatusToInternal(meliStatus: string) {
    const statusMap: Record<string, any> = {
      confirmed: 'CONFIRMED',
      paid: 'PAYMENT_APPROVED',
      ready_to_ship: 'READY_TO_SHIP',
      shipped: 'SHIPPED',
      delivered: 'DELIVERED',
      cancelled: 'CANCELLED',
    }

    return statusMap[meliStatus] || 'CONFIRMED'
  }

  // Lista pedidos do vendedor
  async listOrders(sellerId: string) {
    return prisma.order.findMany({
      where: { sellerId },
      include: {
        productMapping: {
          include: { product: true },
        },
        supplier: {
          select: { name: true, email: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    })
  }
}