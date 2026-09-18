# App de Gestão de Vans Escolares (Litoral Sul SP)

Monorepo Turborepo. Contexto completo de produto e arquitetura em
[`docs/especificacao-tecnica.md`](./docs/especificacao-tecnica.md);

## Status: Fase 1 — Setup (em andamento)

Ver seção 9 da especificação técnica para o roadmap completo. Esta fase
entrega:

- [x] Estrutura de monorepo (`apps/`, `packages/`, `db/`, `docs/`) via
      Turborepo + pnpm workspaces
- [x] `apps/api` — skeleton NestJS (health check em `/health`, sem módulos
      de domínio ainda)
- [x] `apps/motorista` e `apps/responsavel` — skeleton Expo/React Native
      (tela única de placeholder)
- [x] `packages/domain-types`, `packages/api-client`, `packages/ui` —
      pacotes vazios, prontos para receber conteúdo na Fase 2+
- [x] `db/` — pacote Drizzle configurado, **schema físico ainda não
      implementado** (fica para a Fase 2, que ainda não foi iniciada)
- [x] Lint (ESLint + Prettier) e TypeScript estrito configurados na raiz
- [x] CI básico no GitHub Actions (`.github/workflows/ci.yml`): install →
      format check → lint → typecheck → test → build

**Não incluído nesta fase (propositalmente):** nada do schema (Fase 2),
módulos de domínio no backend (Fase 3/4), geolocalização, sync offline,
cobrança ou telas reais dos apps.

## Pré-requisitos

- Node.js 20+ (ver `.nvmrc`)
- pnpm 9+ (`corepack enable` já resolve a versão fixada em `package.json`)

## Como rodar

```bash
pnpm install
pnpm dev       # roda dev de todos os apps/pacotes via turbo
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Nenhum `pnpm install` foi executado ao gerar este monorepo (ambiente sem
acesso à rede) — as versões em cada `package.json` são pins razoáveis, mas
`pnpm-lock.yaml` só existe depois do primeiro `pnpm install` local.

## Estrutura

```
/apps
  /motorista        React Native/Expo — offline-first
  /responsavel       React Native/Expo
  /api               NestJS
/packages
  /domain-types      tipos compartilhados entre os 3 apps
  /api-client        client tipado da API
  /ui                design system compartilhado
/db
  schema.ts          Drizzle — vazio, aguardando Fase 2
/docs
  especificacao-tecnica.md
```

## Decisões em aberto (não decidir sozinho — ver especificação, seção 10)

- SDK de mapa: Mapbox vs. Google Maps
- Hosting definitivo do backend/banco
- Detalhes de autenticação (rotação de refresh token, MFA para operador?)
- Política de retenção de `posicoes_viagem` (GPS histórico)
