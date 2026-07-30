import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "planettel_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Só decide no cliente — evita mismatch de hidratação (SSR renderiza nada).
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage indisponível: não bloqueia o site.
    }
  }, []);

  function choose(value: "all" | "essential") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
    // Ponto de integração: quando houver analytics/marketing, disparar/limpar
    // as tags conforme `value` ("all" libera; "essential" mantém só os essenciais).
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed bottom-20 left-4 right-4 z-[60] rounded-2xl border border-white/10 bg-night/95 p-5 shadow-card-soft backdrop-blur-md md:bottom-6 md:left-6 md:right-auto md:w-full md:max-w-md"
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <Cookie className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="text-sm leading-relaxed text-white/85">
            Usamos cookies para melhorar sua experiência. Você pode aceitar
            todos ou manter apenas os essenciais. Saiba mais na{" "}
            <Link
              to="/politica-de-cookies"
              className="font-medium text-primary underline underline-offset-2 hover:text-[color:var(--primary-hover)]"
            >
              Política de Cookies
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => choose("essential")}
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Só essenciais
            </button>
            <button
              type="button"
              onClick={() => choose("all")}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-cta transition hover:bg-[color:var(--primary-hover)]"
            >
              Aceitar todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
