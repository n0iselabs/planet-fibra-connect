// Helpers de SEO compartilhados entre as rotas.
//
// SITE_URL vem de VITE_SITE_URL (setável no Vercel/host); default = URL de
// apresentação no Vercel. Ao migrar para o domínio real, defina VITE_SITE_URL
// no host (ou troque o default) — canonical/og/JSON-LD seguem junto num lugar só.
const ENV = import.meta.env as unknown as Record<string, string | undefined>;

export const SITE_URL = ENV.VITE_SITE_URL ?? "https://planettel.vercel.app";

/**
 * true em URLs de preview (vercel.app): dispara o noindex global da
 * apresentação. Ao apontar SITE_URL para o domínio real, vira false
 * automaticamente e o site passa a ser indexável.
 */
export const IS_PREVIEW = SITE_URL.includes("vercel.app");

/** `<link rel="canonical">` auto-referente para a rota informada (path começa com "/"). */
export const canonical = (path: string) => ({
  rel: "canonical",
  href: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
});

/**
 * `meta robots` para páginas que NÃO devem ser indexadas: portal mock
 * (dados fictícios) e páginas legais ainda em rascunho. Mantém a página
 * rastreável (para que o noindex seja lido), mas fora do índice do Google.
 */
export const NOINDEX = { name: "robots", content: "noindex, nofollow" } as const;
