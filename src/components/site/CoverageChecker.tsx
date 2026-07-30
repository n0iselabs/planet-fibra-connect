import { useState, useId } from "react";
import { WA_MESSAGES, waLink, trackWhatsApp } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";

type Props = {
  ctaLabel?: string;
  context: string;
  size?: "md" | "lg";
};

export function CoverageChecker({
  ctaLabel = "Verificar cobertura no meu endereço",
  context,
  size = "lg",
}: Props) {
  const [value, setValue] = useState("");
  const inputId = useId();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = value.trim()
      ? WA_MESSAGES.cobertura + value.trim()
      : WA_MESSAGES.cobertura.replace(": ", ".");
    trackWhatsApp(context);
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  const pad = size === "lg" ? "px-5 py-4" : "px-4 py-3";
  const btnPad = size === "lg" ? "px-5 py-4" : "px-4 py-3";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-2xl bg-surface/80 backdrop-blur-md border border-white/10 p-2 flex flex-col sm:flex-row gap-2 shadow-card-soft"
    >
      <label htmlFor={inputId} className="sr-only">
        Digite seu endereço ou bairro
      </label>
      <input
        id={inputId}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Digite seu endereço ou bairro"
        autoComplete="street-address"
        className={`flex-1 min-w-0 bg-transparent text-white placeholder:text-muted-foreground rounded-xl ${pad} text-base outline-none focus:ring-2 focus:ring-primary/60`}
      />
      <button
        type="submit"
        data-cta={`whatsapp-${context}`}
        className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-semibold ${btnPad} transition-all hover:bg-[color:var(--primary-hover)] hover:-translate-y-0.5 shadow-cta whitespace-nowrap`}
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
