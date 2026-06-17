'use client'

import { useEffect, useState } from 'react'
import { useAuthStore } from '@/stores/auth-store'
import { api } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { DashboardLayout } from '@/components/layout/dashboard-layout'

interface Order {
  id: string
  meliOrderId: string
  meliOrderStatus: string
  internalStatus: string
  buyerName: string
  totalAmount: string
  quantity: number
  orderDate: string
  shippingLabel: string | null
  productMapping?: { product?: { title: string } }
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => { loadOrders() }, [])

  const loadOrders = async () => {
    try {
      const response = await api.get<Order[]>('/orders')
      setOrders(response.data)
    } catch (err) { console.error('Erro ao carregar pedidos:', err)
    } finally { setLoading(false) }
  }

  const statusColor = (status: string) => {
    const colors: Record<string, string> = {
      CONFIRMED: 'text-yellow-400 bg-yellow-500/10',
      PAYMENT_APPROVED: 'text-blue-400 bg-blue-500/10',
      READY_TO_SHIP: 'text-purple-400 bg-purple-500/10',
      SHIPPED: 'text-orange-400 bg-orange-500/10',
      DELIVERED: 'text-green-400 bg-green-500/10',
      CANCELLED: 'text-red-400 bg-red-500/10',
    }
    return colors[status] || 'text-zinc-400 bg-zinc-500/10'
  }

  const statusLabel = (status: string) => {
    const labels: Record<string, string> = {
      CONFIRMED: 'Confirmado', PAYMENT_APPROVED: 'Pagamento Aprovado',
      READY_TO_SHIP: 'Pronto para Enviar', SHIPPED: 'Enviado',
      DELIVERED: 'Entregue', CANCELLED: 'Cancelado',
    }
    return labels[status] || status
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Pedidos</h1>
          <p className="text-zinc-400 mt-1">Acompanhe os pedidos dos seus anúncios</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : orders.length === 0 ? (
          <Card className="border-zinc-800 bg-zinc-900">
            <div className="text-center py-12">
              <span className="text-6xl mb-4 block">📋</span>
              <h3 className="text-white font-semibold text-lg">Nenhum pedido</h3>
              <p className="text-zinc-400 mt-2">Os pedidos aparecerão quando o webhook do Mercado Livre notificar uma venda.</p>
            </div>
          </Card>
        ) : (
          <div className="space-y-3">
            {orders.map((order) => (
              <Card key={order.id} className="border-zinc-800 bg-zinc-900 hover:border-zinc-700">
                <CardContent className="py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-white font-semibold">Pedido #{String(order.meliOrderId).slice(-6)}</h3>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${statusColor(order.internalStatus)}`}>
                          {statusLabel(order.internalStatus)}
                        </span>
                      </div>
                      <div className="flex gap-4 mt-2 text-sm text-zinc-400">
                        <span>👤 {order.buyerName || 'N/A'}</span>
                        <span>📦 {order.productMapping?.product?.title || 'N/A'}</span>
                        <span>Qtd: {order.quantity}</span>
                        {order.totalAmount && <span className="text-green-400 font-semibold">R$ {parseFloat(order.totalAmount).toFixed(2)}</span>}
                      </div>
                    </div>
                    {order.shippingLabel && (
                      <a href={order.shippingLabel} target="_blank" className="text-blue-400 hover:underline text-sm">📦 Etiqueta</a>
                    )}
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
