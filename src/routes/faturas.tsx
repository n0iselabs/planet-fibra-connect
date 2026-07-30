import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, Copy, Download, QrCode, Receipt } from "lucide-react";
import { PortalHeader } from "@/components/site/PortalHeader";
import { FATURAS, PIX_CODE } from "@/lib/mock-portal";

export const Route = createFileRoute("/faturas")({
  head: () => ({
    meta: [{ title: "Faturas — Área do Cliente | Planet Tel" }],
  }),
  component: FaturasPage,
});

function FaturasPage() {
  const [showPix, setShowPix] = useState(false);
  const [copied, setCopied] = useState(false);
  const aberta = FATURAS.find((f) => !f.pago);

  function copyPix() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(PIX_CODE).then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      });
    }
  }

  return (
    <div className="min-h-screen bg-section text-foreground">
      <PortalHeader />

      <main className="mx-auto max-w-4xl px-5 py-10 md:px-8 md:py-14">
        <Link
          to="/painel"
          className="inline-flex items-center gap-1.5 text-sm text-white/60 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao painel
        </Link>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-extrabold text-white md:text-3xl">
              Faturas
            </h1>
            <p className="mt-1 text-white/70">
              Pague por PIX, baixe a 2ª via e acompanhe o histórico.
            </p>
          </div>
          <span className="rounded-full border border-star/30 bg-star/10 px-3 py-1 text-xs font-medium text-star">
            Ambiente de demonstração
          </span>
        </div>

        {/* Fatura em aberto */}
        {aberta && (
          <div className="mt-8 rounded-2xl border border-primary/25 bg-gradient-to-b from-primary/[0.08] to-surface p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-white/70">
                  <Receipt className="h-4 w-4 text-primary" />
                  Fatura em aberto
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-sm text-white/60">R$</span>
                  <span className="font-display text-3xl font-extrabold text-white">
                    {aberta.valor}
                  </span>
                </div>
                <div className="mt-1 text-sm text-white/70">
                  {aberta.mes} · vence em {aberta.vence}
                </div>
              </div>
              <span className="rounded-full bg-star/15 px-2.5 py-0.5 text-xs font-medium text-star">
                Em aberto
              </span>
            </div>

            {!showPix ? (
              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setShowPix(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-cta transition hover:bg-[color:var(--primary-hover)]"
                >
                  <QrCode className="h-4 w-4" />
                  Pagar com PIX
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  <Download className="h-4 w-4" />
                  Baixar 2ª via
                </button>
              </div>
            ) : (
              <div className="mt-5 rounded-xl border border-white/10 bg-night/50 p-4">
                <p className="text-xs text-white/70">
                  Copie o código PIX e pague no app do seu banco:
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <code className="flex-1 truncate rounded-lg bg-black/30 px-3 py-2 font-mono text-xs text-white/80">
                    {PIX_CODE}
                  </code>
                  <button
                    type="button"
                    onClick={copyPix}
                    aria-label="Copiar código PIX"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-[color:var(--primary-hover)]"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copiado" : "Copiar"}
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] text-white/40">
                    Código ilustrativo (demonstração).
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowPix(false)}
                    className="text-xs font-medium text-white/70 hover:text-white"
                  >
                    Voltar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Histórico */}
        <h2 className="mt-10 text-sm font-semibold uppercase tracking-widest text-white/60">
          Histórico
        </h2>
        <div className="mt-3 divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/8 bg-surface">
          {FATURAS.map((f) => (
            <div key={f.id} className="flex items-center gap-4 px-5 py-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/50">
                <Receipt className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <div className="text-white">{f.mes}</div>
                <div className="text-xs text-white/50">Vencimento {f.vence}</div>
              </div>
              <span className="ml-auto text-sm text-white/80">R$ {f.valor}</span>
              <span
                className={`hidden rounded-full px-2.5 py-0.5 text-xs font-medium sm:inline ${
                  f.pago ? "bg-whatsapp/15 text-whatsapp" : "bg-star/15 text-star"
                }`}
              >
                {f.pago ? "Paga" : "Em aberto"}
              </span>
              <button
                type="button"
                className="shrink-0 text-sm font-medium text-primary transition hover:text-[color:var(--primary-hover)]"
              >
                {f.pago ? "2ª via" : "Pagar"}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-white/40">
          Faturas de demonstração — dados fictícios. Na integração com o sistema
          da Planet Tel, refletem a sua conta real e o PIX é gerado de verdade.
        </p>
      </main>
    </div>
  );
}
