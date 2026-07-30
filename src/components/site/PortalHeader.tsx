import { Link } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { BrandMark } from "./ui";
import { CLIENTE } from "@/lib/mock-portal";

export function GreenDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-whatsapp" />
    </span>
  );
}

export function PortalHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-night/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link to="/painel" className="flex items-center" aria-label="Painel Planet Tel">
          <BrandMark />
        </Link>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 text-xs font-medium text-white/60 sm:inline-flex">
            <GreenDot />
            Rede operacional
          </span>
          <span className="hidden h-5 w-px bg-white/15 sm:block" />
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
              {CLIENTE.inicial}
            </span>
            <span className="hidden text-sm text-white/90 md:inline">{CLIENTE.nome}</span>
          </div>
          <Link
            to="/area-do-cliente"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-xs font-medium text-white/80 transition hover:bg-white/5"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Sair</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
