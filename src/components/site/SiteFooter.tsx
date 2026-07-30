import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import {
  PHONE_DISPLAY,
  WA_MESSAGES,
  WHATSAPP_DISPLAY,
  trackWhatsApp,
  waLink,
} from "@/lib/whatsapp";
import { COMPANY } from "@/lib/company";
import { BrandMark, WaButton } from "./ui";

const NAV = [
  { href: "/#planos", label: "Planos" },
  { href: "/#cobertura", label: "Cobertura" },
  { href: "/#avaliacoes", label: "Avaliações" },
  { href: "/#faq", label: "FAQ" },
];

const INSTITUCIONAL = [
  { to: "/sobre", label: "Sobre a Planet Tel" },
  { to: "/politica-de-privacidade", label: "Política de Privacidade" },
  { to: "/politica-de-cookies", label: "Política de Cookies" },
  { to: "/termos-de-uso", label: "Termos de Uso" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#08080A] border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 pb-24 md:pb-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <BrandMark iconClassName="h-8 w-auto" textClassName="text-lg" />
            <p className="mt-4 text-muted-foreground text-sm max-w-xs">
              Provedor local de fibra óptica — conecta você ao que importa, com
              atendimento de gente da região.
            </p>
            <div className="mt-5">
              <WaButton message={WA_MESSAGES.contratar} context="footer" size="md">
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </WaButton>
            </div>
          </div>

          {/* Contato */}
          <div>
            <div className="text-xs uppercase tracking-widest text-white/60 font-semibold">
              Contato
            </div>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2">
                <MessageCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                WhatsApp {WHATSAPP_DISPLAY}
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                Telefone {PHONE_DISPLAY}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>

          {/* Navegação */}
          <div>
            <div className="text-xs uppercase tracking-widest text-white/60 font-semibold">
              Navegação
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/contato" className="hover:text-white">
                  Contato
                </Link>
              </li>
              <li>
                <a
                  href={waLink(WA_MESSAGES.contratar)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsApp("footer-nav")}
                  data-cta="whatsapp-footer-nav"
                  className="hover:text-white"
                >
                  Fale no WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Institucional / legal */}
          <div>
            <div className="text-xs uppercase tracking-widest text-white/60 font-semibold">
              Institucional
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {INSTITUCIONAL.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-xs uppercase tracking-widest text-white/60 font-semibold">
              Cidades atendidas
            </div>
            <p className="mt-3 text-sm text-white/85">{COMPANY.cities}</p>
          </div>
        </div>

        {/* Dados cadastrais */}
        <div className="mt-10 pt-6 border-t border-white/5 text-xs text-muted-foreground">
          <p className="text-white/70">
            {COMPANY.legalName} · CNPJ {COMPANY.cnpj}
            {COMPANY.anatelOutorga
              ? ` · Autorização SCM/Anatel ${COMPANY.anatelOutorga}`
              : ""}
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
            <span>
              © {new Date().getFullYear()} {COMPANY.legalName} — Todos os
              direitos reservados.
            </span>
            <span>Provedor local de fibra óptica.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
