# Planet Tel Connect (68)

Crie o **site institucional oficial** da **Planet Tel**, um provedor de internet de fibra óptica, em **formato de landing page de conversão**. É o site real da empresa (não um protótipo genérico), focado em gerar contatos pelo WhatsApp.




## 1. CONTEXTO




A Planet Tel é um provedor de fibra óptica **local** que atende **Rio Grande da Serra, Ribeirão Pires e Mauá** (São Paulo). Tem reputação forte no Google (**nota 4,8 · 214 avaliações**), mas o site atual não exibe isso e converte mal. O novo site deve transformar essa reputação real em confiança visível e conduzir o visitante ao WhatsApp para **verificar cobertura e contratar**. O diferencial contra provedores nacionais é ser **da região**, com atendimento próximo e resolutivo — o ponto mais elogiado pelos clientes.




## 2. OBJETIVO E PÚBLICO




- **Conversão única:** iniciar conversa no **WhatsApp (11) 99719-6131** — verificar cobertura ("a fibra atende meu endereço?") e contratar. Sem formulário longo, sem e-mail; telefone não é a ação principal.

- **Público:** moradores das 3 cidades que precisam contratar ou trocar de internet. Chegam com intenção prática ("atende minha rua?", "quanto é?", "é bom mesmo?"), geralmente no celular, com baixa paciência. Querem estabilidade, atendimento próximo e contratação sem fricção.




## 3. REGRAS DE DADOS (obrigatório — não inventar)




Use **apenas** os dados deste prompt. **Não invente** números, prêmios, certificações, depoimentos, anos de experiência, nº de clientes, prazos ou condições. **Nenhum placeholder** na interface; nada de "lorem ipsum" ou "em breve".

- Exibir somente **4,8 ★ e 214 avaliações** como reputação.

- **Streaming (Max ou Disney+) apenas no plano 700 Mega** — nunca nos demais.

- **Não** escrever "suporte 24h", "internet que nunca cai", uptime/estabilidade garantida, prazo/taxa de instalação, fidelidade, planos empresariais ou cobertura por bairro. Nada disso está confirmado.

- Superlativos ("a melhor da região") só podem aparecer **dentro das aspas dos depoimentos reais**, nunca como frase da empresa.

- **Proibida urgência falsa** ("últimas vagas", "só hoje").




## 4. STACK




React 18 + Vite + TypeScript + Tailwind CSS + shadcn/ui (accordion do FAQ, botões, cards). Mobile-first, responsivo, semântico, acessível, SEO, performático.




## 5. IDENTIDADE VISUAL




**Tom visual:** escuro, sofisticado e confiável — herdado da marca —, com **disciplina premium**: respiro generoso, hierarquia forte, um único glow controlado por seção-chave, paleta reduzida. Deve parecer o **site oficial de um provedor sério**, não um flyer de Instagram. Se o visual chamar mais atenção que a mensagem e o CTA, está errado.




**Paleta (cores reais da marca):**

- **Vermelho de ação/marca (CTA):** `#A01020` (crimson oficial) · hover `#C00000`

- **Azul-noite (fundo/cor secundária):** `#0E121F` / `#101020` — fundo-base, alternando com preto `#0A0A0B` entre seções para dar ritmo e profundidade

- **Azul royal (realce/hero):** `#2A50A8` — o hero usa um gradiente **azul-noite → azul royal**

- Superfícies/cards: `#141417` (hover `#1C1C21`), bordas `#2A2A30`

- Vermelho granada (símbolo do logo): `#A81830`

- Prata metálico (números-herói): `#C0C0C0` · Texto: `#FFFFFF` (títulos), `#E6E6E9` (corpo), `#A0A0A8` (apoios)

- Verde WhatsApp (botão flutuante): `#25D366` · Estrelas: `#FFC53D`




**Regras de cor:** vermelho `#A01020` só para ação/ênfase, nunca em texto de leitura; CTA = texto branco sobre vermelho; hero com gradiente `#0E121F → #2A50A8`; botão WhatsApp em verde (exceção proposital); contraste AA no corpo.




**Tipografia (duas famílias):** títulos e números de impacto em **Montserrat** (700–900; números-herói como 700 Mega, R$ 109,90 e 4,8 em Black itálico, com acabamento prata sutil); corpo/UI em **Inter**. Escala: H1 hero 56–64px (mobile 34–40) · H2 36–40px (mobile 26–28) · número-herói 72–96px (mobile 48–56) · corpo 17–18px. Caixa-alta só em olho (eyebrow), selos e botões curtos.




**Efeitos/motion (leves):** cantos 8–16px, bordas discretas, sombras suaves; fade/slide-in ao rolar, hover de CTA com leve elevação, count-up discreto nos números (4,8 e velocidades). Respeitar `prefers-reduced-motion`. Evitar glows empilhados, parallax agressivo, gradientes aleatórios e cara de template.




**Imagens:** usar o conceito **planeta + anel** da marca (símbolo vermelho granada/fogo com esfera prata) como elemento gráfico do hero; cenas de lifestyle genéricas (pessoa usando internet em casa, home office) coerentes com a paleta — **sem** apresentá-las como equipe/clientes reais; texturas abstratas de fibra/luz. Não simular fotos de técnicos/equipe. (O logo oficial será inserido depois no refino.)




## 6. ESTRUTURA E COPY (use os textos exatamente)




Site single-page, header fixo com âncoras e scroll suave. Ordem das seções:




### Header (top bar)

Barra fina translúcida sobre o hero, fixa ao rolar. Logo "Planet Tel" à esquerda; à direita, botão vermelho **"Falar no WhatsApp"**.




### 1. Hero

Layout assimétrico (texto à esquerda; visual do planeta/fibra à direita; empilha no mobile). **Fundo em gradiente azul-noite `#0E121F` → azul royal `#2A50A8`.**

- **Olho:** Provedor de fibra óptica em Rio Grande da Serra · Ribeirão Pires · Mauá

- **Título (H1):** Internet de fibra estável, com atendimento próximo — e nota 4,8 no Google.

- **Subtítulo:** Planos de fibra óptica a partir de **R$ 79,90/mês**, com roteador incluso e mensalidade fixa. Informe seu endereço pelo WhatsApp e verifique em instantes se a fibra já atende a sua região.

- **CTA primário — Verificador de cobertura (inline):** campo "Digite seu endereço ou bairro" + botão vermelho **"Verificar cobertura no meu endereço"** (ver seção 7).

- **Microcopy sob o campo:** Sem compromisso — nossa equipe responde pelo WhatsApp.

- **CTA secundário (ghost):** Conhecer os planos

- **Faixa de prova social:** ⭐ 4,8 no Google · 214 avaliações · provedor local das 3 cidades · atendimento pelo WhatsApp




### 2. Confiança + Por que a Planet

- **Destaque:** **4,8 ★** no Google — **214 avaliações** de clientes da região

- **Três chips:**

  - 📍 **Provedor da região** — equipe local e atendimento próximo

  - 📶 **Roteador incluso** — em todos os planos, com mensalidade fixa

  - 🛠️ **Suporte que resolve** — a qualidade mais elogiada pelos nossos clientes

- **CTA de apoio:** Falar com a nossa equipe *(microtexto: sem compromisso)*




### 3. Planos

Grid de 4 cards (desktop 4 col / tablet 2 / mobile 1 empilhado, com o **400 destacado** — selo, borda vermelha e leve elevação).

- **Título:** Escolha o plano ideal para a sua casa

- **Subtítulo:** Mensalidade fixa, sem surpresas no fim do mês. Roteador Wi-Fi incluso em todos os planos. Em caso de dúvida, nossa equipe ajuda você a escolher pelo WhatsApp.




**300 Mega** — **R$ 79,90/mês** · Ideal para navegar, redes sociais e streaming no dia a dia. · Roteador Wi-Fi incluso. · Botão: **Contratar o 300 Mega**




**400 Mega** *(selo: MAIS ESCOLHIDO)* — **R$ 89,90/mês** · O preferido da região: desempenho para vários aparelhos conectados ao mesmo tempo. · Roteador Wi-Fi incluso. · Botão: **Contratar o 400 Mega**




**600 Mega** — **R$ 99,90/mês** · Para a casa conectada: home office, aulas online e streaming simultâneos. · Roteador Wi-Fi incluso. · Botão: **Contratar o 600 Mega**




**700 Mega** *(selo: TURBO)* — **R$ 109,90/mês** · A conexão mais rápida da Planet, com **Wi-Fi 6** e **Max ou Disney+** inclusos. · Roteador Wi-Fi 6 incluso. · Botão: **Contratar o 700 Mega**




**Abaixo dos cards:** Não sabe qual plano escolher? **Fale com a nossa equipe** — sem compromisso, resposta pelo WhatsApp. *(Streaming Max ou Disney+ incluso no plano 700 Mega.)*




### 4. Como funciona

- **Título:** Contratar é simples — e você resolve tudo pelo WhatsApp

- **1. Verifique a cobertura** — Informe seu endereço e confirmamos na hora se a fibra atende a sua região.

- **2. Escolha seu plano** — Ajudamos você a escolher a velocidade certa para o seu uso — sem empurrar plano que você não precisa.

- **3. Instalação e conexão** — Agendamos a instalação e você já começa a usar sua fibra da Planet.

- **CTA:** Falar com a Planet no WhatsApp · **Microcopy:** Leva poucos minutos. Sem compromisso.




### 5. Depoimentos (verbatim — não editar)

Grade de 6 cards (desktop 3×2 / mobile carrossel ou stack). Cada card: aspas, texto, nome em destaque, 5 estrelas douradas, marca visual "Google".

- **Título:** Quem é da região recomenda

- **Subtítulo:** Avaliações reais de clientes no Google — nota 4,8 ★, 214 avaliações.




1. "A melhor fornecedora de internet da Cidade. Atendimento impecável, sempre muito atenciosos, técnicos respeitosos. Sempre que posso faço a indicação." — **Monique Santos** ★★★★★

2. "Sou cliente a mais de 3 anos, tenho o serviço contratado em 2 endereços... a conexão nunca oscila... a internet na minha visão é a melhor da região." — **Adilson Augusto** ★★★★★

3. "Excelente! Sinal de qualidade, sem oscilação, nem quedas constantes. Atendimento ágil, pró ativo e muito simpático. Recomendo!" — **André Luiz Cathedral** ★★★★★

4. "Já estou com a Planet tel há 4 anos, e só tenho elogio a fazer, internet ótima, atendimento perfeito, atenção ao cliente nota 10." — **Arlet Firmino** ★★★★★

5. "Conexão excelente, atendimento da central super atencioso e os técnicos profissionais demais, parabéns a equipe Planet Tel." — **Marcos Costa** ★★★★★

6. "Planet excelente operadora de internet, preço justo e ótimo atendimento, recomendo a todos." — **Lucia de Arruda Oliveira** ★★★★★




- **CTA:** Falar com a nossa equipe no WhatsApp

- **Link secundário (ghost):** Ver todas as avaliações no Google *(usar `#` por enquanto — a URL do perfil será fornecida depois; não inventar link)*




### 6. Cobertura / Localização

- **Título:** Um provedor da região, de verdade

- **Texto:** A Planet Tel é uma empresa da região e atende **Rio Grande da Serra, Ribeirão Pires e Mauá**. Isso significa atendimento próximo e uma equipe que conhece a sua região — não uma central distante.

- **Chips de cidade:** Rio Grande da Serra · Ribeirão Pires · Mauá

- **Endereço:** Rua Prefeito Cido Franco, 88 — Centro, Rio Grande da Serra/SP

- **Verificador de cobertura (repetir o componente do hero):** campo de endereço + botão **"Confirmar cobertura"**.

- **Microcopy:** Resposta imediata, sem compromisso.

*(Não há checagem automática por rua — a "verificação" é a conversa no WhatsApp já contextualizada. Não simular resultado instantâneo.)*




### 7. FAQ (accordion)

- **Título:** Perguntas frequentes

1. **Vocês atendem o meu endereço?** — A Planet Tel atende Rio Grande da Serra, Ribeirão Pires e Mauá. Para confirmar a sua rua, informe seu endereço pelo WhatsApp e verificamos na hora.

2. **O roteador está incluso?** — Sim, em todos os planos. O plano 700 Mega inclui Wi-Fi 6. Fale conosco para avaliarmos a melhor opção para a sua casa.

3. **O streaming está incluso em qualquer plano?** — O benefício de streaming (Max ou Disney+) está incluso no plano 700 Mega. Nos demais planos, você conta com a fibra e o roteador Wi-Fi incluso.

4. **E se a internet apresentar algum problema?** — Fale com a nossa central pelo WhatsApp (11) 99719-6131. Nossa equipe é da região e cuida do seu atendimento.

5. **Como faço para contratar?** — Todo o processo é pelo WhatsApp: você confirma a cobertura, escolhe o plano com o apoio da nossa equipe e agendamos a instalação.

6. **Quanto custa e como funciona a mensalidade?** — Os planos vão de R$ 79,90 (300 Mega) a R$ 109,90 (700 Mega), com mensalidade fixa. As condições de instalação e contratação nossa equipe detalha pelo WhatsApp.

- **CTA de fechamento:** Ainda tem dúvidas? Fale com a Planet




### 8. CTA final

Bloco de destaque com glow vermelho controlado (sobre fundo azul-noite).

- **Título:** Pronto para uma internet à altura da sua região?

- **Apoio:** Informe seu endereço pelo WhatsApp. Confirmamos a cobertura e ajudamos você a escolher o plano ideal — com rapidez e sem compromisso.

- **Botão (grande):** Falar no WhatsApp agora

- **Microcopy:** ⭐ 4,8 no Google · 214 avaliações · atendimento local · sem compromisso




### 9. Footer

- **Assinatura:** Planet Tel — Conecta você ao que importa.

- **Contato:** WhatsApp (11) 99719-6131 · Telefone (11) 4821-3311 · Rua Prefeito Cido Franco, 88 — Centro, Rio Grande da Serra/SP

- **Cidades atendidas:** Rio Grande da Serra · Ribeirão Pires · Mauá

- **Navegação:** Planos · Cobertura · Avaliações · Fale no WhatsApp

- **CTA persistente:** Falar no WhatsApp

*(CNPJ e redes sociais serão adicionados quando confirmados — não inventar.)*




## 7. COMPONENTE: VERIFICADOR DE COBERTURA




Componente reutilizável (hero e seção Cobertura): um `input` de texto (placeholder "Digite seu endereço ou bairro") + botão vermelho. Ao clicar, monta e abre em nova aba:

`https://wa.me/5511997196131?text=` + URL-encode de `Olá! Gostaria de saber se a fibra da Planet Tel atende o meu endereço: <valor do input>`.

Se o input estiver vazio, usa a mensagem de cobertura genérica (sem o endereço). Acessível: `label` associado, botão com texto claro, foco visível. **Não** valida nem consulta cobertura — apenas contextualiza a conversa.




## 8. WHATSAPP E HIERARQUIA DE CTAs




Número: **(11) 99719-6131** → base `https://wa.me/5511997196131`. Todo CTA abre o WhatsApp com **mensagem pré-preenchida por contexto** (fazer URL-encode do `text`):

- **Cobertura** (hero, cobertura): `Olá! Gostaria de saber se a fibra da Planet Tel atende o meu endereço: `

- **Contratar genérico** (header, CTA final, footer, sticky): `Olá! Gostaria de contratar um plano de internet da Planet Tel.`

- **Por plano** (cards): `Olá! Tenho interesse no plano 400 Mega. Podem me ajudar?` (trocar 400 por 300/600/700)

- **Indicação de plano** ("fale com a nossa equipe"): `Olá! Gostaria de ajuda para escolher o melhor plano para a minha casa.`




**Hierarquia:**

- **CTA primário** (vermelho, pílula com seta): no hero, em cada card, como funciona, depoimentos, cobertura, FAQ e CTA final. Um CTA primário visível a cada ~1,5 tela.

- **WhatsApp sticky** (verde `#25D366`, ícone + "Falar no WhatsApp"): **sempre visível** — barra inferior fixa no mobile e botão flutuante no desktop. Abre a mensagem "contratar genérico".

- **CTA secundário** (ghost): "Conhecer os planos", "Ver todas as avaliações" — baixa ênfase.

- **Zero formulário** competindo com o WhatsApp.




## 9. REQUISITOS TÉCNICOS




- Responsivo (mobile, tablet, desktop); single-page com âncoras e scroll suave.

- HTML semântico no React; componentes limpos e organizados (para refino posterior no Claude Code).

- Acessibilidade: contraste AA, foco visível, alt text, `aria` no accordion e labels no verificador.

- **Mobile:** barra de WhatsApp fixa; plano 400 destacado no topo do stack; alvos de toque ≥ 48px.




**Performance (crítico — é um provedor de internet):** um site lento destrói a promessa de "fibra rápida". `loading="lazy"` nas imagens, formatos WebP/AVIF, zero bibliotecas pesadas, apenas Montserrat + Inter (`display=swap`), CSS enxuto. Alvo: LCP < 2,5s e boa nota no mobile.




**SEO e compartilhamento:**

- `<html lang="pt-BR">`, H1 único (o do hero), headings hierárquicos, alt text descritivo.

- `<title>`: "Planet Tel — Internet de fibra em Rio Grande da Serra, Ribeirão Pires e Mauá".

- `meta description`: "Internet de fibra com nota 4,8 no Google. Atendimento local em Rio Grande da Serra, Ribeirão Pires e Mauá. Fale no WhatsApp e veja se a fibra chega no seu endereço."

- **Open Graph / Twitter Card** (o link será compartilhado no WhatsApp — um bom preview aumenta o clique): `og:title`, `og:description`, `og:image` (1200×630 com logo + "4,8★ · fibra local"), `og:type=website`, `og:locale=pt_BR`. **Favicon** com o símbolo do planeta.

- **JSON-LD `LocalBusiness`** (ou `InternetServiceProvider`): name "Planet Tel", address (Rua Prefeito Cido Franco, 88, Centro, Rio Grande da Serra, SP), telephone "+551148213311", areaServed (as 3 cidades), priceRange "R$ 79,90–R$ 109,90", url, sameAs (Instagram quando confirmado). **NÃO** incluir `AggregateRating`/`Review` no structured data (as avaliações são do Google — marcá-las como próprias viola a política de rich results). A nota 4,8 aparece só como texto visível creditado ao Google.




**Tracking (deixar o gancho pronto):** cada CTA de WhatsApp com `data-cta="whatsapp-<contexto>"` (ex.: `whatsapp-hero`, `whatsapp-plano-400`, `whatsapp-cobertura`, `whatsapp-sticky`) e, no clique, `window.dataLayer && window.dataLayer.push({event:'whatsapp_click', context})`. Não instalar GA/Pixel nem inventar IDs.




## 10. CRITÉRIOS DE ACEITE




- Nenhum placeholder; copy completa e exata.

- CTA primário claro e repetido; **WhatsApp sticky** funcionando com mensagens pré-preenchidas.

- **Verificador de cobertura** funcional (campo → WhatsApp com o endereço na mensagem).

- Prova social (4,8★ · 214) na primeira dobra e no CTA final.

- Mobile forte (barra de WhatsApp fixa, plano 400 destacado).

- Visual premium e autoral (não template), com azul-noite + vermelho `#A01020` e gradiente azul no hero.

- Metadados prontos: title, description, Open Graph com imagem, favicon; JSON-LD `LocalBusiness` sem AggregateRating.

- Performance boa no mobile; CTAs com `data-cta` e evento de clique.

- Sem dados inventados; streaming só no 700; sem promessas não confirmadas.

- Código limpo, refinável no Claude Code sem reconstrução.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://fibra-connect-plnt.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e798de75-e3da-481f-8447-bedfcfe3f370).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
