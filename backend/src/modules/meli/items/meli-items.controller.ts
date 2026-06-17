import { Request, Response } from 'express'
import { MeliItemsService } from './meli-items.service'

const meliItemsService = new MeliItemsService()

export class MeliItemsController {
  async publish(req: Request, res: Response) {
    try {
      const userId = req.user?.userId
      if (!userId) {
        res.status(401).json({ error: 'Usuário não autenticado' })
        return
      }

      const { productId, meliUserId, price } = req.body

      if (!productId || !meliUserId || !price) {
        res.status(400).json({ error: 'Campos obrigatórios: productId, meliUserId, price' })
        return
      }

      const result = await meliItemsService.publishProduct(
        productId,
        userId,
        parseInt(meliUserId),
        parseFloat(price)
      )

      res.status(201).json({
        success: true,
        message: 'Anúncio publicado com sucesso!',
        data: result,
      })
    } catch (error: any) {
      console.error('Erro ao publicar anúncio:', error.response?.data || error.message)
      res.status(500).json({
        error: 'Falha ao publicar anúncio',
        details: error.response?.data?.message || error.message,
      })
    }
  }
}