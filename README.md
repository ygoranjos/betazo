## Stack

| Camada              | Tecnologia                                 |
| ------------------- | ------------------------------------------ |
| Frontend            | Next.js 13 (App Router) + React 18         |
| Backend             | NestJS 11 (Node.js 22 + TypeScript strict) |
| ORM                 | Prisma 6                                   |
| Mensageria          | Apache Kafka 3.9 (KRaft)                   |
| Cache / Pub-Sub     | Redis 7                                    |
| Banco de Dados      | PostgreSQL 15                              |
| Connection Pooler   | PgBouncer                                  |
| Comunicação Interna | gRPC / TCP (NestJS native)                 |
| WebSockets          | Socket.io (NestJS)                         |
| Infra local         | Docker Compose                             |

---

## Estrutura do repositório

```
betazo/
├── backend/                      # NestJS Monorepo
│   ├── apps/
│   │   ├── api-gateway/          # Ponto de entrada externo (REST + WebSocket)
│   │   └── auth-service/         # Autenticação e sessões (JWT)
│   ├── libs/
│   │   └── database/             # Prisma Client + DatabaseModule compartilhado
│   │       └── prisma/
│   │           ├── schema.prisma # Modelos: User, Wallet
│   │           └── migrations/   # Histórico de migrations do banco
├── docker-compose.yml            # Infraestrutura base
├── docker-compose.dev.yml        # Overrides de desenvolvimento
└── .env                          # Variáveis de ambiente (não commitar)
```

---

## Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) e Docker Compose v2+
- Node.js 22+

---

## Configuração inicial

1. Copie o arquivo de variáveis de ambiente:

```bash
cp .env.example .env
```

2. Ajuste as senhas no `.env` conforme necessário (nunca commite o `.env`).

---

## Infraestrutura local (Docker)

A infraestrutura é dividida em dois arquivos:

| Arquivo                  | Uso                                                      |
| ------------------------ | -------------------------------------------------------- |
| `docker-compose.yml`     | Base — todos os ambientes                                |
| `docker-compose.dev.yml` | Override de desenvolvimento (portas expostas + Kafka UI) |

### Subir em desenvolvimento

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

### Subir em produção / CI

```bash
docker compose up -d
```

### Derrubar (use sempre os mesmos arquivos do `up`)

```bash
# Dev
docker compose -f docker-compose.yml -f docker-compose.dev.yml down

# Prod / CI
docker compose down
```

---

## Serviços e portas (ambiente de desenvolvimento)

| Serviço    | Porta  | Descrição                                       |
| ---------- | ------ | ----------------------------------------------- |
| PostgreSQL | `5432` | Banco principal (acesso direto para migrations) |
| PgBouncer  | `6432` | Connection pooler — usar sempre nas aplicações  |
| Redis      | `6379` | Cache e Pub/Sub                                 |
| Kafka      | `9092` | Comunicação interna (container-to-container)    |
| Kafka      | `9094` | Acesso externo (NestJS rodando fora do Docker)  |
| Kafka UI   | `8080` | Observabilidade — http://localhost:8080         |

> Em produção, apenas o Kafka é acessível externamente via load balancer. PostgreSQL, PgBouncer e Redis ficam na rede interna.

---

## Backend (NestJS)

### Instalar dependências

```bash
cd backend
npm install
```

### Rodar em desenvolvimento

```bash
# api-gateway
npm run start:dev api-gateway

# auth-service (em outro terminal)
npm run start:dev auth-service
```

### Verificação de qualidade

```bash
cd backend

npm run lint       # ESLint + Prettier
npm run test       # Testes unitários
npm run build      # Compilação TypeScript
```

---

## Banco de dados (Prisma)

### Criar ou aplicar migrations

```bash
cd backend
npx prisma migrate dev --name <descricao> --schema=libs/database/prisma/schema.prisma
```

### Abrir interface visual do banco

```bash
cd backend
npx prisma studio --schema=libs/database/prisma/schema.prisma
```
