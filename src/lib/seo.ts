// Helpers de SEO compartilhados entre as rotas.
//
// TODO(deploy): confirmar o domínio final do novo site. Enquanto pendente,
// todas as URLs absolutas (canonical, og:url, og:image, JSON-LD) usam
// planettel.com.br — trocar aqui num único lugar quando o domínio for definido.
export const SITE_URL = "https://planettel.com.br";

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
