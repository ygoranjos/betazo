# Stage 1: Instala todas as dependências
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Stage 2: Remove devDependencies (sem acessar a internet)
FROM deps AS prod-deps
RUN npm prune --omit=dev

# Stage 3: Gera Prisma client e compila o serviço
FROM deps AS builder
COPY nest-cli.json tsconfig*.json ./
COPY apps ./apps
COPY libs ./libs
RUN npx prisma generate --schema=libs/database/prisma/schema.prisma
ARG APP_NAME
RUN npx nest build ${APP_NAME}

# Stage 4: Roda as migrations (serviço init no docker-compose)
FROM builder AS migrate
CMD ["sh", "-c", "npx prisma migrate deploy --schema=libs/database/prisma/schema.prisma"]

# Stage 5: Imagem de produção
FROM node:22-alpine AS runner
WORKDIR /app

ARG APP_NAME
ENV APP_NAME=${APP_NAME}

COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/dist ./dist
COPY libs/database/prisma ./libs/database/prisma

CMD ["sh", "-c", "node dist/apps/${APP_NAME}/main"]
