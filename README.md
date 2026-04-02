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

## Como rodar

### 1. Variáveis de ambiente

```bash
cp .env.example .env
```

Edite o `.env` na raiz e no `backend/` com as senhas e chaves necessárias. Nunca commite o `.env`.

### 2. Infraestrutura (Docker)

```bash
# Desenvolvimento (expõe portas + Kafka UI)
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d

# Derrubar
docker compose -f docker-compose.yml -f docker-compose.dev.yml down
```

### 3. Backend

```bash
cd backend
npm install
npx prisma migrate dev --schema=libs/database/prisma/schema.prisma

# Em terminais separados:
nest start api-gateway --watch
nest start auth-service --watch
nest start live-odds-service --watch
```

### 4. Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Comandos úteis

```bash
# Testes
cd backend && npm run test

# Verificar odds no Redis
docker exec betazo_redis redis-cli -a <REDIS_PASSWORD> keys "odds:match:*"

# Interface visual do banco
cd backend && npx prisma studio --schema=libs/database/prisma/schema.prisma

# Logs de um serviço Docker
docker compose logs redis --follow
```
