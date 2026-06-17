import { Router } from 'express'
import { MeliOrdersController } from './meli-orders.controller'
import { authMiddleware } from '../../../shared/middlewares/auth.middleware'

const meliOrdersRoutes = Router()
const meliOrdersController = new MeliOrdersController()

// Webhook do Meli - NÃO exige autenticação (é chamado pelo Mercado Livre)
meliOrdersRoutes.post('/webhook', meliOrdersController.webhook)

// Rotas do dashboard - exigem autenticação
meliOrdersRoutes.use(authMiddleware)
meliOrdersRoutes.get('/', meliOrdersController.listOrders)

export { meliOrdersRoutes }