'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { href: '/products', label: 'Produtos', icon: '📦' },
  { href: '/orders', label: 'Pedidos', icon: '📋' },
  { href: '/integrations', label: 'Integrações', icon: '🔗' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 h-screen bg-zinc-900 border-r border-zinc-800 fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-zinc-800">
        <Link href="/products" className="flex items-center gap-2">
          <span className="text-2xl">🏪</span>
          <span className="text-lg font-bold text-white">Hub Cross-Docking</span>
        </Link>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <div className="text-xs text-zinc-600 text-center">
          Hub Cross-Docking v1.0
        </div>
      </div>
    </aside>
  )
}
