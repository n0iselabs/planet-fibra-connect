import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Todo } from "@/components/site/PageShell";
import { COMPANY } from "@/lib/company";
import { NOINDEX } from "@/lib/seo";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Planet Tel" },
      {
        name: "description",
        content:
          "Como a Planet Tel coleta, usa e protege os seus dados pessoais, em conformidade com a LGPD.",
      },
      NOINDEX,
    ],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  return (
    <PageShell
      draft
      eyebrow="Privacidade"
      title="Política de Privacidade"
      subtitle="Como tratamos os seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)."
      updated="30 de julho de 2026"
    >
      <h2>1. Quem é o controlador dos dados</h2>
      <p>
        O responsável pelo tratamento dos seus dados pessoais é{" "}
        <strong>{COMPANY.legalName}</strong> (CNPJ {COMPANY.cnpj}), com endereço
        em {COMPANY.address}.
      </p>

      <h2>2. Quais dados coletamos</h2>
      <ul>
        <li>
          <strong>Dados de contato:</strong> nome, telefone/WhatsApp e e-mail,
          quando você fala conosco ou solicita atendimento.
        </li>
        <li>
          <strong>Dados de endereço:</strong> endereço informado para
          verificação de cobertura e instalação.
        </li>
        <li>
          <strong>Dados de navegação:</strong> informações coletadas por cookies
          e tecnologias semelhantes (ver a{" "}
          <Link to="/politica-de-cookies">Política de Cookies</Link>).
        </li>
        <li>
          <strong>Dados de assinante:</strong> dados cadastrais e de contrato
          necessários à prestação do serviço de internet.
        </li>
      </ul>

      <h2>3. Para que usamos os seus dados</h2>
      <ul>
        <li>Responder a contatos e prestar atendimento e suporte.</li>
        <li>Verificar cobertura, contratar e instalar o serviço.</li>
        <li>Faturamento, cobrança e cumprimento de obrigações legais.</li>
        <li>Melhorar o site e a experiência de navegação.</li>
      </ul>

      <h2>4. Base legal</h2>
      <p>
        Tratamos dados com base nas hipóteses da LGPD (art. 7º), especialmente:
        execução de contrato, cumprimento de obrigação legal/regulatória (por
        exemplo, obrigações da Anatel e do Marco Civil da Internet), legítimo
        interesse e, quando aplicável, o seu consentimento.
      </p>

      <h2>5. Compartilhamento</h2>
      <p>
        Não vendemos os seus dados. Podemos compartilhá-los com prestadores que
        nos apoiam na operação (por exemplo, meios de pagamento e ferramentas de
        atendimento) e com autoridades quando exigido por lei.{" "}
        <Todo>listar os terceiros/operadores efetivamente utilizados</Todo>.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Utilizamos cookies conforme descrito na nossa{" "}
        <Link to="/politica-de-cookies">Política de Cookies</Link>.
      </p>

      <h2>7. Seus direitos como titular</h2>
      <p>
        Você pode, a qualquer momento, solicitar confirmação de tratamento,
        acesso, correção, anonimização, portabilidade, eliminação e informações
        sobre compartilhamento, além de revogar o consentimento (LGPD, art. 18).
      </p>

      <h2>8. Segurança e retenção</h2>
      <p>
        Adotamos medidas técnicas e organizacionais para proteger os seus dados.
        Mantemos os dados apenas pelo tempo necessário às finalidades acima e ao
        cumprimento de obrigações legais.{" "}
        <Todo>definir os prazos de retenção por tipo de dado</Todo>.
      </p>

      <h2>9. Encarregado (DPO)</h2>
      <p>
        Para exercer seus direitos ou tirar dúvidas sobre privacidade, fale com
        o nosso Encarregado pelo tratamento de dados:{" "}
        <Todo>e-mail/contato do Encarregado (DPO) a confirmar</Todo>.
      </p>

      <h2>10. Alterações desta política</h2>
      <p>
        Podemos atualizar esta política periodicamente. A data da última
        atualização é indicada no topo desta página.
      </p>
    </PageShell>
  );
}
