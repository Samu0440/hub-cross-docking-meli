'use client'

import { useAuthStore } from '@/stores/auth-store'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function Header() {
  const { user, logout } = useAuthStore()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  const initials = user?.name
    ?.split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || '??'

  return (
    <header className="h-16 bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800 flex items-center justify-between px-8 sticky top-0 z-50">
      <div>
        <h2 className="text-lg font-semibold text-white">
          {user?.role === 'FORNECEDOR' ? 'Painel do Fornecedor' : 'Painel do Vendedor'}
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 bg-blue-600">
            <AvatarFallback className="text-white text-xs font-bold">{initials}</AvatarFallback>
          </Avatar>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-white">{user?.name}</p>
            <p className="text-xs text-zinc-500">{user?.role === 'FORNECEDOR' ? 'Fornecedor' : 'Vendedor'}</p>
          </div>
        </div>
        <Button onClick={handleLogout} variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
          Sair
        </Button>
      </div>
    </header>
  )
}
