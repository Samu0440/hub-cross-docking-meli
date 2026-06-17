import bcrypt from 'bcryptjs'
import { PrismaClient } from '../../../prisma/generated/client'
import { generateToken } from '../../shared/utils/jwt'

const prisma = new PrismaClient()

export class AuthService {
  async register(data: {
    email: string
    password: string
    name: string
    role: 'FORNECEDOR' | 'VENDEDOR'
  }) {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email }
    })

    if (existingUser) {
      throw new Error('Email já cadastrado')
    }

    const passwordHash = await bcrypt.hash(data.password, 10)

    const user = await prisma.user.create({
      data: {
        email: data.email,
        passwordHash,
        name: data.name,
        role: data.role
      }
    })

    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role
    })

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      token
    }
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      throw new Error('Email ou senha inválidos')
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash)

    if (!isPasswordValid) {
      throw new Error('Email ou senha inválidos')
    }

    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role
    })

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      token
    }
  }
}
