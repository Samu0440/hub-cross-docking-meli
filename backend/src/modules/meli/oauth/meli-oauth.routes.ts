import { Router } from 'express'
import { MeliOauthController } from './meli-oauth.controller'
import { authMiddleware } from '../../../shared/middlewares/auth.middleware'

const meliOauthRoutes = Router()
const meliOauthController = new MeliOauthController()

// Rotas que exigem autenticação
meliOauthRoutes.use(authMiddleware)

meliOauthRoutes.get('/auth-url', meliOauthController.getAuthUrl)
meliOauthRoutes.get('/callback', meliOauthController.callback)
meliOauthRoutes.get('/integrations', meliOauthController.listIntegrations)

export { meliOauthRoutes }