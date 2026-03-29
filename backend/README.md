# Betazo — Backend

Monorepo NestJS da plataforma de apostas Betazo.

## Stack

- **Runtime:** Node.js v22 + TypeScript strict
- **Framework:** NestJS v11 (monorepo nativo)
- **ORM:** Prisma v6
- **Banco:** PostgreSQL 15 via PgBouncer (porta 6432)
- **Cache:** Redis 7 (porta 6379)
- **Fila:** Apache Kafka 3.9 KRaft (porta 9094)

## Estrutura

```
apps/
  api-gateway/       -> Ponto de entrada externo (REST + WebSocket)
  auth-service/      -> Registro, login e JWT
libs/
  database/          -> Módulo Prisma compartilhado (PostgreSQL)
```

## Pré-requisitos

- Node.js v22+
- Docker e Docker Compose

## Configuração

1. Copie o arquivo de variáveis de ambiente:

```bash
cp .env.example .env
```

2. Preencha os valores no `.env`:

```env
DATABASE_URL=
DIRECT_DATABASE_URL=

JWT_SECRET="seu_secret_aqui"
JWT_EXPIRES_IN="1d"
```

3. Suba a infraestrutura (a partir da raiz do projeto `betazo/`):

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

4. Instale as dependências:

```bash
npm install
```

## Rodando os serviços

```bash
# auth-service (porta 3001)
npm run start:dev -- auth-service

# api-gateway (porta 3000)
npm run start:dev -- api-gateway
```

## Testes

```bash
# todos os testes unitários
npm run test

# cobertura
npm run test:cov
```

## Banco de dados

```bash
# rodar migrations
npx prisma migrate deploy --schema libs/database/prisma/schema.prisma

# abrir Prisma Studio (interface visual)
npx prisma studio --schema libs/database/prisma/schema.prisma
```
