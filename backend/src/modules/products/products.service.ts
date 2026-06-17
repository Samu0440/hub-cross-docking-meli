import { PrismaClient } from '../../../prisma/generated/client'

const prisma = new PrismaClient()

export class ProductsService {
  async create(data: {
    fornecedorProfileId: string
    title: string
    description: string
    costPrice: number
    suggestedPrice?: number
    supplierSku: string
    stockQuantity: number
    brand?: string
    model?: string
  }) {
    const product = await prisma.product.create({
      data: {
        fornecedorProfileId: data.fornecedorProfileId,
        title: data.title,
        description: data.description,
        costPrice: data.costPrice,
        suggestedPrice: data.suggestedPrice,
        supplierSku: data.supplierSku,
        stockQuantity: data.stockQuantity,
        brand: data.brand,
        model: data.model,
      }
    })

    return product
  }

  async listByFornecedor(fornecedorProfileId: string) {
    return prisma.product.findMany({
      where: { fornecedorProfileId },
      include: { photos: true },
      orderBy: { createdAt: 'desc' }
    })
  }

  async findById(id: string) {
    return prisma.product.findUnique({
      where: { id },
      include: { photos: true }
    })
  }

  async update(id: string, data: {
    title?: string
    description?: string
    costPrice?: number
    suggestedPrice?: number
    stockQuantity?: number
    brand?: string
    model?: string
    status?: 'ACTIVE' | 'INACTIVE' | 'DRAFT'
  }) {
    return prisma.product.update({
      where: { id },
      data
    })
  }

  async delete(id: string) {
    return prisma.product.delete({ where: { id } })
  }
}