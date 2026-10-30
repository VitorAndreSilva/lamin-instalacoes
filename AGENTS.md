## Refinamento visual — diretrizes obrigatórias

A landing page está funcional e sua arquitetura geral deve ser preservada.

A próxima prioridade é elevar a qualidade da direção artística e reduzir o excesso visual.

### Densidade e composição

- Reduzir textos excessivamente longos, mantendo as informações comerciais essenciais.
- Evitar cards gigantes, muito altos ou com espaços vazios desproporcionais.
- Preferir composições mais compactas, equilibradas e variadas.
- Não transformar todas as seções em grades de cards.
- Melhorar a relação entre tamanho dos elementos, conteúdo e espaço disponível.
- Preservar uma hierarquia tipográfica clara sem exagerar nos tamanhos.

### Paleta de cores

A referência definitiva da marca é `public/lamin.jpeg`.

- Extrair as cores diretamente da referência, distinguindo cores do logotipo, texto e fundo.
- Evitar estimar a cor principal apenas visualmente.
- Manter o preto como base da identidade.
- Manter o amarelo original como principal cor de destaque.
- Reduzir significativamente a área ocupada pelo amarelo.
- Valorizar tons oliva, cinzas quentes e cores secundárias da marca.
- Usar amarelo em elementos de alta prioridade: CTAs, detalhes da identidade e pontos focais.
- Usar oliva em elementos secundários, sempre respeitando o contraste.
- Evitar grandes superfícies amarelas quando não forem essenciais.

### Modo claro e escuro

Os dois modos devem ser realmente diferentes, completos e funcionais.

Modo escuro:
- Superfícies escuras.
- Textos claros.
- Amarelo e oliva como acentos controlados.

Modo claro:
- Fundos claros em off-white quente.
- Textos escuros.
- Superfícies e bordas adaptadas.
- Amarelo e oliva preservados de maneira equilibrada.

Implementar tokens semânticos para background, surface, text, muted, border e accent, com valores específicos para cada tema.

Verificar todos os componentes em ambos os modos, incluindo Header, cards, menus, formulários, CTAs e Footer.

O botão de alternância deve modificar efetivamente o tema, respeitar a preferência inicial do sistema e preservar a escolha do visitante.

### Validação visual

Não considerar o design validado apenas pela leitura do código.

Comparar capturas reais da aplicação em desktop e mobile, nos dois temas.

Corrigir problemas de composição, contraste, legibilidade, overflow, espaçamento e consistência visual.

Não inventar novos conteúdos comerciais durante o refinamento.