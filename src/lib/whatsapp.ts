export const WHATSAPP_NUMBER = "5511997196131";
export const WHATSAPP_DISPLAY = "(11) 99719-6131";
export const PHONE_DISPLAY = "(11) 4821-3311";

export const WA_MESSAGES = {
  contratar:
    "Olá! Gostaria de contratar um plano de internet da Planet Tel.",
  cobertura:
    "Olá! Gostaria de saber se a fibra da Planet Tel atende o meu endereço: ",
  indicacao:
    "Olá! Gostaria de ajuda para escolher o melhor plano para a minha casa.",
  suporte:
    "Olá! Sou cliente da Planet Tel e preciso de suporte.",
  plano: (mega: number) =>
    `Olá! Tenho interesse no plano ${mega} Mega. Podem me ajudar?`,
};

export function waLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function trackWhatsApp(context: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
  if (w.dataLayer) {
    w.dataLayer.push({ event: "whatsapp_click", context });
  }
}
