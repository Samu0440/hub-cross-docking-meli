export type UserRole = 'FORNECEDOR' | 'VENDEDOR' | 'ADMIN'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
}

export interface AuthResponse {
  user: User
  token: string
}