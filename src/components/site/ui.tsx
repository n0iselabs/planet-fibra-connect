import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { trackWhatsApp, waLink } from "@/lib/whatsapp";
import planetIcon from "@/assets/planettel-icon.png";

/**
 * Assinatura da marca: ícone (símbolo do planeta) + texto real "Planet Tel".
 * O nome nunca é imagem — é renderizado em Montserrat (font-display) para
 * ficar nítido e responsivo em qualquer densidade de tela. O ícone usa
 * `w-auto` + `shrink-0` para nunca distorcer, e `items-center` mantém o
 * alinhamento vertical com o centro do texto.
 */
export function BrandMark({
  iconClassName = "h-8 w-auto md:h-9",
  textClassName = "text-lg md:text-xl",
}: {
  iconClassName?: string;
  textClassName?: string;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <img
        src={planetIcon}
        alt=""
        aria-hidden="true"
        width={512}
        height={512}
        draggable={false}
        className={`${iconClassName} shrink-0`}
      />
      <span
        className={`font-display font-extrabold tracking-tight leading-none text-white whitespace-nowrap ${textClassName}`}
      >
        Planet Tel
      </span>
    </span>
  );
}

export function WaButton({
  message,
  context,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  message: string;
  context: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "white";
  size?: "md" | "lg";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all whitespace-nowrap";
  const sizes = {
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-4 text-base",
  };
  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-[color:var(--primary-hover)] hover:-translate-y-0.5 shadow-cta",
    ghost: "bg-transparent text-white border border-white/20 hover:bg-white/5",
    white: "bg-white text-night hover:bg-white/90",
  };
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp(context)}
      data-cta={`whatsapp-${context}`}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      {variant === "primary" && <ArrowRight className="h-4 w-4" />}
    </a>
  );
}
