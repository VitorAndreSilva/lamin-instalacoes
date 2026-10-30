export const brand = {
  name: 'LAMIN',
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
}

export const nav = [
  { to: '#servicos', label: 'Serviços' },
  { to: '#sobre', label: 'Sobre' },
  { to: '#faq', label: 'Dúvidas' },
  { to: '#contato', label: 'Contato' },
]
