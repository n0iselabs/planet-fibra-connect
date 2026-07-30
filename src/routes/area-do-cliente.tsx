import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  FileText,
  Headphones,
  LayoutDashboard,
  Loader2,
  Lock,
  ShieldCheck,
  User,
  Wallet,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { BrandMark } from "@/components/site/ui";
import { WA_MESSAGES, trackWhatsApp, waLink } from "@/lib/whatsapp";
import { NOINDEX } from "@/lib/seo";

export const Route = createFileRoute("/area-do-cliente")({
  head: () => ({
    meta: [
      { title: "Área do Cliente — Planet Tel" },
      {
        name: "description",
        content:
          "Acesse a Área do Cliente da Planet Tel: faturas, 2ª via, seu plano e suporte em um só lugar.",
      },
      NOINDEX,
    ],
  }),
  component: AreaClientePage,
});

const RECURSOS = [
  { icon: Wallet, label: "Faturas, 2ª via e PIX" },
  { icon: LayoutDashboard, label: "Seu plano e velocidade" },
  { icon: Headphones, label: "Chamados e suporte" },
  { icon: FileText, label: "Histórico e comprovantes" },
];

function AreaClientePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="relative overflow-hidden bg-hero">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-royal/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36 lg:grid-cols-2 lg:items-center">
          {/* Painel de boas-vindas */}
          <div className="hidden lg:block">
            <BrandMark iconClassName="h-10 w-auto" textClassName="text-2xl" />
            <h1 className="mt-8 text-3xl font-display font-extrabold tracking-tight text-white text-balance lg:text-4xl">
              Sua central, do jeito de um app
            </h1>
            <p className="mt-4 max-w-md text-white/80 leading-relaxed">
              Acesse sua conta para ver faturas, gerar a 2ª via, acompanhar seu
              plano e falar com o suporte — tudo em um só lugar.
            </p>
            <ul className="mt-8 space-y-3">
              {RECURSOS.map((r) => (
                <li key={r.label} className="flex items-center gap-3 text-white/90">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
                    <r.icon className="h-4 w-4" />
                  </span>
                  {r.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Card de login */}
          <div className="mx-auto w-full max-w-md">
            <LoginCard />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function LoginCard() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<{ id?: string; pw?: string }>({});
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const next: { id?: string; pw?: string } = {};
    if (!identifier.trim()) next.id = "Informe seu CPF ou e-mail.";
    if (!password) next.pw = "Informe sua senha.";
    else if (password.length < 4)
      next.pw = "A senha deve ter ao menos 4 caracteres.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("loading");
    // Mock: sem backend, valida os campos e simula o acesso ao painel.
    window.setTimeout(() => navigate({ to: "/painel" }), 1100);
  }

  const inputBase =
    "w-full rounded-xl border bg-white/5 py-3 pl-10 text-white placeholder:text-white/40 outline-none transition focus:ring-2 focus:ring-primary/30";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-card-soft backdrop-blur-xl sm:p-8"
    >
      <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
        <ShieldCheck className="h-4 w-4" />
        Área do Cliente
      </div>
      <h2 className="mt-3 text-2xl font-display font-bold text-white">
        Acesse sua conta
      </h2>
      <p className="mt-1 text-sm text-white/60">
        Entre com seus dados para continuar.
      </p>

      {/* CPF ou e-mail */}
      <div className="mt-6">
        <label htmlFor="identifier" className="text-sm font-medium text-white/85">
          CPF ou e-mail
        </label>
        <div className="relative mt-1.5">
          <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            id="identifier"
            name="identifier"
            type="text"
            autoComplete="username"
            value={identifier}
            onChange={(e) => {
              setIdentifier(e.target.value);
              if (errors.id) setErrors((p) => ({ ...p, id: undefined }));
            }}
            aria-invalid={!!errors.id}
            placeholder="000.000.000-00 ou voce@email.com"
            className={`${inputBase} pr-3 ${
              errors.id ? "border-primary" : "border-white/10 focus:border-primary/60"
            }`}
          />
        </div>
        {errors.id && <p className="mt-1.5 text-xs text-primary">{errors.id}</p>}
      </div>

      {/* Senha */}
      <div className="mt-4">
        <label htmlFor="password" className="text-sm font-medium text-white/85">
          Senha
        </label>
        <div className="relative mt-1.5">
          <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            id="password"
            name="password"
            type={showPw ? "text" : "password"}
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.pw) setErrors((p) => ({ ...p, pw: undefined }));
            }}
            aria-invalid={!!errors.pw}
            placeholder="Sua senha"
            className={`${inputBase} pr-10 ${
              errors.pw ? "border-primary" : "border-white/10 focus:border-primary/60"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPw((v) => !v)}
            aria-label={showPw ? "Ocultar senha" : "Mostrar senha"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 transition hover:text-white"
          >
            {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {errors.pw && <p className="mt-1.5 text-xs text-primary">{errors.pw}</p>}
      </div>

      {/* Lembrar / esqueci */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <label className="inline-flex cursor-pointer items-center gap-2 text-white/75">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-4 w-4 rounded border-white/20 bg-white/5 accent-[color:var(--primary)]"
          />
          Lembrar de mim
        </label>
        <a
          href={waLink(WA_MESSAGES.suporte)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp("area-esqueci-senha")}
          className="font-medium text-primary hover:text-[color:var(--primary-hover)]"
        >
          Esqueci minha senha
        </a>
      </div>

      {/* Entrar */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-cta transition-all hover:bg-[color:var(--primary-hover)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Entrando...
          </>
        ) : (
          <>
            Entrar
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="mt-5 text-center text-sm text-white/70">
        Ainda não é cliente?{" "}
        <a
          href={waLink(WA_MESSAGES.contratar)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp("area-contratar")}
          className="font-semibold text-primary hover:text-[color:var(--primary-hover)]"
        >
          Contrate pelo WhatsApp
        </a>
      </p>

      <p className="mt-4 text-center text-[11px] text-white/40">
        Ambiente de demonstração — nenhuma credencial é enviada ou armazenada.
      </p>
    </form>
  );
}
