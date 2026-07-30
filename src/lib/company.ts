// Dados institucionais/cadastrais da PlanetTel.
// Fonte: dados confirmados pelo cliente (razão social + CNPJ) e endereço já em uso no site.
// Campos marcados como PENDENTE dependem de confirmação do cliente / jurídico
// antes de publicar (ver páginas legais).

export const COMPANY = {
  legalName: "PLANET TEL TELECOMUNICAÇÕES LTDA",
  brandName: "Planet Tel",
  cnpj: "34.266.308/0001-03",
  address: "Rua Prefeito Cido Franco, 88 — Centro, Rio Grande da Serra/SP",
  cities: "Rio Grande da Serra · Ribeirão Pires · Mauá",

  // PENDENTES — confirmar com o cliente/jurídico antes de publicar:
  anatelOutorga: null as string | null, // nº da autorização SCM na Anatel
  dpoContact: null as string | null, // e-mail do Encarregado (DPO) — LGPD
  privacyEmail: null as string | null, // canal para pedidos de titular de dados
} as const;
