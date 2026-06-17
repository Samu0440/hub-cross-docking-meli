import { Router } from 'express'
import { MeliItemsController } from './meli-items.controller'
import { authMiddleware } from '../../../shared/middlewares/auth.middleware'

const meliItemsRoutes = Router()
const meliItemsController = new MeliItemsController()

meliItemsRoutes.use(authMiddleware)

meliItemsRoutes.post('/publish', meliItemsController.publish)

export { meliItemsRoutes }