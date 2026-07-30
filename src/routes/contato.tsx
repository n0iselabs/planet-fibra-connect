import { createFileRoute } from "@tanstack/react-router";
import { Clock, ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { WaButton } from "@/components/site/ui";
import { COMPANY } from "@/lib/company";
import { PHONE_DISPLAY, WA_MESSAGES, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const MAPS_QUERY = encodeURIComponent(
  "Rua Prefeito Cido Franco, 88 - Centro, Rio Grande da Serra - SP",
);
const MAP_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&z=16&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Planet Tel" },
      {
        name: "description",
        content:
          "Fale com a Planet Tel: WhatsApp, telefone, endereço e horário de atendimento em Rio Grande da Serra.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const canais = [
    { icon: MessageCircle, label: "WhatsApp", value: WHATSAPP_DISPLAY },
    { icon: Phone, label: "Telefone", value: PHONE_DISPLAY },
    { icon: MapPin, label: "Endereço", value: COMPANY.address },
    {
      icon: Clock,
      label: "Horário",
      value: "Segunda a sábado, das 9h às 18h",
      note: "Domingo: fechado",
    },
  ];

  return (
    <PageShell
      prose={false}
      wide
      eyebrow="Contato"
      title="Fale com a Planet Tel"
      subtitle="Equipe da região, atendimento próximo. Chame no WhatsApp, ligue ou venha até a nossa loja — quem responde é gente daqui."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start">
        {/* Canais */}
        <div>
          <div className="grid sm:grid-cols-2 gap-4">
            {canais.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl bg-surface border border-white/8 p-5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </div>
                <div className="mt-1 text-white font-medium leading-snug">
                  {c.value}
                </div>
                {c.note && (
                  <div className="mt-1 text-xs text-white/60">{c.note}</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <WaButton message={WA_MESSAGES.contratar} context="contato-pagina" size="lg">
              Falar no WhatsApp
            </WaButton>
          </div>
        </div>

        {/* Mapa */}
        <div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-card-soft">
            <iframe
              title="Localização da Planet Tel no mapa"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-[color:var(--primary-hover)]"
          >
            Como chegar (abrir no Google Maps)
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </PageShell>
  );
}
