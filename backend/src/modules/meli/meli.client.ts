import axios, { AxiosInstance } from 'axios'

export function createMeliClient(accessToken?: string): AxiosInstance {
  const client = axios.create({
    baseURL: 'https://api.mercadolibre.com',
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  })

  // Interceptor para renovar token automaticamente em caso de 401
  client.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        // TODO: Implementar refresh automático do token
        console.log('Token expirado - precisa implementar refresh')
      }
      return Promise.reject(error)
    }
  )

  return client
}