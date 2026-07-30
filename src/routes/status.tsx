import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { NOINDEX } from "@/lib/seo";

export const Route = createFileRoute("/status")({
  head: () => ({
    meta: [
      { title: "Status da Rede — Planet Tel" },
      {
        name: "description",
        content:
          "Acompanhe o status da rede de fibra da Planet Tel nas cidades atendidas.",
      },
      NOINDEX,
    ],
  }),
  component: StatusPage,
});

// Mock — na integração, alimentar com dados reais de monitoramento.
const COMPONENTES = [
  { nome: "Rede de fibra — Rio Grande da Serra", estado: "Operacional" },
  { nome: "Rede de fibra — Ribeirão Pires", estado: "Operacional" },
  { nome: "Rede de fibra — Mauá", estado: "Operacional" },
  { nome: "Atendimento / WhatsApp", estado: "Operacional" },
];

function Dot() {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-75" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-whatsapp" />
    </span>
  );
}

function StatusPage() {
  return (
    <PageShell
      prose={false}
      eyebrow="Status da rede"
      title="Status do serviço"
      subtitle="Acompanhe em tempo real a saúde da rede de fibra nas cidades que atendemos."
    >
      {/* Resumo */}
      <div className="rounded-2xl border border-whatsapp/25 bg-whatsapp/10 p-6 flex items-center gap-4">
        <Dot />
        <div>
          <div className="text-lg font-display font-bold text-white">
            Todos os sistemas operacionais
          </div>
          <div className="text-sm text-white/70">
            Nenhuma interrupção ou manutenção em andamento.
          </div>
        </div>
      </div>

      {/* Componentes */}
      <div className="mt-6 rounded-2xl border border-white/8 bg-surface divide-y divide-white/5">
        {COMPONENTES.map((c) => (
          <div key={c.nome} className="flex items-center gap-3 px-5 py-4">
            <CheckCircle2 className="h-5 w-5 text-whatsapp shrink-0" />
            <span className="text-white">{c.nome}</span>
            <span className="ml-auto text-sm text-white/70">{c.estado}</span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-white/50">
        Indicadores ilustrativos (demonstração). Na integração com o
        monitoramento, este painel passa a refletir o status em tempo real e
        avisos de manutenção por região.
      </p>
    </PageShell>
  );
}
