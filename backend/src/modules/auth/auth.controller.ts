import { Request, Response } from 'express'
import { AuthService } from './auth.service'

const authService = new AuthService()

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { email, password, name, role } = req.body

      if (!email || !password || !name || !role) {
        res.status(400).json({ error: 'Todos os campos são obrigatórios' })
        return
      }

      const result = await authService.register({ email, password, name, role })
      res.status(201).json(result)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body

      if (!email || !password) {
        res.status(400).json({ error: 'Email e senha são obrigatórios' })
        return
      }

      const result = await authService.login(email, password)
      res.json(result)
    } catch (error: any) {
      res.status(401).json({ error: error.message })
    }
  }
}
