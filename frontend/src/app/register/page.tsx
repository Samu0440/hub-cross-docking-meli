'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/auth-store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'FORNECEDOR' | 'VENDEDOR'>('FORNECEDOR')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { register } = useAuthStore()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await register(email, password, name, role)
      router.push('/products')
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao cadastrar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4">
      <Card className="w-full max-w-md border-zinc-800 bg-zinc-900">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Criar Conta</CardTitle>
          <CardDescription className="text-zinc-400">
            Comece a vender com Cross-Docking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-zinc-300">Nome</Label>
              <Input id="name" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} required className="bg-zinc-800 border-zinc-700 text-white" />
            </div>
            <div>
              <Label htmlFor="email" className="text-zinc-300">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-zinc-800 border-zinc-700 text-white" />
            </div>
            <div>
              <Label htmlFor="password" className="text-zinc-300">Senha</Label>
              <Input id="password" type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} required className="bg-zinc-800 border-zinc-700 text-white" />
            </div>
            <div>
              <Label className="text-zinc-300">Tipo de conta</Label>
              <div className="flex gap-2 mt-1">
                <Button type="button" variant={role === 'FORNECEDOR' ? 'default' : 'outline'} onClick={() => setRole('FORNECEDOR')} className="flex-1">
                  Fornecedor
                </Button>
                <Button type="button" variant={role === 'VENDEDOR' ? 'default' : 'outline'} onClick={() => setRole('VENDEDOR')} className="flex-1">
                  Vendedor
                </Button>
              </div>
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Criando conta...' : 'Criar conta'}
            </Button>

            <p className="text-center text-zinc-500 text-sm">
              Já tem conta?{' '}
              <a href="/login" className="text-blue-400 hover:underline">Faça login</a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}