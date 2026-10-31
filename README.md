# Lamin Instalações Elétricas

Landing page institucional em Vue 3 e Vite, exclusivamente frontend.

## Desenvolvimento

```sh
npm install
npm run dev
```

O conteúdo comercial reutilizável está em `src/content.js`. Os componentes de cada seção ficam em `src/components`, e os tokens visuais em `src/assets/base.css`.

## Versão 1

As decisões desta versão seguem `IMPLEMENTACAO.md` e `AGENTS.md`, incluindo temas claro e escuro completos, preferência do sistema e persistência da escolha explícita. O tema claro é a base; o escuro usa carvão com tonalidade oliva.

- Off-white quente, texto escuro, amarelo da marca nos CTAs e oliva nos detalhes.
- Hero editorial sem fotografia, sem card comercial ou espaços reservados para imagens.
- Logo transparente de `public/lamin_logotipo.png`, com caminho e proporção corrigidos e suporte escuro para preservar a legibilidade. Apenas essa variante foi encontrada: uma logo específica para fundo claro permanece pendente, sem redesenho ou filtros de cor.
- Oito serviços preservados; processo e transparência apresentados em uma seção.
- Marcos Alan Lamin apresentado sem fotografia e sem qualificações adicionadas.
- FAQ com elementos nativos `details/summary` e navegação mobile por botão, com Escape e retorno de foco.
- WhatsApp no Header, na Hero e no Contato. O flutuante aparece apenas em desktop a partir de 1280px, na margem externa do conteúdo, e fica oculto quando Hero, Contato ou Footer estão visíveis. Em mobile permanece oculto para evitar sobreposições.
- Rodapé escuro como contraste intencional. Depoimentos continuam ocultos enquanto a lista estiver vazia.

Não foram utilizadas fotografias de bancos de imagem nesta versão. Não há fontes ou licenças fotográficas externas a atribuir.

## Validação

```sh
npm run build
npm run test:smoke
npm run preview -- --host 127.0.0.1 --port 4173
```

Com o preview em execução, em outro terminal:

```sh
npm run test:visual
```

O teste visual usa o Chromium instalado pelo Playwright local. Caso o navegador ainda não esteja instalado, execute `npx playwright install chromium`.

O script captura os dois temas em 1440×900, 768×1024 e 390×844 e verifica links essenciais, âncoras, menu mobile, FAQ por teclado, imagens carregadas, overflow, contraste de texto e erros do navegador. Também testa alternância, persistência após reload e acompanhamento do sistema antes de uma escolha explícita.

As capturas são gravadas por padrão em `/tmp/lamin-refinamento`, incluindo a página completa, Hero, FAQ aberto, Contato, menu e WhatsApp flutuante no desktop. É possível configurar a URL e o destino:

```sh
URL=http://127.0.0.1:4175 SHOTS_DIR=/tmp/lamin-refinamento npm run test:visual
```

As capturas devem ser abertas e inspecionadas visualmente; a aprovação automática do script não substitui essa revisão.

A versão está preparada para avaliação do proprietário. A publicação em produção não faz parte desta entrega.
