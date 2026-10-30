# AGENTS.md — Lamin Instalações Elétricas

## Missão

Você está trabalhando no frontend da Lamin Instalações Elétricas, um negócio de prestação de serviços elétricos em Joinville, Santa Catarina.

Sua missão é reconstruir integralmente a landing page existente, entregando uma aplicação Vue completa, funcional, responsiva, elegante e pronta para publicação.

O objetivo não é criar um protótipo, uma primeira dobra isolada ou uma demonstração visual. O objetivo é entregar o site completo.

## Contexto técnico

- O projeto é exclusivamente frontend.
- A tecnologia principal é Vue.js.
- Não existe backend e não deve ser criado um.
- O repositório contém uma implementação anterior que pode ser inteiramente substituída.
- A versão anterior deve permanecer recuperável pelo Git.
- O agente pode reorganizar a arquitetura, componentes, estilos e dependências.
- Não é obrigatório preservar o Vue Router ou qualquer biblioteca existente.
- Não remover dependências ou arquivos sem avaliar seu uso.
- Evitar complexidade arquitetural desnecessária.

## Identidade da marca

Nome: LAMIN Instalações Elétricas.

Profissional associado: Marcos A. Lamin.

A referência visual principal é o material original da marca, disponível em `public/lamin.jpeg`.

Direção artística:

- Identidade industrial, contemporânea e sofisticada.
- Preto e tons escuros como base.
- Amarelo moderado e tons oliva como destaques.
- Possibilidade de superfícies claras em off-white quente.
- Tipografia expressiva e excelente hierarquia visual.
- Composições originais e equilibradas.
- Elementos gráficos discretos inspirados em circuitos e esquemas elétricos.
- Fotografia autêntica quando disponível.
- Layout responsivo cuidadosamente desenvolvido.

Evitar:

- Aparência genérica de templates.
- Amarelo neon ou excessivamente saturado.
- Gradientes e sombras decorativas sem propósito.
- Excesso de animações.
- Elementos visuais desconectados da identidade.
- Logotipos recriados de maneira imprecisa.

Preservar o logotipo original. Caso não exista arquivo isolado adequado, utilizar a referência disponível sem inventar uma nova identidade.

## Informações comerciais

Centralizar os dados comerciais em um módulo de conteúdo reutilizável.

Informações confirmadas no planejamento:

- Nome: LAMIN Instalações Elétricas.
- Responsável: Marcos A. Lamin.
- WhatsApp: https://wa.me/554799587856
- Instagram: https://instagram.com/lamin.marcos
- E-mail: cacolamin2009@gmail.com
- Endereço: Rua José Alves de Braga, 125 — Itinga, Joinville/SC.

Validar a consistência dos dados antes da publicação.

Não inventar:

- Depoimentos.
- Estatísticas de clientes ou projetos.
- Certificações.
- Garantias comerciais.
- Tempo de experiência.
- Serviços não confirmados.
- Fotografias de trabalhos apresentados como reais.

Se não houver depoimentos verdadeiros, ocultar a seção correspondente.

## Escopo obrigatório da landing page

Entregar a experiência completa, incluindo:

1. Header responsivo com navegação funcional.
2. Hero com proposta de valor e chamadas para contato.
3. Apresentação dos serviços confirmados.
4. Diferenciais fundamentados em informações reais.
5. Explicação do processo de atendimento.
6. Seção sobre o profissional.
7. Depoimentos, somente quando houver conteúdo real.
8. FAQ com informações verificáveis.
9. Contato com canais comerciais.
10. Footer completo.
11. Botão flutuante de WhatsApp, se adequado à experiência.

O agente pode reorganizar, combinar ou adaptar seções quando houver justificativa de UX, sem omitir informações comerciais essenciais.

## Arquitetura

A aplicação pode ter uma única página pública, mas não deve concentrar toda a implementação em um componente monolítico.

Adotar uma organização coerente de:

- Componentes de layout.
- Componentes de seções.
- Componentes compartilhados.
- Dados de conteúdo.
- Estilos globais e tokens visuais.
- Assets da marca.

Preservar convenções adequadas ao Vue e ao ecossistema já utilizado no projeto.

A arquitetura deve ser simples, legível, sustentável e adequada à dimensão de uma landing page.

Não criar abstrações ou dependências desnecessárias.

## Requisitos funcionais

O site deve:

- Inicializar sem erros.
- Renderizar a página completa.
- Possuir navegação entre seções.
- Apresentar links de contato funcionais.
- Ter menu mobile utilizável.
- Não apresentar erros de importação ou componentes ausentes.
- Não depender de serviços pagos.
- Não depender de backend.
- Funcionar em dispositivos móveis e desktop.
- Não apresentar rolagem horizontal indevida.
- Respeitar preferências de movimento reduzido quando houver animações.

Qualquer recurso introduzido, como alternância de tema, deve funcionar integralmente. Não incluir controles meramente decorativos.

## SEO e acessibilidade

Implementar:

- Título e descrição adequados.
- Hierarquia semântica de headings.
- HTML semântico.
- Metadados sociais.
- Dados estruturados válidos, quando aplicáveis.
- Estratégia apropriada de indexação para Vue.
- Textos alternativos.
- Contraste legível.
- Navegação por teclado.
- Estados de foco visíveis.
- Boa performance de carregamento.

Não inventar URLs de produção, imagens sociais ou dados estruturados.

## Critérios de conclusão

A tarefa somente estará concluída quando:

1. Todas as seções públicas estiverem implementadas e integradas.
2. A aplicação iniciar corretamente.
3. O build de produção terminar sem erros.
4. A página renderizar no navegador.
5. A navegação e os links essenciais funcionarem.
6. O layout tiver sido verificado em desktop e mobile.
7. Não existirem erros de console ou recursos ausentes identificados na validação.
8. O agente apresentar um resumo das alterações, dos testes e das limitações remanescentes.

Um build bem-sucedido não substitui a validação da página renderizada.

Se alguma verificação não puder ser executada, declarar explicitamente essa limitação. Nunca afirmar que algo foi testado sem realmente executar o teste.

## Autonomia e execução

O agente está autorizado a reconstruir o frontend completo, desde que preserve a identidade e os dados confirmados.

Deve analisar o estado atual, definir uma arquitetura coerente, implementar todas as seções, integrar os componentes e corrigir problemas encontrados.

Não interromper a tarefa após implementar apenas uma seção.

Não solicitar aprovação entre etapas internas de implementação.

Não considerar mensagens de progresso como entregas finais.

Evitar operações destrutivas sobre o histórico Git ou arquivos alheios ao projeto.

A entrega final deve ser uma landing page completa, executável e verificada.