'use client'

import { useEffect, useState } from 'react'
import { useAuthStore } from '@/stores/auth-store'
import { api } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DashboardLayout } from '@/components/layout/dashboard-layout'

interface MeliIntegration {
  id: string
  meliUserId: number
  meliNickname: string
  scopes: string[]
  tokenExpiresAt: string
  createdAt: string
}

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState<MeliIntegration[]>([])
  const [loading, setLoading] = useState(true)
  const [authUrl, setAuthUrl] = useState('')
  const { user } = useAuthStore()

  useEffect(() => {
    loadIntegrations()
    loadAuthUrl()
  }, [])

  const loadIntegrations = async () => {
    try {
      const response = await api.get<MeliIntegration[]>('/meli/oauth/integrations')
      setIntegrations(response.data)
    } catch (err) {
      console.error('Erro ao carregar integrações:', err)
    } finally {
      setLoading(false)
    }
  }

  const loadAuthUrl = async () => {
    try {
      const response = await api.get<{ url: string }>('/meli/oauth/auth-url')
      setAuthUrl(response.data.url)
    } catch (err) {
      console.error('Erro ao carregar URL:', err)
    }
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Integrações</h1>
          <p className="text-zinc-400 mt-1">Conecte suas contas do Mercado Livre</p>
        </div>

        <Card className="border-zinc-800 bg-zinc-900 mb-6">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3">
              <span className="text-2xl">🛒</span> Mercado Livre
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Conecte sua conta para publicar anúncios e receber pedidos automaticamente.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {authUrl && (
              <a href={authUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  🔗 Conectar Mercado Livre
                </Button>
              </a>
            )}
            <p className="text-xs text-zinc-500 mt-3">
              Você será redirecionado para autorizar o acesso. Após autorizar, copie o código da URL e cole abaixo.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-xl font-semibold text-white mb-4">Contas Conectadas</h2>

        {loading ? (
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
          </div>
        ) : integrations.length === 0 ? (
          <Card className="border-zinc-800 bg-zinc-900">
            <div className="text-center py-8">
              <span className="text-4xl mb-3 block">🔗</span>
              <p className="text-zinc-400">Nenhuma conta conectada ainda.</p>
            </div>
          </Card>
        ) : (
          <div className="space-y-3">
            {integrations.map((integration) => (
              <Card key={integration.id} className="border-zinc-800 bg-zinc-900">
                <CardContent className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-white font-semibold">@{integration.meliNickname}</p>
                    <p className="text-sm text-zinc-400">ID: {integration.meliUserId}</p>
                    <p className="text-xs text-zinc-500 mt-1">
                      Conectado em {formatDate(integration.createdAt)} • Expira em {formatDate(integration.tokenExpiresAt)}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium">
                    Conectado
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
