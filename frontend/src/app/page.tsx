'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/auth-store'

export default function Home() {
  const { isAuthenticated, loadFromStorage } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    loadFromStorage()
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/products')
    } else {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <p className="text-zinc-400">Carregando...</p>
    </div>
  )
}