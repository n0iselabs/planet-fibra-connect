import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  Copy,
  FileText,
  Gauge,
  Headphones,
  MessageSquare,
  QrCode,
  Receipt,
  Settings,
  Tv,
  Wifi,
  Zap,
} from "lucide-react";
import { GreenDot, PortalHeader } from "@/components/site/PortalHeader";
import { WA_MESSAGES, trackWhatsApp, waLink } from "@/lib/whatsapp";
import { CLIENTE, FATURAS, PIX_CODE, PROXIMA_FATURA } from "@/lib/mock-portal";

export const Route = createFileRoute("/painel")({
  head: () => ({
    meta: [{ title: "Painel — Área do Cliente | Planet Tel" }],
  }),
  component: PainelPage,
});

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-white/8 bg-surface p-5 md:p-6 ${className}`}>
      {children}
    </div>
  );
}

function FaturaCard() {
  const [showPix, setShowPix] = useState(false);
  const [copied, setCopied] = useState(false);

  function copyPix() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(PIX_CODE).then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      });
    }
  }

  return (
    <Card className="border-primary/25 bg-gradient-to-b from-primary/[0.08] to-surface">
      <div className="flex items-center gap-2 text-sm font-medium text-white/70">
        <Receipt className="h-4 w-4 text-primary" />
        Próxima fatura
      </div>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-sm text-white/60">R$</span>
        <span className="font-display text-3xl font-extrabold text-white">
          {PROXIMA_FATURA.valor}
        </span>
      </div>
      <div className="mt-1 text-sm text-white/70">
        Vence em {PROXIMA_FATURA.vence} ·{" "}
        <span className="text-star">Em aberto</span>
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
          <Link
            to="/faturas"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            <FileText className="h-4 w-4" />
            2ª via
          </Link>
        </div>
      ) : (
        <div className="mt-5 rounded-xl border border-white/10 bg-night/50 p-4">
          <p className="text-xs text-white/70">Copie o código PIX e pague no app do seu banco:</p>
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
            <span className="text-[11px] text-white/40">Código ilustrativo (demonstração).</span>
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
    </Card>
  );
}

const ATALHOS: Array<{
  icon: typeof FileText;
  label: string;
  to?: string;
  wa?: boolean;
}> = [
  { icon: FileText, label: "2ª via de fatura", to: "/faturas" },
  { icon: MessageSquare, label: "Meus chamados" },
  { icon: Headphones, label: "Suporte", wa: true },
  { icon: Settings, label: "Configurações" },
];

const atalhoClass =
  "flex items-center gap-3 rounded-xl border border-white/8 bg-surface px-4 py-3 text-left text-sm text-white/90 transition hover:border-white/15 hover:bg-surface-2";

function PainelPage() {
  return (
    <div className="min-h-screen bg-section text-foreground">
      <PortalHeader />

      <main className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
        {/* Saudação */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-extrabold text-white md:text-3xl">
              Olá, {CLIENTE.nome} 👋
            </h1>
            <p className="mt-1 text-white/70">
              Sua conexão está estável e você não tem pendências urgentes.
            </p>
          </div>
          <span className="rounded-full border border-star/30 bg-star/10 px-3 py-1 text-xs font-medium text-star">
            Ambiente de demonstração
          </span>
        </div>

        {/* Cards principais */}
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {/* Conexão */}
          <Card>
            <div className="flex items-center gap-2 text-sm font-medium text-white/70">
              <Wifi className="h-4 w-4 text-primary" />
              Sua conexão
            </div>
            <div className="mt-3 inline-flex items-center gap-2 text-sm text-white/90">
              <GreenDot />
              Conectado
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-display text-3xl font-extrabold text-white">700</span>
              <span className="text-lg font-bold text-white/80">Mega</span>
            </div>
            <div className="mt-1 text-sm text-white/60">Estável há 14 dias · Wi-Fi 6</div>
            <Link
              to="/status"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-[color:var(--primary-hover)]"
            >
              <Gauge className="h-4 w-4" />
              Ver status da rede
            </Link>
          </Card>

          {/* Fatura */}
          <FaturaCard />

          {/* Meu plano */}
          <Card>
            <div className="flex items-center gap-2 text-sm font-medium text-white/70">
              <Tv className="h-4 w-4 text-primary" />
              Meu plano
            </div>
            <div className="mt-3 font-display text-2xl font-extrabold text-white">
              700 Mega
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Wi-Fi 6 incluso
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Max ou Disney+ incluso
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Mensalidade fixa R$ 109,90
              </li>
            </ul>
            <a
              href={waLink(WA_MESSAGES.indicacao)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("painel-upgrade")}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-[color:var(--primary-hover)]"
            >
              <Zap className="h-4 w-4" />
              Falar sobre meu plano
            </a>
          </Card>
        </div>

        {/* Atalhos */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {ATALHOS.map((a) =>
            a.wa ? (
              <a
                key={a.label}
                href={waLink(WA_MESSAGES.suporte)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp("painel-suporte")}
                className={atalhoClass}
              >
                <a.icon className="h-4 w-4 text-primary" />
                {a.label}
              </a>
            ) : a.to ? (
              <Link key={a.label} to={a.to} className={atalhoClass}>
                <a.icon className="h-4 w-4 text-primary" />
                {a.label}
              </Link>
            ) : (
              <button key={a.label} type="button" className={atalhoClass}>
                <a.icon className="h-4 w-4 text-primary" />
                {a.label}
              </button>
            ),
          )}
        </div>

        {/* Últimas faturas */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Últimas faturas
            </h2>
            <Link
              to="/faturas"
              className="text-sm font-medium text-primary hover:text-[color:var(--primary-hover)]"
            >
              Ver todas
            </Link>
          </div>
          <div className="mt-3 divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/8 bg-surface">
            {FATURAS.slice(0, 3).map((f) => (
              <div key={f.mes} className="flex items-center gap-3 px-5 py-4">
                <Receipt className="h-4 w-4 shrink-0 text-white/40" />
                <span className="text-white">{f.mes}</span>
                <span className="ml-auto text-sm text-white/70">R$ {f.valor}</span>
                <span
                  className={`ml-4 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    f.pago
                      ? "bg-whatsapp/15 text-whatsapp"
                      : "bg-star/15 text-star"
                  }`}
                >
                  {f.pago ? "Paga" : "Em aberto"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-white/40">
          Painel de demonstração — dados fictícios. Na integração com o sistema
          da Planet Tel, tudo passa a refletir a sua conta real.
        </p>
      </main>
    </div>
  );
}
