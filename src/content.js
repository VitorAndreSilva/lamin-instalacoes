export const brand = {
  name: 'LAMIN',
  fullName: 'Lamin Instalações Elétricas',
  tagline: 'Instalações elétricas',
  professional: 'Marcos A. Lamin',
}

const phone = '554799587856'
const waMessage = encodeURIComponent(
  'Olá! Gostaria de um orçamento para serviços de instalação elétrica.',
)

export const contacts = {
  phoneDisplay: '(47) 9958-7856',
  tel: `tel:+${phone}`,
  whatsapp: `https://wa.me/${phone}?text=${waMessage}`,
  email: 'cacolamin2009@gmail.com',
  instagram: 'https://instagram.com/lamin.marcos',
  instagramHandle: '@lamin.marcos',
  street: 'Rua José Alves de Braga, 125',
  district: 'Itinga',
  city: 'Joinville/SC',
  region: 'Itinga, Joinville e região',
  fullAddress: 'Rua José Alves de Braga, 125 — Itinga, Joinville/SC',
}

export const nav = [
  { to: '#servicos', label: 'Serviços' },
  { to: '#sobre', label: 'Sobre' },
  { to: '#faq', label: 'Dúvidas' },
  { to: '#contato', label: 'Contato' },
]

export const hero = {
  lead: 'Instalações elétricas residenciais e comerciais, com orçamento por escrito e garantia.',
  trust: ['Orçamento sem compromisso', 'Atendimento de urgência', 'Garantia em todos os serviços'],
}

export const services = {
  eyebrow: 'Serviços',
  title: 'Do ponto de luz ao quadro geral',
  list: [
    {
      title: 'Instalações Elétricas Residenciais',
      desc: 'Tomadas, interruptores, pontos de luz e circuitos internos.',
    },
    {
      title: 'Instalações Elétricas Comerciais',
      desc: 'Lojas, escritórios e empresas, conforme as normas.',
    },
    {
      title: 'Quadros de Distribuição',
      desc: 'Montagem, reforma e proteções DR e DPS.',
    },
    {
      title: 'Iluminação',
      desc: 'Luminárias, spots e pontos de luz, interna e externa.',
    },
    {
      title: 'Chuveiros e Eletrodomésticos',
      desc: 'Chuveiros, torneiras elétricas e pontos de força.',
    },
    {
      title: 'Ventiladores e Exaustores',
      desc: 'Ventiladores de teto, exaustores e arandelas.',
    },
    {
      title: 'Reformas e Aterramentos',
      desc: 'Reforma de instalações antigas e aterramento (NBR).',
    },
    {
      title: 'Emergências Elétricas',
      desc: 'Curto-circuito e panes, com atendimento rápido.',
    },
  ],
}

export const guarantees = {
  eyebrow: 'Transparência',
  title: 'Tudo incluído',
  text: 'Sem letras miúdas: todo serviço sai com as mesmas condições.',
  list: [
    'Orçamento por escrito',
    'Garantia do serviço',
    'Limpeza ao finalizar',
    'Atendimento no prazo',
  ],
}

export const differentiators = [
  'Profissionais capacitados',
  'Orçamento rápido, transparente e sem compromisso',
  'Pontualidade no agendamento e no prazo',
  'Limpeza e cuidado com o seu ambiente',
]

export const steps = {
  eyebrow: 'Como funciona',
  title: 'Simples, rápido e sem burocracia',
  list: [
    {
      title: 'Fale conosco',
      desc: 'Entre em contato pelo WhatsApp para descrever o que você precisa.',
    },
    {
      title: 'Receba um orçamento',
      desc: 'Você recebe uma proposta clara e sem surpresas para o seu projeto.',
    },
    {
      title: 'Agende o serviço',
      desc: 'Escolha a melhor data e horário. Atendimento flexível.',
    },
    {
      title: 'Serviço executado',
      desc: 'Execução com rapidez, limpeza e garantia de qualidade no resultado.',
    },
  ],
}

export const about = {
  eyebrow: 'Sobre',
  title: 'Quem executa o serviço',
  paragraphs: [
    'Serviços de instalação elétrica para residências e empresas em Itinga, Joinville e região, com orçamento por escrito e sem compromisso.',
  ],
  values: [
    {
      label: 'Segurança',
      desc: 'Trabalhamos com equipamentos de proteção e seguimos as normas técnicas.',
    },
    {
      label: 'Pontualidade',
      desc: 'Respeitamos o compromisso: chegamos na hora e entregamos no prazo.',
    },
    {
      label: 'Transparência',
      desc: 'Orçamento claro, sem surpresas. Você aprova antes de qualquer serviço.',
    },
    {
      label: 'Cuidado',
      desc: 'Tratamos a sua casa ou empresa como se fosse nossa.',
    },
  ],
}

export const testimonials = []

export const faqs = {
  eyebrow: 'Dúvidas',
  title: 'Perguntas frequentes',
  list: [
    {
      q: 'Como funciona o orçamento?',
      a: 'Você descreve o serviço pelo WhatsApp, com fotos se puder. Enviamos uma proposta clara e sem compromisso.',
    },
    {
      q: 'Vocês atendem empresas e residências?',
      a: 'Sim. Atendemos residências e empresas, em Itinga, Joinville e região.',
    },
    {
      q: 'Qual a garantia do serviço?',
      a: 'Todos os serviços contam com garantia. Se algo não estiver correto, retornamos sem custo adicional para corrigir.',
    },
    {
      q: 'Atendem urgências?',
      a: 'Sim. Curto-circuito, falta de energia e panes têm prioridade, respeitando os agendamentos já confirmados.',
    },
  ],
}

export const contact = {
  eyebrow: 'Contato',
  title: 'Fale conosco',
  text: 'Descreva o que você precisa pelo WhatsApp e receba um orçamento.',
}
