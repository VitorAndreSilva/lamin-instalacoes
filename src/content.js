export const brand = {
  name: 'LAMIN',
  fullName: 'Lamin Instalações Elétricas',
  tagline: 'Instalações elétricas',
  professional: 'Marcos Alan Lamin',
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
  title: 'Instalações elétricas para casas e empresas.',
  lead: 'Da instalação à manutenção, atendimento em Itinga, Joinville e região.',
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
  list: [
    'Orçamento por escrito',
    'Garantia do serviço',
    'Limpeza ao finalizar',
    'Atendimento no prazo',
  ],
}

export const steps = {
  eyebrow: 'Como funciona',
  title: 'Do primeiro contato ao serviço concluído.',
  list: [
    {
      title: 'Fale conosco',
      desc: 'Entre em contato pelo WhatsApp para descrever o que você precisa.',
    },
    {
      title: 'Receba um orçamento',
      desc: 'Avalie a proposta e aprove antes de iniciar o serviço.',
    },
    {
      title: 'Agende o serviço',
      desc: 'Combine a data e o horário para o atendimento.',
    },
    {
      title: 'Serviço executado',
      desc: 'Realização do serviço combinado, com cuidado pelo seu ambiente.',
    },
  ],
}

export const about = {
  eyebrow: 'Sobre',
  title: 'Marcos Alan Lamin',
  paragraphs: [
    'À frente da Lamin Instalações Elétricas, Marcos Alan Lamin atende residências e empresas em Itinga, Joinville e região.',
    'O trabalho abrange instalações, manutenção e reformas elétricas, de pontos de luz e tomadas a quadros de distribuição.',
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
  title: 'O que você precisa resolver?',
  text: 'Descreva o que você precisa pelo WhatsApp e receba um orçamento.',
}
