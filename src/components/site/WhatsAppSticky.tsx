import { WA_MESSAGES, waLink, trackWhatsApp } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function WhatsAppSticky() {
  const href = waLink(WA_MESSAGES.contratar);
  const onClick = () => trackWhatsApp("sticky");

  return (
    <>
      {/* Mobile: bottom bar */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        data-cta="whatsapp-sticky"
        className="md:hidden fixed bottom-0 inset-x-0 z-50 flex items-center justify-center gap-2 h-14 bg-[color:var(--whatsapp)] text-black font-semibold text-base shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.6)]"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
        Falar no WhatsApp
      </a>

      {/* Desktop: floating button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        data-cta="whatsapp-sticky"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-50 items-center gap-2 rounded-full bg-[color:var(--whatsapp)] text-black font-semibold px-5 py-3 shadow-[0_16px_40px_-12px_rgba(37,211,102,0.6)] hover:scale-105 transition-transform"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
        Falar no WhatsApp
      </a>
    </>
  );
}
