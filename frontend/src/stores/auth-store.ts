'use client'

import { create } from 'zustand'
import { User, AuthResponse } from '@/types/user'
import { api } from '@/lib/api'

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string, role: string) => Promise<void>
  logout: () => void
  loadFromStorage: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    const response = await api.post<AuthResponse>('/auth/login', { email, password })
    const { user, token } = response.data

    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))

    set({ user, token, isAuthenticated: true })
  },

  register: async (email: string, password: string, name: string, role: string) => {
    const response = await api.post<AuthResponse>('/auth/register', { email, password, name, role })
    const { user, token } = response.data

    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))

    set({ user, token, isAuthenticated: true })
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    set({ user: null, token: null, isAuthenticated: false })
  },

  loadFromStorage: () => {
    const token = localStorage.getItem('token')
    const userStr = localStorage.getItem('user')

    if (token && userStr) {
      const user = JSON.parse(userStr)
      set({ user, token, isAuthenticated: true })
    }
  },
}))