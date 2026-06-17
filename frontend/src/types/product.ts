export interface Product {
  id: string
  fornecedorProfileId: string
  title: string
  description: string
  costPrice: string
  suggestedPrice: string | null
  supplierSku: string
  stockQuantity: number
  brand: string | null
  model: string | null
  status: 'ACTIVE' | 'INACTIVE' | 'DRAFT'
  photos: ProductPhoto[]
  createdAt: string
  updatedAt: string
}

export interface ProductPhoto {
  id: string
  url: string
  order: number
  isMain: boolean
}