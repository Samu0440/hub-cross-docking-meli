import { Request, Response } from 'express'
import { ProductsService } from './products.service'
import { PrismaClient } from '../../../prisma/generated/client'

const productsService = new ProductsService()
const prisma = new PrismaClient()

async function getFornecedorProfileId(userId: string): Promise<string> {
  // Busca o perfil do fornecedor
  let profile = await prisma.fornecedorProfile.findUnique({
    where: { userId }
  })

  // Se não existir, cria automaticamente
  if (!profile) {
    profile = await prisma.fornecedorProfile.create({
      data: { userId }
    })
  }

  return profile.id
}

export class ProductsController {
  async create(req: Request, res: Response) {
    try {
      const userId = req.user?.userId
      if (!userId) {
        res.status(401).json({ error: 'Usuário não autenticado' })
        return
      }

      const { title, description, costPrice, suggestedPrice, supplierSku, stockQuantity, brand, model } = req.body

      if (!title || !description || !costPrice || !supplierSku) {
        res.status(400).json({ error: 'Campos obrigatórios: title, description, costPrice, supplierSku' })
        return
      }

      const fornecedorProfileId = await getFornecedorProfileId(userId)

      const product = await productsService.create({
        fornecedorProfileId,
        title,
        description,
        costPrice: parseFloat(costPrice),
        suggestedPrice: suggestedPrice ? parseFloat(suggestedPrice) : undefined,
        supplierSku,
        stockQuantity: stockQuantity || 0,
        brand,
        model,
      })

      res.status(201).json(product)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  async list(req: Request, res: Response) {
    try {
      const userId = req.user?.userId
      if (!userId) {
        res.status(401).json({ error: 'Usuário não autenticado' })
        return
      }

      const fornecedorProfileId = await getFornecedorProfileId(userId)
      const products = await productsService.listByFornecedor(fornecedorProfileId)
      res.json(products)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params
      const product = await productsService.findById(id)

      if (!product) {
        res.status(404).json({ error: 'Produto não encontrado' })
        return
      }

      res.json(product)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params
      const data = req.body

      const product = await productsService.update(id, data)
      res.json(product)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params
      await productsService.delete(id)
      res.status(204).send()
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }
}