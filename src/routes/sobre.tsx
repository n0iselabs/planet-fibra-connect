import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { WaButton } from "@/components/site/ui";
import { COMPANY } from "@/lib/company";
import { WA_MESSAGES } from "@/lib/whatsapp";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Planet Tel — provedor de fibra da região" },
      {
        name: "description",
        content:
          "A Planet Tel é um provedor local de fibra óptica em Rio Grande da Serra, Ribeirão Pires e Mauá, com atendimento de gente da região e nota 4,8 no Google.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <PageShell
      eyebrow="Sobre"
      title="Um provedor de fibra da região, de verdade"
      subtitle="A Planet Tel leva internet de fibra óptica para Rio Grande da Serra, Ribeirão Pires e Mauá — com atendimento próximo e uma equipe que é daqui."
    >
      <h2>Quem somos</h2>
      <p>
        A Planet Tel é um provedor <strong>local</strong> de internet de fibra
        óptica. Diferente das grandes operadoras nacionais, somos da região que
        atendemos — o que significa atendimento próximo, resposta rápida pelo
        WhatsApp e uma equipe que conhece a realidade de quem mora aqui.
      </p>

      <h2>O que oferecemos</h2>
      <ul>
        <li>Internet 100% fibra óptica, com planos a partir de R$ 79,90/mês.</li>
        <li>Roteador Wi-Fi incluso em todos os planos.</li>
        <li>Wi-Fi 6 e streaming (Max ou Disney+) inclusos no plano 700 Mega.</li>
        <li>Mensalidade fixa, sem surpresa no fim do mês.</li>
        <li>Suporte com gente da região, pelo WhatsApp.</li>
      </ul>

      <h2>Por que escolher um provedor local</h2>
      <p>
        Quando a internet é essencial para trabalhar, estudar e assistir, quem
        resolve com rapidez faz diferença. Nossa avaliação no Google reflete
        isso: <strong>nota 4,8</strong>, com <strong>214 avaliações</strong> de
        clientes reais da região — muitos deles conosco há anos.
      </p>

      <h2>Onde atendemos</h2>
      <p>{COMPANY.cities}.</p>
      <p>
        Para confirmar se a fibra já chegou ao seu endereço, é só chamar no
        WhatsApp — verificamos na hora, sem compromisso.
      </p>

      <div className="mt-8">
        <WaButton message={WA_MESSAGES.contratar} context="sobre" size="lg">
          Falar com a Planet Tel
        </WaButton>
      </div>

      <h2>Dados da empresa</h2>
      <p>
        {COMPANY.legalName} · CNPJ {COMPANY.cnpj}
        <br />
        {COMPANY.address}
      </p>
    </PageShell>
  );
}
