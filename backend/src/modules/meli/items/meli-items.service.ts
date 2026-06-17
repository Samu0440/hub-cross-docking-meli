import { PrismaClient } from '../../../../prisma/generated/client'
import { createMeliClient } from '../meli.client'
import { MeliOauthService } from '../oauth/meli-oauth.service'

const prisma = new PrismaClient()
const meliOauthService = new MeliOauthService()

export class MeliItemsService {
  // Publica um produto do fornecedor como anúncio no Meli
  async publishProduct(productId: string, sellerId: string, meliUserId: number, price: number) {
    // Busca o produto do fornecedor
    const product = await prisma.product.findUnique({
      where: { id: productId },
      include: { photos: true }
    })

    if (!product) {
      throw new Error('Produto não encontrado')
    }

    // Busca o token de acesso do vendedor
    const accessToken = await meliOauthService.getAccessToken(sellerId, meliUserId)

    if (!accessToken) {
      throw new Error('Token de acesso não encontrado ou expirado. Reconecte sua conta do Mercado Livre.')
    }

    const meliClient = createMeliClient(accessToken)

    // Monta o payload do anúncio
    const itemPayload = {
      title: product.title,
      category_id: product.categoryId || 'MLB3530', // Categoria padrão: Calçados (se não tiver)
      price,
      currency_id: 'BRL',
      available_quantity: product.stockQuantity,
      buying_mode: 'buy_it_now',
      listing_type_id: 'gold_special',
      condition: 'new',
      description: { plain_text: product.description },
      pictures: product.photos.map(photo => ({ source: photo.url })),
      attributes: product.attributes || [],
    }

    // Cria o anúncio no Mercado Livre
    const response = await meliClient.post('/items', itemPayload)
    const meliItem = response.data

    // Salva o mapeamento no banco
    const mapping = await prisma.productMapping.upsert({
      where: {
        productId_sellerId: {
          productId,
          sellerId,
        },
      },
      update: {
        meliItemId: meliItem.id,
        meliPermalink: meliItem.permalink,
        publishedPrice: price,
        announcedStock: product.stockQuantity,
        status: 'ACTIVE',
        lastSyncAt: new Date(),
        meliIntegrationId: (
          await prisma.meliIntegration.findUnique({
            where: { userId_meliUserId: { userId: sellerId, meliUserId } }
          })
        )?.id || '',
      },
      create: {
        productId,
        sellerId,
        meliItemId: meliItem.id,
        meliPermalink: meliItem.permalink,
        publishedPrice: price,
        announcedStock: product.stockQuantity,
        status: 'ACTIVE',
        lastSyncAt: new Date(),
        meliIntegrationId: (
          await prisma.meliIntegration.findUnique({
            where: { userId_meliUserId: { userId: sellerId, meliUserId } }
          })
        )?.id || '',
      },
    })

    return {
      mapping,
      meliItem: {
        id: meliItem.id,
        title: meliItem.title,
        price: meliItem.price,
        permalink: meliItem.permalink,
        status: meliItem.status,
      },
    }
  }
}
