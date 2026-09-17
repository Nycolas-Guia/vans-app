import { defineConfig } from 'drizzle-kit';

// Preenchido na Fase 2 (docs/especificacao-tecnica.md, seção 9). DATABASE_URL
// vem de apps/api/.env — o hosting definitivo (Railway/Render + Neon) ainda
// é uma decisão em aberto (seção 10).
export default defineConfig({
  schema: './schema.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL ?? '',
  },
});
