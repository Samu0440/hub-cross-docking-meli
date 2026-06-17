import { Request, Response } from 'express'
import { MeliOrdersService } from './meli-orders.service'

const meliOrdersService = new MeliOrdersService()

export class MeliOrdersController {
  // Webhook - recebe notificações do Mercado Livre
  async webhook(req: Request, res: Response) {
    try {
      const { resource, user_id, topic } = req.body

      console.log('📨 Webhook recebido:', { resource, user_id, topic })

      // Verifica se é uma notificação de pedido
      if (topic === 'orders_v2' || resource?.includes('/orders/')) {
        const orderId = resource ? parseInt(resource.split('/orders/')[1]) : null

        if (orderId) {
          // Nota: No webhook real, o user_id é do Meli, não nosso.
          // Precisamos encontrar nosso userId pelo meliUserId
          const { PrismaClient } = await import('../../../../prisma/generated/client')
          const prisma = new PrismaClient()

          const integration = await prisma.meliIntegration.findFirst({
            where: { meliUserId: user_id, isActive: true },
          })

          if (integration) {
            await meliOrdersService.processOrderNotification(orderId, integration.userId)
            console.log(`✅ Pedido ${orderId} processado com sucesso`)
          } else {
            console.log(`⚠️ Integração não encontrada para meliUserId: ${user_id}`)
          }
        }
      }

      // Sempre retorna 200 para o Meli (ele espera isso)
      res.status(200).json({ message: 'Notificação recebida' })
    } catch (error: any) {
      console.error('Erro no webhook:', error)
      // Mesmo com erro, retorna 200 para evitar retry do Meli
      res.status(200).json({ message: 'Notificação recebida com erro, mas registrada' })
    }
  }

  // Lista pedidos (dashboard do vendedor)
  async listOrders(req: Request, res: Response) {
    try {
      const userId = req.user?.userId

      if (!userId) {
        res.status(401).json({ error: 'Usuário não autenticado' })
        return
      }

      const orders = await meliOrdersService.listOrders(userId)
      res.json(orders)
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
  }
}