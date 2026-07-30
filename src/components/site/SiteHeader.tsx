import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Headphones, User } from "lucide-react";
import { WA_MESSAGES, trackWhatsApp, waLink } from "@/lib/whatsapp";
import { BrandMark } from "./ui";

// Links de âncora usam caminho absoluto (/#secao) para funcionarem tanto na
// home quanto a partir das páginas internas (Sobre, Contato, páginas legais).
const NAV = [
  { href: "/#planos", label: "Planos" },
  { href: "/#cobertura", label: "Cobertura" },
  { href: "/#avaliacoes", label: "Avaliações" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled
          ? "bg-night/85 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[72px] md:px-8">
        {/* Marca */}
        <a href="/" className="flex shrink-0 items-center" aria-label="Planet Tel — início">
          <BrandMark />
        </a>

        {/* Navegação */}
        <nav className="hidden items-center gap-4 text-sm text-white/75 md:flex lg:gap-6">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
          <Link to="/contato" className="transition hover:text-white">
            Contato
          </Link>
        </nav>

        {/* Ações */}
        <div className="flex shrink-0 items-center gap-3 lg:gap-4">
          {/* Status do serviço — sutil (mock; ligar ao monitoramento real depois) */}
          <Link
            to="/status"
            title="Rede operacional"
            aria-label="Status da rede: operacional"
            className="hidden items-center gap-2 text-xs font-medium text-white/60 transition hover:text-white md:inline-flex"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-whatsapp" />
            </span>
            <span className="hidden lg:inline">Rede operacional</span>
          </Link>

          {/* Divisor: separa info (status) das ações */}
          <span className="hidden h-5 w-px bg-white/15 lg:block" />

          {/* Área do Cliente */}
          <Link
            to="/area-do-cliente"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-3.5 py-2.5 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:text-white"
          >
            <User className="h-4 w-4" />
            <span className="hidden xl:inline">Área do Cliente</span>
          </Link>

          {/* Suporte (WhatsApp) */}
          <a
            href={waLink(WA_MESSAGES.suporte)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp("header-suporte")}
            data-cta="whatsapp-header-suporte"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-cta transition-all hover:-translate-y-0.5 hover:bg-[color:var(--primary-hover)]"
          >
            <Headphones className="h-4 w-4" />
            Suporte
          </a>
        </div>
      </div>
    </header>
  );
}
