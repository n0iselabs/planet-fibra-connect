import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Todo } from "@/components/site/PageShell";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — Planet Tel" },
      {
        name: "description",
        content:
          "O que são cookies, quais utilizamos no site da Planet Tel e como você pode gerenciá-los.",
      },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <PageShell
      draft
      eyebrow="Cookies"
      title="Política de Cookies"
      subtitle="O que são cookies, como os utilizamos no nosso site e como você pode controlá-los."
      updated="30 de julho de 2026"
    >
      <h2>1. O que são cookies</h2>
      <p>
        Cookies são pequenos arquivos gravados no seu navegador quando você
        visita um site. Eles permitem que o site funcione corretamente, lembre
        preferências e entenda como está sendo utilizado.
      </p>

      <h2>2. Tipos de cookies que utilizamos</h2>
      <ul>
        <li>
          <strong>Essenciais:</strong> necessários para o funcionamento do site.
          Não podem ser desativados.
        </li>
        <li>
          <strong>Desempenho/análise:</strong> ajudam a entender como os
          visitantes usam o site, de forma agregada.{" "}
          <Todo>confirmar se há ferramenta de analytics em uso e qual</Todo>.
        </li>
        <li>
          <strong>Marketing:</strong> usados para mensurar campanhas e anúncios.{" "}
          <Todo>confirmar se há pixels/tags de marketing em uso</Todo>.
        </li>
      </ul>

      <h2>3. Consentimento</h2>
      <p>
        Ao acessar o site, você pode aceitar ou recusar os cookies não
        essenciais por meio do nosso aviso de cookies. Os cookies essenciais são
        sempre ativos por serem necessários ao funcionamento.
      </p>

      <h2>4. Como gerenciar cookies</h2>
      <p>
        Você pode apagar ou bloquear cookies nas configurações do seu navegador.
        Note que desativar cookies essenciais pode afetar o funcionamento do
        site.
      </p>

      <h2>5. Mais informações</h2>
      <p>
        O tratamento de dados pessoais coletados por cookies segue a nossa{" "}
        <Link to="/politica-de-privacidade">Política de Privacidade</Link>.
      </p>
    </PageShell>
  );
}
