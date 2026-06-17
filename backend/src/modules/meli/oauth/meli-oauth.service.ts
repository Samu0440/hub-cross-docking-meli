import { PrismaClient } from '../../../../prisma/generated/client'
import { createMeliClient } from '../meli.client'
import { encrypt, decrypt } from '../../../shared/utils/crypto'

const prisma = new PrismaClient()

const MELI_APP_ID = process.env.MELI_APP_ID || ''
const MELI_CLIENT_SECRET = process.env.MELI_CLIENT_SECRET || ''
const MELI_REDIRECT_URI = process.env.MELI_REDIRECT_URI || ''

export class MeliOauthService {
  // Gera a URL de autorização que o vendedor deve acessar
  getAuthorizationUrl(): string {
    const baseUrl = 'https://auth.mercadolivre.com.br/authorization'
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: MELI_APP_ID,
      redirect_uri: MELI_REDIRECT_URI,
    })

    return `${baseUrl}?${params.toString()}`
  }

  // Troca o código de autorização pelo access_token
  async exchangeCodeForToken(code: string, userId: string) {
    const client = createMeliClient()

    const response = await client.post('https://api.mercadolibre.com/oauth/token', {
      grant_type: 'authorization_code',
      client_id: MELI_APP_ID,
      client_secret: MELI_CLIENT_SECRET,
      code,
      redirect_uri: MELI_REDIRECT_URI,
    })

    const { access_token, refresh_token, user_id, scope } = response.data

    // Busca informações do usuário no Meli
    const userResponse = await client.get(`https://api.mercadolibre.com/users/${user_id}`, {
      headers: { Authorization: `Bearer ${access_token}` },
    })

    const meliNickname = userResponse.data.nickname

    // Calcula quando o token expira (6 horas)
    const tokenExpiresAt = new Date(Date.now() + 6 * 60 * 60 * 1000)

    // Criptografa os tokens antes de salvar
    const encryptedAccessToken = encrypt(access_token)
    const encryptedRefreshToken = refresh_token ? encrypt(refresh_token) : null

    // Salva ou atualiza a integração
    const integration = await prisma.meliIntegration.upsert({
      where: {
        userId_meliUserId: {
          userId,
          meliUserId: user_id,
        },
      },
      update: {
        accessToken: encryptedAccessToken,
        refreshToken: encryptedRefreshToken,
        tokenExpiresAt,
        scopes: scope ? scope.split(' ') : [],
        isActive: true,
      },
      create: {
        userId,
        meliUserId: user_id,
        meliNickname,
        accessToken: encryptedAccessToken,
        refreshToken: encryptedRefreshToken,
        tokenExpiresAt,
        scopes: scope ? scope.split(' ') : [],
        isActive: true,
      },
    })

    return {
      meliUserId: integration.meliUserId,
      meliNickname: integration.meliNickname,
      scopes: integration.scopes,
      expiresAt: integration.tokenExpiresAt,
    }
  }

  // Busca o token descriptografado de um usuário
  async getAccessToken(userId: string, meliUserId: number): Promise<string | null> {
    const integration = await prisma.meliIntegration.findUnique({
      where: {
        userId_meliUserId: {
          userId,
          meliUserId,
        },
      },
    })

    if (!integration || !integration.isActive) {
      return null
    }

    // Verifica se o token expirou
    if (new Date() > integration.tokenExpiresAt) {
      // TODO: Implementar refresh automático
      console.log('Token expirado - precisa implementar refresh')
      return null
    }

    return decrypt(integration.accessToken)
  }

  // Lista as integrações do usuário
  async listIntegrations(userId: string) {
    return prisma.meliIntegration.findMany({
      where: { userId, isActive: true },
      select: {
        id: true,
        meliUserId: true,
        meliNickname: true,
        scopes: true,
        tokenExpiresAt: true,
        createdAt: true,
      },
    })
  }
}
