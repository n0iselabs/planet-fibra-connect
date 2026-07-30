import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

/** Marcador de lacuna — dado que só o cliente/jurídico pode preencher. */
export function Todo({ children }: { children: ReactNode }) {
  return (
    <mark className="mx-0.5 rounded bg-star/20 px-1.5 py-0.5 font-medium not-italic text-star">
      ⚠ {children}
    </mark>
  );
}

/** Aviso de topo em documentos legais ainda não revisados/publicáveis. */
export function DraftBanner() {
  return (
    <div className="mb-8 rounded-2xl border border-star/30 bg-star/10 p-4 text-sm text-white/90">
      <strong className="text-white">Documento em elaboração (modelo-base).</strong>{" "}
      Antes de publicar, é necessária revisão jurídica e o preenchimento dos
      campos marcados como <Todo>a confirmar</Todo>. Não publicar como está.
    </div>
  );
}

/** Corpo de texto estilizado (sem depender de plugin de typography). */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      className="max-w-none text-[15px] leading-relaxed text-white/85
        [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white md:[&_h2]:text-2xl
        [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:font-semibold [&_h3]:text-white
        [&_p]:mt-3
        [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:marker:text-primary
        [&_a:not([data-cta])]:text-primary [&_a:not([data-cta])]:underline [&_a:not([data-cta])]:underline-offset-2
        [&_strong]:text-white"
    >
      {children}
    </div>
  );
}

export function PageShell({
  eyebrow,
  title,
  subtitle,
  updated,
  draft = false,
  prose = true,
  wide = false,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  updated?: string;
  draft?: boolean;
  prose?: boolean;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Cabeçalho da página */}
        <section className="relative bg-hero overflow-hidden border-b border-white/10 pt-28 pb-14 md:pt-36 md:pb-16">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-royal/30 blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-3xl px-5 md:px-8">
            {eyebrow && (
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {eyebrow}
              </div>
            )}
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-[42px] font-display font-extrabold tracking-tight text-white text-balance">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
                {subtitle}
              </p>
            )}
            {updated && (
              <p className="mt-5 text-xs text-white/60">
                Última atualização: {updated}
              </p>
            )}
          </div>
        </section>

        {/* Conteúdo */}
        <section className="bg-section">
          <div
            className={`mx-auto ${wide ? "max-w-6xl" : "max-w-3xl"} px-5 md:px-8 py-14 md:py-20`}
          >
            {draft && <DraftBanner />}
            {prose ? <Prose>{children}</Prose> : children}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
