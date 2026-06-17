import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hub Cross-Docking',
  description: 'Integração de fornecedores com Mercado Livre',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="antialiased bg-zinc-950">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
