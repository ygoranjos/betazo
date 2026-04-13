# Betazo Frontend — Contexto para Desenvolvimento

## Stack e Versões

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript strict mode
- **Estilização:** Bootstrap 5 + Sass
- **Estado global:** Zustand 5
- **Fetching/cache:** TanStack React Query 5
- **Formulários:** React Hook Form + Zod
- **HTTP:** Axios (com interceptors globais)
- **Porta de desenvolvimento:** 3005

---

## Estrutura de Pastas

```
app/                  → rotas Next.js (App Router)
components/
  auth/               → ProtectedRoute, PublicRoute
  bootstrap/          → Bootstrap.tsx — carrega o JS do Bootstrap via useEffect
  cards/              → componentes de card reutilizáveis
  common/             → Header, Footer, Search, etc.
  home/               → seções da página inicial
  modals/             → LoginModal, SignUpModal
  providers/          → AuthProvider (inicialização de auth no mount)
hooks/
  useAuth.ts          → useAuth, useLogin, useRegister, useLogout
  useForm.ts          → useAppForm, useFormMutation
  index.ts            → barrel de exports dos hooks
lib/
  api.ts              → instâncias axios + interceptors + endpoints tipados
  auth.utils.ts       → helpers de leitura do store (sem acesso a token)
  schemas.ts          → schemas Zod para validação de formulários
store/
  authStore.ts        → estado de autenticação (Zustand)
  toastStore.ts       → notificações toast (Zustand)
  uiStore.ts          → estado de UI (Zustand)
  index.ts            → barrel de exports dos stores
public/               → assets estáticos
```

---

## Autenticação — Arquitetura

### Fluxo de login/registro

1. Usuário preenche formulário → `useLogin` / `useRegister` chama o endpoint via axios
2. Backend retorna `{ user }` no body e seta dois cookies HttpOnly:
   - `accessToken` — expira em 1h
   - `refreshToken` — expira em 7d, path `/auth/refresh`
3. Frontend armazena apenas `user` (não-sensível) no Zustand, persistido em `localStorage`
4. Nenhum token é armazenado em JavaScript — o browser gerencia os cookies automaticamente

### Renovação automática de token (refresh)

- Todas as instâncias axios têm `withCredentials: true` — cookies são enviados automaticamente
- Interceptor de resposta em `lib/api.ts`: se receber `401`, chama `POST /auth/refresh`
  - Se o refresh retornar sucesso → repete a requisição original
  - Se o refresh falhar → limpa o estado local e redireciona para `/`
- Requisições em paralelo que recebem 401 aguardam o refresh em andamento antes de serem retentadas (fila com `refreshSubscribers`)

### Logout

```typescript
// useAuth.ts
logout: () => {
  authEndpoints.logout(); // POST /auth/logout — backend limpa os cookies
  logout();              // limpa o Zustand store
  queryClient.clear();   // limpa o cache do React Query
}
```

---

## Estado de Auth (Zustand)

O store **não persiste token** — apenas dados não-sensíveis do usuário.

```typescript
interface AuthState {
  user: User | null;        // { id, email, username, createdAt }
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  _hasHydrated: boolean;

  setAuth: (user: User) => void;  // chamado após login/registro bem-sucedido
  logout: () => void;
  // ...
}
```

Persiste em `localStorage`: `user` e `isAuthenticated` (sem token).

---

## Regras de Segurança do Frontend

- **Nunca armazenar token JWT em localStorage, sessionStorage ou estado React**
- **Nunca enviar o token manualmente no header `Authorization`** — o cookie é enviado automaticamente pelo browser com `withCredentials: true`
- Cookies são HttpOnly: JS não consegue lê-los, nem mesmo via `document.cookie`
- `lib/auth.utils.ts` **não expõe funções de token** — o token não é acessível pelo JavaScript

---

## Instâncias Axios

Definidas em `lib/api.ts`. Todas com `withCredentials: true`.

| Instância     | Base URL (`process.env`)            | Destino               |
| ------------- | ----------------------------------- | --------------------- |
| `authApi`     | `NEXT_PUBLIC_AUTH_URL` (`:3000`)    | auth-service          |
| `gatewayApi`  | `NEXT_PUBLIC_API_GATEWAY_URL` (`:3001`) | api-gateway       |
| `liveOddsApi` | `NEXT_PUBLIC_LIVE_ODDS_URL` (`:3002`)   | live-odds-service |

---

## Variáveis de Ambiente

```env
NEXT_PUBLIC_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_GATEWAY_URL=http://localhost:3001
NEXT_PUBLIC_LIVE_ODDS_URL=http://localhost:3002
```

---

## Validação de Formulários

Schemas definidos em `lib/schemas.ts` com Zod. Formulários usam React Hook Form com `zodResolver`.

- `registerSchema` — email, username (3-20 chars, letras/números/_), password (8+ chars, maiúscula, minúscula, número, especial)
- `loginSchema` — email, password

---

## Dependências com Quirks

- `react-modal-video` — não suporta React 19 oficialmente; instalar com `--legacy-peer-deps`
- `@popperjs/core` — peer dependency do Bootstrap 5 JS; precisa ser instalado explicitamente
- `react-hook-form`, `@hookform/resolvers`, `zod` — adicionados ao código mas ausentes no `package.json` original; instalar com `--legacy-peer-deps`
- Sempre usar `npm install --legacy-peer-deps` neste projeto

---

## Como Subir o Frontend

```bash
cd frontend
npm install --legacy-peer-deps
npm run dev  # porta 3005
```

Requer backend (auth-service + api-gateway) e infra Docker rodando.
