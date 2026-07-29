import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Check,
  MapPin,
  MessageCircle,
  Phone,
  Router,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import { CoverageChecker } from "@/components/site/CoverageChecker";
import { WhatsAppSticky } from "@/components/site/WhatsAppSticky";
import {
  PHONE_DISPLAY,
  WA_MESSAGES,
  WHATSAPP_DISPLAY,
  trackWhatsApp,
  waLink,
} from "@/lib/whatsapp";
import planetHero from "@/assets/planet-hero.png";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        href: planetHero,
      },
    ],
  }),
  component: PlanetTelLanding,
});

/* ---------------- helpers ---------------- */

function WaButton({
  message,
  context,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  message: string;
  context: string;
  children: React.ReactNode;
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
    ghost:
      "bg-transparent text-white border border-white/20 hover:bg-white/5",
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

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[40px] text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------------- header ---------------- */

function Header() {
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
      <div className="mx-auto max-w-6xl px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-silver to-[#6b6b76]" />
            <span className="absolute -inset-1 rounded-full border-2 border-primary rotate-[25deg]" />
          </span>
          <span className="font-display font-black text-white text-lg tracking-tight">
            Planet<span className="text-primary">Tel</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-white/80">
          <a href="#planos" className="hover:text-white">Planos</a>
          <a href="#cobertura" className="hover:text-white">Cobertura</a>
          <a href="#avaliacoes" className="hover:text-white">Avaliações</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>

        <WaButton
          message={WA_MESSAGES.contratar}
          context="header"
          size="md"
          className="!py-2.5"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </WaButton>
      </div>
    </header>
  );
}

/* ---------------- hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative bg-hero overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* subtle backdrop */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-royal/40 blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/90">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Provedor de fibra óptica em Rio Grande da Serra · Ribeirão Pires · Mauá
          </div>

          <h1 className="mt-5 text-[34px] leading-[1.05] sm:text-5xl lg:text-[60px] font-display font-extrabold text-white tracking-tight">
            Internet de fibra estável,
            <br className="hidden sm:block" /> com atendimento próximo —
            <br className="hidden sm:block" /> e{" "}
            <span className="text-hero-num text-[40px] sm:text-6xl lg:text-[68px]">
              4,8
            </span>{" "}
            <span className="inline-flex items-center gap-1 text-[color:var(--star)]">
              <Star className="h-6 w-6 fill-current" />
            </span>{" "}
            no Google.
          </h1>

          <p className="mt-5 text-base md:text-lg text-white/85 leading-relaxed max-w-xl">
            Planos de fibra óptica a partir de{" "}
            <strong className="text-white">R$ 79,90/mês</strong>, com roteador
            incluso e mensalidade fixa. Informe seu endereço pelo WhatsApp e
            verifique em instantes se a fibra já atende a sua região.
          </p>

          <div className="mt-6 max-w-xl">
            <CoverageChecker context="cobertura-hero" size="lg" />
            <p className="mt-2 text-xs text-white/70">
              Sem compromisso — nossa equipe responde pelo WhatsApp.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="#planos"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white border border-white/20 rounded-xl px-4 py-3"
            >
              Conhecer os planos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-[color:var(--star)] text-[color:var(--star)]" />
              <strong className="text-white">4,8</strong> no Google
            </span>
            <span className="opacity-40">·</span>
            <span>214 avaliações</span>
            <span className="opacity-40">·</span>
            <span>provedor local das 3 cidades</span>
            <span className="opacity-40">·</span>
            <span>atendimento pelo WhatsApp</span>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-fade-up">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/25 blur-3xl" />
            <img
              src={planetHero}
              alt="Símbolo Planet Tel — planeta metálico com anel vermelho"
              width={520}
              height={520}
              className="relative w-[280px] sm:w-[380px] lg:w-[480px] h-auto drop-shadow-[0_20px_60px_rgba(160,16,32,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- trust ---------------- */

function Trust() {
  const chips = [
    {
      icon: MapPin,
      title: "Provedor da região",
      desc: "equipe local e atendimento próximo",
    },
    {
      icon: Router,
      title: "Roteador incluso",
      desc: "em todos os planos, com mensalidade fixa",
    },
    {
      icon: Wrench,
      title: "Suporte que resolve",
      desc: "a qualidade mais elogiada pelos nossos clientes",
    },
  ];
  return (
    <section className="bg-background border-y border-white/5">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[color:var(--star)] mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-hero-num text-6xl md:text-7xl">4,8</span>
              <span className="text-white/70 text-lg">no Google</span>
            </div>
            <p className="mt-2 text-muted-foreground">
              <strong className="text-white">214 avaliações</strong> de clientes da região
            </p>
            <div className="mt-6">
              <WaButton
                message={WA_MESSAGES.indicacao}
                context="trust"
                variant="ghost"
              >
                Falar com a nossa equipe
              </WaButton>
              <p className="mt-2 text-xs text-muted-foreground">sem compromisso</p>
            </div>
          </div>

          <ul className="grid sm:grid-cols-3 gap-4">
            {chips.map((c) => (
              <li
                key={c.title}
                className="rounded-2xl bg-surface border border-white/5 p-5 hover:bg-surface-2 transition-colors"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary mb-3">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="font-display font-bold text-white">
                  {c.title}
                </div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {c.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- plans ---------------- */

type Plan = {
  mega: number;
  price: string;
  desc: string;
  features: string[];
  badge?: string;
  highlight?: boolean;
  turbo?: boolean;
};

const PLANS: Plan[] = [
  {
    mega: 300,
    price: "79,90",
    desc: "Ideal para navegar, redes sociais e streaming no dia a dia.",
    features: ["Roteador Wi-Fi incluso"],
  },
  {
    mega: 400,
    price: "89,90",
    desc: "O preferido da região: desempenho para vários aparelhos conectados ao mesmo tempo.",
    features: ["Roteador Wi-Fi incluso"],
    badge: "MAIS ESCOLHIDO",
    highlight: true,
  },
  {
    mega: 600,
    price: "99,90",
    desc: "Para a casa conectada: home office, aulas online e streaming simultâneos.",
    features: ["Roteador Wi-Fi incluso"],
  },
  {
    mega: 700,
    price: "109,90",
    desc: "A conexão mais rápida da Planet, com Wi-Fi 6 e Max ou Disney+ inclusos.",
    features: ["Roteador Wi-Fi 6 incluso", "Max ou Disney+ inclusos"],
    badge: "TURBO",
    turbo: true,
  },
];

function Plans() {
  // Reorder mobile so 400 is first
  const mobileOrder = [PLANS[1], PLANS[0], PLANS[2], PLANS[3]];

  return (
    <section id="planos" className="bg-[color:var(--night)]">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24">
        <SectionHeader
          eyebrow="Planos"
          title="Escolha o plano ideal para a sua casa"
          subtitle="Mensalidade fixa, sem surpresas no fim do mês. Roteador Wi-Fi incluso em todos os planos. Em caso de dúvida, nossa equipe ajuda você a escolher pelo WhatsApp."
          center
        />

        {/* Mobile stack (with 400 first) */}
        <div className="mt-10 grid gap-4 md:hidden">
          {mobileOrder.map((p) => (
            <PlanCard key={p.mega} plan={p} />
          ))}
        </div>

        {/* Tablet/Desktop grid */}
        <div className="mt-12 hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANS.map((p) => (
            <PlanCard key={p.mega} plan={p} />
          ))}
        </div>

        <div className="mt-10 text-center max-w-2xl mx-auto">
          <p className="text-white/85">
            Não sabe qual plano escolher?{" "}
            <a
              href={waLink(WA_MESSAGES.indicacao)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("planos-indicacao")}
              data-cta="whatsapp-planos-indicacao"
              className="text-primary font-semibold underline underline-offset-4 hover:text-[color:var(--primary-hover)]"
            >
              Fale com a nossa equipe
            </a>{" "}
            — sem compromisso, resposta pelo WhatsApp.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Streaming Max ou Disney+ incluso no plano 700 Mega.
          </p>
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const highlight = plan.highlight;
  return (
    <div
      className={`relative rounded-2xl p-6 flex flex-col ${
        highlight
          ? "bg-surface-2 border-2 border-primary lg:-translate-y-3 shadow-cta"
          : "bg-surface border border-white/8 hover:border-white/15"
      } transition-all`}
    >
      {plan.badge && (
        <div
          className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] ${
            plan.turbo
              ? "bg-royal text-white"
              : "bg-primary text-primary-foreground"
          }`}
        >
          {plan.badge}
        </div>
      )}

      <div className="flex items-baseline gap-1">
        <span className="text-hero-num text-5xl">{plan.mega}</span>
        <span className="text-white font-display font-bold text-lg">Mega</span>
      </div>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-white/60 text-sm">R$</span>
        <span className="text-white font-display font-black text-3xl italic">
          {plan.price}
        </span>
        <span className="text-white/60 text-sm">/mês</span>
      </div>

      <p className="mt-4 text-sm text-muted-foreground leading-relaxed min-h-[3.5rem]">
        {plan.desc}
      </p>

      <ul className="mt-4 space-y-2">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-white/90">
            <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <WaButton
          message={WA_MESSAGES.plano(plan.mega)}
          context={`plano-${plan.mega}`}
          size="md"
          className="w-full"
        >
          Contratar o {plan.mega} Mega
        </WaButton>
      </div>
    </div>
  );
}

/* ---------------- how it works ---------------- */

function HowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Verifique a cobertura",
      desc: "Informe seu endereço e confirmamos na hora se a fibra atende a sua região.",
    },
    {
      n: "2",
      title: "Escolha seu plano",
      desc: "Ajudamos você a escolher a velocidade certa para o seu uso — sem empurrar plano que você não precisa.",
    },
    {
      n: "3",
      title: "Instalação e conexão",
      desc: "Agendamos a instalação e você já começa a usar sua fibra da Planet.",
    },
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24">
        <SectionHeader
          eyebrow="Como funciona"
          title="Contratar é simples — e você resolve tudo pelo WhatsApp"
          center
        />
        <ol className="mt-12 grid md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl bg-surface border border-white/8 p-6"
            >
              <div className="text-hero-num text-4xl">{s.n}</div>
              <h3 className="mt-3 text-xl text-white font-display font-bold">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <WaButton
            message={WA_MESSAGES.contratar}
            context="como-funciona"
            size="lg"
          >
            Falar com a Planet no WhatsApp
          </WaButton>
          <p className="mt-3 text-xs text-muted-foreground">
            Leva poucos minutos. Sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- testimonials ---------------- */

const TESTIMONIALS = [
  {
    text: "A melhor fornecedora de internet da Cidade. Atendimento impecável, sempre muito atenciosos, técnicos respeitosos. Sempre que posso faço a indicação.",
    name: "Monique Santos",
  },
  {
    text: "Sou cliente a mais de 3 anos, tenho o serviço contratado em 2 endereços... a conexão nunca oscila... a internet na minha visão é a melhor da região.",
    name: "Adilson Augusto",
  },
  {
    text: "Excelente! Sinal de qualidade, sem oscilação, nem quedas constantes. Atendimento ágil, pró ativo e muito simpático. Recomendo!",
    name: "André Luiz Cathedral",
  },
  {
    text: "Já estou com a Planet tel há 4 anos, e só tenho elogio a fazer, internet ótima, atendimento perfeito, atenção ao cliente nota 10.",
    name: "Arlet Firmino",
  },
  {
    text: "Conexão excelente, atendimento da central super atencioso e os técnicos profissionais demais, parabéns a equipe Planet Tel.",
    name: "Marcos Costa",
  },
  {
    text: "Planet excelente operadora de internet, preço justo e ótimo atendimento, recomendo a todos.",
    name: "Lucia de Arruda Oliveira",
  },
];

function Testimonials() {
  return (
    <section id="avaliacoes" className="bg-[color:var(--night)]">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24">
        <SectionHeader
          eyebrow="Depoimentos"
          title="Quem é da região recomenda"
          subtitle="Avaliações reais de clientes no Google — nota 4,8 ★, 214 avaliações."
          center
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl bg-surface border border-white/8 p-6 flex flex-col"
            >
              <div className="flex items-center gap-1 text-[color:var(--star)] mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-white/90 leading-relaxed text-[15px] flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="font-display font-bold text-white">
                  {t.name}
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <GoogleGlyph className="h-3.5 w-3.5" />
                  Google
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <WaButton
            message={WA_MESSAGES.contratar}
            context="depoimentos"
            size="lg"
          >
            Falar com a nossa equipe no WhatsApp
          </WaButton>
          <a
            href="#"
            className="text-sm text-white/70 hover:text-white underline underline-offset-4"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}

function GoogleGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.7 2.5 30.2 0 24 0 14.6 0 6.4 5.4 2.5 13.3l7.8 6.1C12.2 13.6 17.6 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.6 5.9c4.4-4.1 7-10.1 7-17.4z"/>
      <path fill="#FBBC05" d="M10.3 28.6c-.5-1.5-.8-3.1-.8-4.6s.3-3.1.8-4.6l-7.8-6.1C1 16.7 0 20.2 0 24s1 7.3 2.5 10.7l7.8-6.1z"/>
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.9 2.3-8.3 2.3-6.4 0-11.8-4.1-13.7-9.9l-7.8 6.1C6.4 42.6 14.6 48 24 48z"/>
    </svg>
  );
}

/* ---------------- coverage ---------------- */

function Coverage() {
  return (
    <section id="cobertura" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <SectionHeader
              eyebrow="Cobertura"
              title="Um provedor da região, de verdade"
              subtitle="A Planet Tel é uma empresa da região e atende Rio Grande da Serra, Ribeirão Pires e Mauá. Isso significa atendimento próximo e uma equipe que conhece a sua região — não uma central distante."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {["Rio Grande da Serra", "Ribeirão Pires", "Mauá"].map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-white/10 px-4 py-2 text-sm text-white"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-surface border border-white/8 p-5 flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Endereço
                </div>
                <div className="text-white mt-1">
                  Rua Prefeito Cido Franco, 88 — Centro, Rio Grande da Serra/SP
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-hero p-6 md:p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-royal/40 blur-3xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.18em] text-white/80 font-semibold">
                Verificar cobertura
              </div>
              <h3 className="mt-2 text-2xl font-display font-bold text-white">
                A fibra da Planet atende meu endereço?
              </h3>
              <div className="mt-5">
                <CoverageChecker
                  ctaLabel="Confirmar cobertura"
                  context="cobertura-secao"
                />
              </div>
              <p className="mt-3 text-xs text-white/75">
                Resposta imediata, sem compromisso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- faq ---------------- */

const FAQ = [
  {
    q: "Vocês atendem o meu endereço?",
    a: "A Planet Tel atende Rio Grande da Serra, Ribeirão Pires e Mauá. Para confirmar a sua rua, informe seu endereço pelo WhatsApp e verificamos na hora.",
  },
  {
    q: "O roteador está incluso?",
    a: "Sim, em todos os planos. O plano 700 Mega inclui Wi-Fi 6. Fale conosco para avaliarmos a melhor opção para a sua casa.",
  },
  {
    q: "O streaming está incluso em qualquer plano?",
    a: "O benefício de streaming (Max ou Disney+) está incluso no plano 700 Mega. Nos demais planos, você conta com a fibra e o roteador Wi-Fi incluso.",
  },
  {
    q: "E se a internet apresentar algum problema?",
    a: "Fale com a nossa central pelo WhatsApp (11) 99719-6131. Nossa equipe é da região e cuida do seu atendimento.",
  },
  {
    q: "Como faço para contratar?",
    a: "Todo o processo é pelo WhatsApp: você confirma a cobertura, escolhe o plano com o apoio da nossa equipe e agendamos a instalação.",
  },
  {
    q: "Quanto custa e como funciona a mensalidade?",
    a: "Os planos vão de R$ 79,90 (300 Mega) a R$ 109,90 (700 Mega), com mensalidade fixa. As condições de instalação e contratação nossa equipe detalha pelo WhatsApp.",
  },
];

function Faq() {
  return (
    <section id="faq" className="bg-[color:var(--night)]">
      <div className="mx-auto max-w-3xl px-4 md:px-8 py-16 md:py-24">
        <SectionHeader eyebrow="FAQ" title="Perguntas frequentes" center />
        <Accordion type="single" collapsible className="mt-10">
          {FAQ.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-white/10"
            >
              <AccordionTrigger className="text-left text-white text-base md:text-lg font-display font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-10 text-center">
          <WaButton
            message={WA_MESSAGES.contratar}
            context="faq"
            variant="ghost"
          >
            Ainda tem dúvidas? Fale com a Planet
          </WaButton>
        </div>
      </div>
    </section>
  );
}

/* ---------------- final cta ---------------- */

function FinalCta() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-24">
        <div className="relative rounded-3xl bg-hero border border-white/10 p-8 md:p-14 overflow-hidden text-center">
          <div className="absolute inset-0 bg-red-glow pointer-events-none" />
          <div className="relative">
            <Sparkles className="h-6 w-6 text-primary mx-auto" />
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-extrabold text-white max-w-2xl mx-auto">
              Pronto para uma internet à altura da sua região?
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
              Informe seu endereço pelo WhatsApp. Confirmamos a cobertura e
              ajudamos você a escolher o plano ideal — com rapidez e sem
              compromisso.
            </p>
            <div className="mt-8">
              <WaButton
                message={WA_MESSAGES.contratar}
                context="cta-final"
                size="lg"
                className="!text-base md:!text-lg !px-8 !py-5"
              >
                Falar no WhatsApp agora
              </WaButton>
            </div>
            <div className="mt-5 flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-white/80">
              <span className="inline-flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-[color:var(--star)] text-[color:var(--star)]" />
                4,8 no Google
              </span>
              <span className="opacity-40">·</span>
              <span>214 avaliações</span>
              <span className="opacity-40">·</span>
              <span>atendimento local</span>
              <span className="opacity-40">·</span>
              <span>sem compromisso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- footer ---------------- */

function SiteFooter() {
  return (
    <footer className="bg-[#08080A] border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-12 pb-24 md:pb-12">
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative inline-flex h-7 w-7 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-silver to-[#6b6b76]" />
                <span className="absolute -inset-1 rounded-full border-2 border-primary rotate-[25deg]" />
              </span>
              <span className="font-display font-black text-white text-lg">
                Planet<span className="text-primary">Tel</span>
              </span>
            </div>
            <p className="mt-4 text-muted-foreground text-sm max-w-xs">
              Planet Tel — Conecta você ao que importa.
            </p>
            <div className="mt-5">
              <WaButton
                message={WA_MESSAGES.contratar}
                context="footer"
                size="md"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </WaButton>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-white/60 font-semibold">
              Contato
            </div>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2">
                <MessageCircle className="h-4 w-4 text-primary mt-0.5" />
                WhatsApp {WHATSAPP_DISPLAY}
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                Telefone {PHONE_DISPLAY}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>
                  Rua Prefeito Cido Franco, 88 — Centro, Rio Grande da Serra/SP
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-white/60 font-semibold">
              Navegação
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li><a href="#planos" className="hover:text-white">Planos</a></li>
              <li><a href="#cobertura" className="hover:text-white">Cobertura</a></li>
              <li><a href="#avaliacoes" className="hover:text-white">Avaliações</a></li>
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
            <div className="mt-6 text-xs uppercase tracking-widest text-white/60 font-semibold">
              Cidades atendidas
            </div>
            <p className="mt-3 text-sm text-white/85">
              Rio Grande da Serra · Ribeirão Pires · Mauá
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Planet Tel. Todos os direitos reservados.</span>
          <span>Provedor local de fibra óptica.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- page ---------------- */

function PlanetTelLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Plans />
        <HowItWorks />
        <Testimonials />
        <Coverage />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <WhatsAppSticky />
    </div>
  );
}
