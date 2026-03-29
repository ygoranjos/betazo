## Stack

| Camada              | Tecnologia                                 |
| ------------------- | ------------------------------------------ |
| Frontend            | Next.js 15.1 (App Router) + React 19         |
| Backend             | NestJS 11 (Node.js 22 + TypeScript strict) |
| ORM                 | Prisma 6.19.2                              |
| Mensageria          | Apache Kafka 3.9 (KRaft)                   |
| Cache / Pub-Sub     | Redis 7                                    |
| Banco de Dados      | PostgreSQL 15                              |
| Connection Pooler   | PgBouncer                                  |
| Comunicação Interna | gRPC / TCP (NestJS native)                 |
| WebSockets          | Socket.io (NestJS)                         |
| Infra local         | Docker Compose                             |

---

## Como Rodar (Getting Started)

### Passo 1: Preparar o ambiente

1. **Configurar variáveis de ambiente:**
   ```bash
 cp .env.example .env ````
   Copie o `.env.example` em `.env` em ambos diretórios (`frontend/` e `backend/`)

2. **Configurar as senhas:**
   Edite `.env` e substitua as senhas conforme necessário:
   - `DATABASE_URL` (PostgreSQL via PgBouncer)
   - `REDIS_URL`
   - `KAFKA_BROKERS`
   - `JWT_SECRET`
   - `API_GATEWAY_PORT` (3000)
   - `AUTH_SERVICE_PORT` (3001)
   - `FRONTEND_URL` (http://localhost:3000)

3. **Verificar portas disponíveis:**
   Certifique que os seguintes portas estejam livres:
   - `5432` (PostgreSQL)
   - `6432` (PgBouncer)
   - `6379` (Redis)
   - `9092` e `9094` (Kafka)
   - `8080` (Kafka UI - opcional)

### Passo 2: Rodar o Backend

1. **Instalar dependências:**
   ```bash cd backend && npm install ```


2. **Subir infraestrutura (Docker):**
   ```bash docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d ```

3. **Rodar serviços:**
   - **API Gateway:**
     ```bash npm run start:dev api-gateway ```
   Disponível em http://localhost:3000

   - **Auth Service (em novo terminal):**
     ```bash npm run start:dev auth-service ```
     Disponível em http://localhost:3001

4. **Verificar banco de dados:**
   ```bash npx prisma migrate dev --schema=libs/database/prisma/schema.prisma ```

5. **Acessar interfaces de desenvolvimento:**
   - Kafka UI (Observabilidade): http://localhost:8080
   - Prisma Studio: `npx prisma studio --schema=libs/database/prisma/schema.prisma`

### Passo 3: Rodar o Frontend

1. **Instalar dependências:**
   ```bash npm install ```

2. **Rodar em desenvolvimento:**
   ```bash npm run dev ```
   Disponível em http://localhost:3000 (pode variar via `FRONTEND_URL`)

3. **Verificação de qualidade:**
   ```bash npm run lint       # ESLint
   npm run type-check # Verificação de tipos TypeScript
   npm run build     # Compilação Next.js
   ```

### Passo 4: Verificar funcionamento integrado

1. **Testar comunicação Frontend-Backend:**
   - Acesse http://localhost:3000/api-gateway/health para verificar o API Gateway
   - Faça login no frontend para autenticar via Auth Service

2. **Monitorar Kafka:**
   - Acesse Kafka UI em http://localhost:8080 para verificar mensagens.

3. **Verificar cache Redis:**
   - Confirme que dados são cacheados corretamente após autenticação.

---

## Arquitetura e Comunicação

### Fluxo de dados

```
┌─────────────────┐──────────────────────────────────────┐────────────────┐─────┐
│  Frontend (Next.js)  │                     │  Backend (NestJS)  │
│  - React Components  │  HTTP/WebSocket      │  - API Gateway      │
│  - App Router        │←──────────────────────→│  - Auth Service     │
│  - Socket.io         │                     │  - gRPC (Interno)  │
└─────────────────┘──────────────────────────────────────┘────────────────┐─────┘
                      │                     │
                      │    WebSocket Events   │
                      │←──────────────────────→│
                      │  - Game updates    │
                      │  - Odds changes   │
                      │                     │
                      ↓                     ↓
                  ┌──────────────────────────────────┐─────────────────────┘──────────────
                  │  PostgreSQL (via PgBouncer) │  Kafka (Messaging)  │  Redis (Cache)  │
                  └──────────────────────────────────┘─────────────────────┘──────────────
```

### Protocolos

- **Frontend ↔ Backend:**
  - HTTP/REST (API Gateway)
  - WebSocket (Socket.io) para eventos em tempo real

- **Backend Interno:**
  - gRPC entre serviços (API Gateway ↔ Auth Service)
  - Kafka para mensageria assíncrona (Pub/Sub)

- **Dados:**
  - PostgreSQL via PgBouncer (connection pooling)
  - Redis para cache e sessões

---

## Scripts Disponíveis

### Frontend

| Script            | Descrição                                      |
| ---------------- | ----------------------------------------------- |
| `npm run dev`    | Roda servidor de desenvolvimento (localhost:3000) |
| `npm run lint`   | Executa ESLint para verificação de código    |
| `npm run type-check` | Verificação de tipos TypeScript                |
| `npm run build`  | Build de produção Next.js                    |

### Backend

| Script                    | Descrição                                      |
| ------------------------- | ----------------------------------------------- |
| `npm run start:dev api-gateway` | Roda API Gateway (porta 3000)           |
| `npm run start:dev auth-service` | Roda Auth Service (porta 3001)              |
| `npm run lint`                 | ESLint + Prettier                           |
| `npm run test`                 | Testes unitários                            |
| `npm run build`                | Compilação TypeScript                         |

### Infraestrutura

| Script                                 | Descrição                                      |
| -------------------------------------- | ----------------------------------------------- |
| `docker compose up -d`             | Sobe todos os serviços (prod/dev)          |
| `docker compose down`             | Para todos os serviços                       |
| `docker compose -f docker-compose.dev.yml up -d` | Sobe com UI do Kafka (dev)               |

### Banco de Dados (Prisma)

| Script                                   | Descrição                                      |
| --------------------------------------- | ----------------------------------------------- |
| `npx prisma migrate dev`          | Roda migrations de desenvolvimento               |
| `npx prisma studio`                | Abre interface visual do Prisma               |

---

## Dependências de Desenvolvimento

### Frontend

**Tipagem:**
- `typescript@^5.7.0` - Tipagem estática
- `@types/react@^19.0.0` - Tipos React
- `@types/react-dom@^19.0.0` - Tipos React DOM
- `@types/react-slick@^0.23.13` - Tipos Slick
- `@types/node@^22.0.0` - Tipos Node.js

**Linting e Formatação:**
- `eslint@^9.0.0` - ESLint para código React/Next.js
- `eslint-config-next@^15.1.0` - Configuração ESLint para Next.js
- `prettier@^3.4.2` - Formatação automática

### Backend

**Tipagem:**
- `typescript@^5.7.3` - Tipagem estática
- `@types/node@^22.10.7` - Tipos Node.js
- `@types/express@^5.0.0` - Tipos Express
- `@types/jest@^30.0.0` - Tipos Jest

**Linting e Formatação:**
- `eslint@^9.18.0` - ESLint para TypeScript
- `eslint-config-prettier@^10.0.1` - Configuração Prettier
- `prettier@^3.4.2` - Formatação automática
- `eslint-plugin-prettier@^5.2.2` - Plugin ESLint Prettier

**Testes:**
- `jest@^30.0.0` - Framework de testes
- `supertest@^7.0.0` - Testes E2E
- `ts-jest@^29.2.5` - Loader Jest para TypeScript
- `ts-loader@^9.5.2` - Loader TypeScript
- `ts-node@^10.9.2` - Registrador de tipos
- `tsconfig-paths@^4.2.0` - Mapeamento de paths
- `@nestjs/schematics@^11.0.1` - Ferramentas de schema NestJS

**Prisma:**
- `prisma@^6.19.2` - CLI Prisma (migrate, studio, etc.)

---

## Guia de Desenvolvimento

**Sintoma:** Ocorre durante `docker compose up -d`
```
Error: getaddrinfo ENOTFOUND "postgres"
```
**Causa:** O PostgreSQL está rodando em container separado. A aplicação deve conectar via PgBouncer.

**Solução:**
1. Verifique se PgBouncer está rodando:
   ```bash docker ps | grep pgbouncer ```
2. Confirme se `.env` tem `DATABASE_URL` configurado corretamentemente:
   ```
   DATABASE_URL=postgresql://betazo:secret@pgbouncer:5432/betazo
   ```
3. Teste a conexão:
   ```bash docker compose exec api-gateway npm run test:integration ```

### Portas em uso

**Se uma porta já está em uso:**
```bash
lsof -i :3000 -P
```
**Alterne a porta no `.env`** do serviço correspondente.

### Logs de serviços

**Verificar logs de containers:**
```bash
docker compose logs api-gateway
docker compose logs auth-service
docker compose logs kafka
```

### Problemas com Typescript no Frontend

**Erro de compilação:**
```bash
npm run type-check
```
**Tipos desconhecidos:** Verifique `src/types/index.ts` para tipos globais.

### Serviços não respondem

**Verificar se o serviço iniciou:**
```bash
docker compose ps
```
**Reiniciar serviço específico:**
```bash
docker compose restart api-gateway
docker compose restart auth-service
```

---

## Frontend

---

## Frontend

### Estrutura do projeto

```
betazo/
├── public/                     # Assets estáticos (imagens, ícones. fontes)
│   ├── vendor/                 # Bibliotecas de terceiros
├── src/
│   ├── app/                  # Páginas e rotas (Next.js App Router)
│   │   ├── (index)/              # Home page
│   │   ├── dashboard/             # Dashboard principal
│   │   ├── livecasino/            # Página de apostas ao vivo
│   │   ├── promotions/           # Página de promoções
│   ├── components/            # Componentes compartilhados
│   │   ├── home/               # Abas e componentes da home
│   │   ├── dashboard/            # Componentes do dashboard
│   │   ├── casino/              # Componentes específicos de cassino
│   │   ├── common/              # Componentes compartilhados (barras. nav. etc)
│   │   ├── modals/              # Modais (login. signup. apostas)
│   │   ├── sliders/             # Sliders (carrossel. jogos)
│   │   ├── promos/             # Componentes de promoções
│   │   ├── navBar/              # Barra de navegação
│   ├── select/              # Componente de seleção
│   └── data/                  # Arquivos de dados estáticos
├── styles/                   # Estilos globais (SCSS)
├── types/                   # Definições de TypeScript
├── tsconfig.json               # Configuração do Next.js
├── next.config.mjs              # Configuração do Next.js (módulos)
└── .env                     # Variáveis de ambiente (não commitar)
```

### Dependências Principais

**Framework:**
- `next@^15.1.0` - Framework React para renderização SSR
- `react@^19.0.0` - Biblioteca React
- `react-dom@^19.0.0` - DOM do React

**UI Components:**
- `bootstrap@^5.3.3` - Framework CSS
- `sass@^1.80.0` - Pré-processador SASS/SCSS
- `@headlessui/react@^2.0.0` - Headless UI components
- `react-slick@^0.30.2` - Carrossel (Slick)
- `slick-carousel@^1.8.1` - Carousel
- `react-modal-video@^2.0.0` - Modais com vídeo

**Qualidade de Código:**
- `typescript@^5.7.0` - Type Safety
- `@types/react@^19.0.0` - Tipos React
- `eslint@^9.0.0` - Linting de código
- `eslint-config-next@^15.1.0` - Configuração ESLint para Next.js

### Instalar dependências

```bash
npm install
```

### Rodar em desenvolvimento

```bash
npm run dev
```

### Verificação de qualidade

```bash
npm run lint      # ESLint
npm run type-check # Verificação de tipos TypeScript
npm run build     # Compilação Next.js
```

---

## Backend

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

### Dependências Principais

**Framework NestJS:**
- `@nestjs/common@^11.0.1` - Utilitários compartilhados
- `@nestjs/core@^11.0.1` - Core do framework
- `@nestjs/platform-express@^11.0.1` - Plataforma HTTP

**Dados e ORM:**
- `@prisma/client@^6.19.2` - Cliente Prisma para PostgreSQL
- `reflect-metadata@^0.2.2` - Reflection API (introspecção)

**Mensageria:**
- `rxjs@^7.8.1` - Programação reativa

**Qualidade de Código:**
- `typescript@^5.7.3` - Type Safety
- `eslint@^9.18.0` - Linting de código
- `prettier@^3.4.2` - Formatação de código
- `eslint-plugin-prettier@^5.2.2` - Plugin ESLint Prettier
- `eslint-config-prettier@^10.0.1` - Configuração Prettier

**Testes:**
- `jest@^30.0.0` - Framework de testes
- `supertest@^7.0.0` - Testes E2E
- `@nestjs/testing@^11.0.1` - Ferramentas de teste NestJS

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
