# Betazo

Betazo é uma plataforma de apostas esportivas online. Os usuários podem criar conta, depositar saldo e realizar apostas em eventos esportivos ao vivo e pré-jogo, acompanhando as cotações atualizadas em tempo real diretamente na interface.

O backend consome odds de uma API externa (odds-api.io v3) via WebSocket, normaliza os dados e os distribui para os clientes conectados com latência abaixo de 20ms.

---

## Funcionalidades

- **Cadastro e autenticação** — registro de conta e login com JWT
- **Carteira digital** — saldo por usuário, consulta em tempo real
- **Odds ao vivo** — cotações atualizadas em tempo real via WebSocket (Socket.io)
- **Apostas** — validação, aceitação e liquidação de apostas _(em desenvolvimento)_

---

## Stack

| Camada             | Tecnologia                                 |
| ------------------ | ------------------------------------------ |
| Frontend           | Next.js 15 (App Router) + React 19         |
| Backend            | NestJS 11 (Node.js 22 + TypeScript strict) |
| Banco de dados     | PostgreSQL 15 via PgBouncer                |
| Cache / Pub-Sub    | Redis 7                                    |
| Mensageria         | Apache Kafka 3.9 (KRaft)                   |
| WebSocket cliente  | Socket.io (NestJS)                         |
| WebSocket provider | ws (conexão com odds-api.io v3)            |
| ORM                | Prisma 6                                   |
| Infra local        | Docker Compose                             |

---

## Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) e Docker Compose v2+
- Node.js 22+

---

## Portas

| Serviço        | Porta |
| -------------- | ----- |
| Frontend       | 3005  |
| Auth Service   | 3000  |
| API Gateway    | 3001  |
| Live Odds      | 3002  |
| Betting        | 3003  |
| Kafka UI (dev) | 8080  |

---

## Como rodar

### 1. Variáveis de ambiente

```bash
# Infraestrutura (PostgreSQL, Redis, Kafka)
cp .env.example .env

# Backend (JWT, DATABASE_URL, Redis, API de odds)
cp backend/.env.example backend/.env

# Frontend — só necessário para rodar fora do Docker
cp frontend/.env.local.example frontend/.env.local
```

Preencha os valores nos arquivos `.env` criados. Nunca commite arquivos `.env`.

### 2. Rodar tudo via Docker (recomendado)

Sobe backend, banco de dados e frontend de uma vez:

```bash
# Produção
docker compose up -d

# Desenvolvimento (expõe portas individuais + Kafka UI em localhost:8080)
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d

# Derrubar
docker compose down
```

O frontend ficará disponível em `http://localhost:3005`.

### 3. Rodar backend fora do Docker (desenvolvimento)

```bash
# Sobe só a infraestrutura (banco, Redis, Kafka)
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d postgres pgbouncer redis kafka

cd backend
npm install
npx prisma migrate dev --schema=libs/database/prisma/schema.prisma

# Em terminais separados:
npm run start:dev -- auth-service
npm run start:dev -- api-gateway
npm run start:dev -- betting-service
npm run start:dev -- live-odds-service
```

### 4. Rodar frontend fora do Docker (desenvolvimento)

```bash
cd frontend
npm install
npm run dev        # desenvolvimento — http://localhost:3005
```

Para rodar em modo produção fora do Docker:

```bash
cd frontend
npm run build
npm run start      # http://localhost:3005
```

---

## Comandos úteis

```bash
# Testes
cd backend && npm run test

# Logs de um serviço Docker
docker compose logs frontend --follow
docker compose logs api-gateway --follow

# Verificar odds no Redis
docker exec betazo_redis redis-cli -a <REDIS_PASSWORD> keys "odds:match:*"

# Interface visual do banco
cd backend && npx prisma studio --schema=libs/database/prisma/schema.prisma

# Rebuildar apenas o frontend após mudanças
docker compose build frontend && docker compose up -d frontend
```

---

## Arquitetura de Autenticação (Frontend)

O frontend utiliza uma arquitetura resiliente e bem estruturada para gerenciar autenticação:

### Tecnologias

- **Zustand** — Gerenciamento de estado global com persistência em localStorage
- **LocalStorage** — Armazenamento persistente do token e dados do usuário
- **Axios Interceptors** — Injeção automática do token nos headers das requisições
- **React Query** — Cache e gerenciamento de requisições de autenticação

### Estrutura

```
frontend/
├── lib/
│   ├── api.ts              # Configuração de axios com interceptors
│   ├── auth.utils.ts        # Utilitários de autenticação (fora do React)
│   └── schemas.ts          # Schemas Zod para validação de formulários
├── store/
│   ├── authStore.ts         # Zustand store com persistência
│   ├── uiStore.ts           # Estado global de UI (menus, modais)
│   └── toastStore.ts        # Sistema de notificações
├── hooks/
│   ├── useAuth.ts           # Hooks de autenticação (login, register, logout, etc.)
│   └── useForm.ts           # Hook wrapper para React Hook Form
├── components/
│   ├── auth/
│   │   ├── ProtectedRoute.tsx  # Wrapper para rotas protegidas
│   │   └── PublicRoute.tsx      # Wrapper para rotas públicas
│   └── providers/
│       └── AuthProvider.tsx     # Provider de contexto de autenticação
```

### Uso

```typescript
// Em componentes
import { useAuth, useLogin, useLogout, ProtectedRoute } from '@/hooks';
import { useCurrentUser } from '@/store';

// Obter estado de autenticação
const { user, isAuthenticated, logout } = useAuth();
const currentUser = useCurrentUser();

// Fazer login
const { login, isLoading } = useLogin();
await login({ email, password });

// Proteger uma rota
<ProtectedRoute>
  <Dashboard />
</ProtectedRoute>
```

### Headers Automáticos

Todas as requisições HTTP incluem automaticamente:

- `Authorization: Bearer <token>` — Token JWT
- `X-User-Id: <userId>` — ID do usuário
- `X-User-Username: <username>` — Username do usuário

### Token Management

- Token persistido em localStorage via Zustand persist middleware
- Verificação automática de expiração do token
- Redirecionamento automático em caso de 401
- Cache de requisições via React Query

---

## Formulários e Validação

O frontend utiliza **React Hook Form** + **Zod** para gerenciamento e validação de formulários:

### Tecnologias

- **React Hook Form** — Gerenciamento de estado de formulários com performance otimizada
- **Zod** — Validação de schemas com TypeScript inference

### Schemas Centralizados

Todos os schemas de validação estão em `lib/schemas.ts`:

```typescript
import { loginSchema, registerSchema, type LoginFormData } from "@/lib/schemas";

// Schema de Login
export const loginSchema = z.object({
  email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
  password: z.string().min(1, "Senha é obrigatória"),
});

// Schema de Registro
export const registerSchema = z
  .object({
    email: z.string().email("Email inválido"),
    username: z.string().min(3).max(20),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não conferem",
    path: ["confirmPassword"],
  });
```

### Hooks de Formulário

```typescript
import { useAppForm, useFormMutation } from "@/hooks";

// Hook simples
const { register, handleSubmit, formState } = useAppForm({
  schema: loginSchema,
});

// Hook com mutation integrada
const form = useFormMutation({
  schema: registerSchema,
  mutation: useRegister(),
  onSuccess: (data) => console.log("Sucesso!", data),
});
```

### Validações Disponíveis

- **Auth**: login, register, forgot password, reset password
- **User**: update profile, change password
- **Betting**: place bet
- **Wallet**: deposit, withdraw
