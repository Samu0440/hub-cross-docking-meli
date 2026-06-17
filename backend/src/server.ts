import express from 'express'
import cors from 'cors'
import { authRoutes } from './modules/auth/auth.routes'
import { productsRoutes } from './modules/products/products.routes'
import { meliOauthRoutes } from './modules/meli/oauth/meli-oauth.routes'
import { meliItemsRoutes } from './modules/meli/items/meli-items.routes'
import { meliOrdersRoutes } from './modules/meli/orders/meli-orders.routes'
import { authMiddleware } from './shared/middlewares/auth.middleware'

const app = express()
const PORT = process.env.PORT || 3333

app.use(cors())
app.use(express.json())

// Rotas públicas
app.use('/api/auth', authRoutes)

app.get('/health', (_, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.get('/api/me', authMiddleware, (req, res) => {
  res.json({ user: req.user })
})

// Rotas de produtos
app.use('/api/products', productsRoutes)

// Rotas do Mercado Livre
app.use('/api/meli/oauth', meliOauthRoutes)
app.use('/api/meli/items', meliItemsRoutes)

// Webhook do Meli (rota pública - sem /api)
app.use('/webhooks/meli', meliOrdersRoutes)

// Orders (dashboard - com /api e autenticação)
app.use('/api/orders', meliOrdersRoutes)

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
})