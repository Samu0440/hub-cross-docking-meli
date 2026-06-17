'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { api } from '@/lib/api'
import { Product } from '@/types/product'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { DashboardLayout } from '@/components/layout/dashboard-layout'

export default function EditProductPage() {
  const router = useRouter()
  const params = useParams()
  const productId = params.id as string

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    costPrice: '',
    suggestedPrice: '',
    supplierSku: '',
    stockQuantity: '',
    brand: '',
    model: '',
    status: 'ACTIVE' as 'ACTIVE' | 'INACTIVE' | 'DRAFT',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadingProduct, setLoadingProduct] = useState(true)

  useEffect(() => {
    loadProduct()
  }, [productId])

  const loadProduct = async () => {
    try {
      const response = await api.get<Product>(`/products/${productId}`)
      const p = response.data
      setFormData({
        title: p.title,
        description: p.description,
        costPrice: p.costPrice,
        suggestedPrice: p.suggestedPrice || '',
        supplierSku: p.supplierSku,
        stockQuantity: String(p.stockQuantity),
        brand: p.brand || '',
        model: p.model || '',
        status: p.status,
      })
    } catch (err) {
      console.error('Erro ao carregar produto:', err)
    } finally {
      setLoadingProduct(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await api.put(`/products/${productId}`, {
        ...formData,
        costPrice: formData.costPrice,
        stockQuantity: parseInt(formData.stockQuantity) || 0,
      })
      router.push('/products')
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao atualizar produto')
    } finally {
      setLoading(false)
    }
  }

  if (loadingProduct) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Editar Produto</h1>
          <Button onClick={() => router.push('/products')} variant="outline" className="text-zinc-300 border-zinc-700">
            Voltar
          </Button>
        </div>

        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white">Atualizar Dados</CardTitle>
            <CardDescription className="text-zinc-400">Altere as informações do produto</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label className="text-zinc-300">Status</Label>
                <select name="status" value={formData.status} onChange={handleChange} className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-md p-2">
                  <option value="ACTIVE">Ativo</option>
                  <option value="INACTIVE">Inativo</option>
                  <option value="DRAFT">Rascunho</option>
                </select>
              </div>
              <div>
                <Label className="text-zinc-300">Título *</Label>
                <Input name="title" value={formData.title} onChange={handleChange} required className="bg-zinc-800 border-zinc-700 text-white" />
              </div>
              <div>
                <Label className="text-zinc-300">Descrição *</Label>
                <textarea name="description" value={formData.description} onChange={handleChange} required className="w-full min-h-24 bg-zinc-800 border border-zinc-700 text-white rounded-md p-2" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-zinc-300">Preço de Custo *</Label>
                  <Input name="costPrice" type="number" step="0.01" value={formData.costPrice} onChange={handleChange} required className="bg-zinc-800 border-zinc-700 text-white" />
                </div>
                <div>
                  <Label className="text-zinc-300">Estoque</Label>
                  <Input name="stockQuantity" type="number" value={formData.stockQuantity} onChange={handleChange} className="bg-zinc-800 border-zinc-700 text-white" />
                </div>
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button type="submit" className="flex-1" disabled={loading}>
                  {loading ? 'Salvando...' : 'Salvar Alterações'}
                </Button>
                <Button type="button" variant="destructive" onClick={async () => {
                  if (confirm('Tem certeza que deseja excluir este produto?')) {
                    await api.delete(`/products/${productId}`)
                    router.push('/products')
                  }
                }}>
                  Excluir
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
