# Lamin Instalações Elétricas

Landing page institucional em Vue 3 e Vite, exclusivamente frontend.

## Desenvolvimento

```sh
npm install
npm run dev
```

O conteúdo comercial reutilizável está em `src/content.js`. Os componentes de cada seção ficam em `src/components`, e os tokens visuais em `src/assets/base.css`.

## Versão 1

As decisões desta versão seguem `IMPLEMENTACAO.md`, que define o tema claro único para esta entrega, substituindo a orientação anterior de dois temas do `AGENTS.md`.

- Off-white quente, texto escuro, amarelo da marca nos CTAs e oliva nos detalhes.
- Hero editorial sem fotografia, sem card comercial ou espaços reservados para imagens.
- Logotipo existente preservado, com a referência original em `public/lamin.jpeg`.
- Oito serviços preservados; processo e transparência apresentados em uma seção.
- Marcos Alan Lamin apresentado sem fotografia e sem qualificações adicionadas.
- FAQ com elementos nativos `details/summary` e navegação mobile por botão, com Escape e retorno de foco.
- WhatsApp no Header, na Hero e no Contato; botão flutuante removido para evitar sobreposições.
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

O script captura a página em 1440×900, 768×1024 e 390×844 e verifica links essenciais, âncoras, menu mobile, FAQ por teclado, imagens carregadas, overflow e erros do navegador. Também verifica que uma preferência escura antiga não interfere no tema claro.

As capturas são gravadas por padrão em `/tmp/lamin-v1`, incluindo a página completa, Hero, FAQ aberto, Contato e menu. É possível configurar a URL e o destino:

```sh
URL=http://127.0.0.1:4174 SHOTS_DIR=/tmp/lamin-v1 npm run test:visual
```

As capturas devem ser abertas e inspecionadas visualmente; a aprovação automática do script não substitui essa revisão.

A versão está preparada para avaliação do proprietário. A publicação em produção não faz parte desta entrega.
