'use client'

import { useEffect, useState } from 'react'
import { useAuthStore } from '@/stores/auth-store'
import { api } from '@/lib/api'
import { Product } from '@/types/product'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [publishingId, setPublishingId] = useState<string | null>(null)
  const { user } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    try {
      const response = await api.get<Product[]>('/products')
      setProducts(response.data)
    } catch (err) {
      console.error('Erro ao carregar produtos:', err)
    } finally {
      setLoading(false)
    }
  }

  const handlePublish = async (productId: string) => {
    const price = prompt('Digite o preço de venda no Mercado Livre:')
    if (!price) return

    setPublishingId(productId)
    try {
      await api.post('/meli/items/publish', {
        productId,
        meliUserId: '123456', // TODO: Buscar da integração real
        price,
      })
      alert('Anúncio publicado com sucesso!')
      loadProducts()
    } catch (err: any) {
      alert(err.response?.data?.details || 'Erro ao publicar anúncio')
    } finally {
      setPublishingId(null)
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Meus Produtos</h1>
            <p className="text-zinc-400 mt-1">Gerencie seu catálogo de produtos</p>
          </div>
          <Button onClick={() => router.push('/products/new')} className="bg-blue-600 hover:bg-blue-700">
            + Novo Produto
          </Button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : products.length === 0 ? (
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader className="text-center py-12">
              <span className="text-6xl mb-4 block">📦</span>
              <CardTitle className="text-white">Nenhum produto cadastrado</CardTitle>
              <CardDescription className="text-zinc-400">
                Clique em "Novo Produto" para começar a cadastrar seu catálogo.
              </CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <Card key={product.id} className="border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{product.title}</CardTitle>
                  <CardDescription className="text-zinc-400">SKU: {product.supplierSku}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm mb-4">
                    <p className="text-zinc-300">
                      Preço de custo:{' '}
                      <span className="text-white font-semibold">R$ {parseFloat(product.costPrice).toFixed(2)}</span>
                    </p>
                    <p className="text-zinc-300">
                      Estoque:{' '}
                      <span className={`font-semibold ${product.stockQuantity > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {product.stockQuantity} unidades
                      </span>
                    </p>
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      product.status === 'ACTIVE' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {product.status === 'ACTIVE' ? 'Ativo' : product.status}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-zinc-300 border-zinc-700 hover:text-white"
                      onClick={() => router.push(`/products/${product.id}/edit`)}
                    >
                      ✏️ Editar
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-green-600 hover:bg-green-700"
                      onClick={() => handlePublish(product.id)}
                      disabled={publishingId === product.id}
                    >
                      {publishingId === product.id ? '...' : '📢 Publicar'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
