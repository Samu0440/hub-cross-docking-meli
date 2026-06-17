import { Router } from 'express'
import { ProductsController } from './products.controller'
import { authMiddleware } from '../../shared/middlewares/auth.middleware'

const productsRoutes = Router()
const productsController = new ProductsController()

// Todas as rotas de produto exigem autenticação
productsRoutes.use(authMiddleware)

productsRoutes.post('/', productsController.create)
productsRoutes.get('/', productsController.list)
productsRoutes.get('/:id', productsController.getById)
productsRoutes.put('/:id', productsController.update)
productsRoutes.delete('/:id', productsController.delete)

export { productsRoutes }