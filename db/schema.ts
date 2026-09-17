// Schema físico do banco (Drizzle ORM) — fonte de verdade conforme CLAUDE.md.
//
// NÃO IMPLEMENTAR AINDA: isto é Fase 2 do roadmap
// (docs/especificacao-tecnica.md, seção 9), e a Fase 1 (setup) foi
// explicitamente escopada para não avançar até essa fase ser revisada.
//
// Quando a Fase 2 começar, modelar as entidades da seção 4.1 da
// especificação (Organizacao, Usuario, Passageiro, Responsavel, Servico,
// Rota, Parada, Alocacao, Viagem, Presenca, Cobranca, PosicaoViagem) e a
// tabela eventos_sync para idempotência do outbox offline (seção 6.2).
// Toda tabela de negócio precisa de organizacao_id (regra não negociável
// do CLAUDE.md, item 3).

export {};
