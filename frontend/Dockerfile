# Stage 1: Instala dependências
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Stage 2: Build da aplicação
# As URLs dos serviços precisam estar disponíveis em build time
# pois os rewrites do next.config.mjs são compilados nessa etapa
FROM deps AS builder
COPY . .

ARG NEXT_PUBLIC_AUTH_URL=http://auth-service:3000
ARG NEXT_PUBLIC_API_GATEWAY_URL=http://api-gateway:3001
ARG NEXT_PUBLIC_LIVE_ODDS_URL=http://live-odds-service:3002

ENV NEXT_PUBLIC_AUTH_URL=$NEXT_PUBLIC_AUTH_URL
ENV NEXT_PUBLIC_API_GATEWAY_URL=$NEXT_PUBLIC_API_GATEWAY_URL
ENV NEXT_PUBLIC_LIVE_ODDS_URL=$NEXT_PUBLIC_LIVE_ODDS_URL

RUN npm run build

# Stage 3: Imagem de produção (standalone — bem menor)
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3005
ENV PORT=3005
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
