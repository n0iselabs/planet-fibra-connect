import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Todo } from "@/components/site/PageShell";
import { COMPANY } from "@/lib/company";
import { NOINDEX } from "@/lib/seo";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Planet Tel" },
      {
        name: "description",
        content:
          "Termos e condições de uso do site institucional da Planet Tel.",
      },
      NOINDEX,
    ],
  }),
  component: TermosPage,
});

function TermosPage() {
  return (
    <PageShell
      draft
      eyebrow="Termos"
      title="Termos de Uso"
      subtitle="Condições para uso deste site institucional da Planet Tel."
      updated="30 de julho de 2026"
    >
      <h2>1. Objeto</h2>
      <p>
        Estes Termos regulam o uso do site institucional de{" "}
        <strong>{COMPANY.legalName}</strong> (CNPJ {COMPANY.cnpj}). Ao navegar,
        você concorda com estas condições.
      </p>

      <h2>2. O site é informativo</h2>
      <p>
        Este site apresenta informações sobre planos, cobertura e a empresa. A{" "}
        <strong>contratação do serviço de internet</strong> é formalizada por
        contrato próprio de prestação de serviço (SCM), com as condições
        detalhadas no momento da contratação.{" "}
        <Todo>vincular o contrato/regulamento de serviço quando disponível</Todo>.
      </p>

      <h2>3. Uso permitido</h2>
      <p>
        Você se compromete a usar o site de forma lícita, sem prejudicar seu
        funcionamento, sua segurança ou direitos de terceiros.
      </p>

      <h2>4. Propriedade intelectual</h2>
      <p>
        A marca, o logotipo, os textos e os elementos visuais deste site
        pertencem à Planet Tel ou a seus licenciadores e não podem ser
        utilizados sem autorização.
      </p>

      <h2>5. Links e serviços de terceiros</h2>
      <p>
        O site pode conter links para serviços de terceiros (por exemplo,
        WhatsApp e Google). A Planet Tel não se responsabiliza pelo conteúdo ou
        pelas políticas desses serviços.
      </p>

      <h2>6. Limitação de responsabilidade</h2>
      <p>
        Empenhamo-nos para manter as informações corretas e o site disponível,
        mas não garantimos ausência de interrupções ou erros. Informações de
        planos e valores podem ser atualizadas.
      </p>

      <h2>7. Privacidade</h2>
      <p>
        O tratamento de dados pessoais segue a nossa{" "}
        <Link to="/politica-de-privacidade">Política de Privacidade</Link> e a{" "}
        <Link to="/politica-de-cookies">Política de Cookies</Link>.
      </p>

      <h2>8. Legislação aplicável e foro</h2>
      <p>
        Estes Termos são regidos pela legislação brasileira. Fica eleito o foro
        da comarca de <Todo>comarca/foro a confirmar</Todo> para dirimir
        eventuais controvérsias.
      </p>

      <h2>9. Alterações</h2>
      <p>
        Podemos atualizar estes Termos periodicamente. A data da última
        atualização é indicada no topo desta página.
      </p>
    </PageShell>
  );
}
