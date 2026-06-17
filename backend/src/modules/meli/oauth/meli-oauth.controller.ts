import { Request, Response } from 'express'
import { MeliOauthService } from './meli-oauth.service'

const meliOauthService = new MeliOauthService()

export class MeliOauthController {
  // Retorna a URL de autorização
  getAuthUrl(req: Request, res: Response) {
    const url = meliOauthService.getAuthorizationUrl()
    res.json({ url })
  }

  // Callback que o Mercado Livre chama após autorização
  async callback(req: Request, res: Response) {
    try {
      const { code } = req.query
      const userId = req.user?.userId

      if (!code || typeof code !== 'string') {
        res.status(400).json({ error: 'Código de autorização não fornecido' })
        return
      }

      if (!userId) {
        res.status(401).json({ error: 'Usuário não autenticado' })
        return
      }

      const result = await meliOauthService.exchangeCodeForToken(code, userId)

      res.json({
        success: true,
        message: 'Integração realizada com sucesso!',
        data: result,
      })
    } catch (error: any) {
      console.error('Erro no callback OAuth:', error.response?.data || error.message)
      res.status(500).json({
        error: 'Falha na integração com Mercado Livre',
        details: error.response?.data?.message || error.message,
      })
    }
  }

  // Lista as integrações do usuário
  async listIntegrations(req: Request, res: Response) {
    try {
      const userId = req.user?.userId

      if (!userId) {
        res.status(401).json({ error: 'Usuário não autenticado' })
        return
      }

      const integrations = await meliOauthService.listIntegrations(userId)
      res.json(integrations)
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
  }
}