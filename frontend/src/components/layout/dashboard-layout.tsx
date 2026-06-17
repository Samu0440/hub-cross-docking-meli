'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/auth-store'
import { Sidebar } from './sidebar'
import { Header } from './header'

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loadFromStorage } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    loadFromStorage()
  }, [])

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <p className="text-zinc-400">Redirecionando...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
