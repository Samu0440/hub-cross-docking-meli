
# 🏪 Hub Cross-Docking - Mercado Livre

![Status](https://img.shields.io/badge/status-MVP-brightgreen)
![Node](https://img.shields.io/badge/node-20.x-green)
![Next](https://img.shields.io/badge/next-16.x-black)
![TypeScript](https://img.shields.io/badge/typescript-5.x-blue)

**Hub de Cross-Docking e Dropshipping Nacional** integrado ao ecossistema do 
**Mercado Livre**.

---

## 📸 Screenshots

| Login | Dashboard |
|-------|-----------|
| ![Login](docs/login.png) | ![Produtos](docs/products.png) |

---

## 🚀 Funcionalidades

- Autenticação JWT com bcrypt
- CRUD de Produtos
- OAuth 2.0 Mercado Livre
- Criptografia AES-256-GCM
- Webhook de Pedidos
- Publicação automática de anuncios

---

## 🛠️ Stack

**Backend:** Node.js, TypeScript, Express, Prisma, PostgreSQL (Neon)
**Frontend:** Next.js 16, Tailwind CSS, Shadcn UI, Zustand

---

## 🚀 Como Rodar

Backend:
cd backend
npm install
npx prisma generate
npx prisma db push
npx tsx src/server.ts

Frontend:
cd frontend
npm install
npm run dev

---

## 👤 Autor

**Samuel Ventura** ([@Samu0440](https://github.com/Samu0440))
FIM
