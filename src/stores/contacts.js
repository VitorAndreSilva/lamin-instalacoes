import { defineStore } from 'pinia'

export const useContactsStore = defineStore('contacts', () => {
  const phone = '554788846372'
  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(
    'Olá! Gostaria de um orçamento para meus serviços de instalação.',
  )}`
  const facebook = 'https://facebook.com/instalaprime'
  const instagram = 'https://instagram.com/instalaprime'
  const phoneDisplay = '(48) 88846-6372'

  return { phone, phoneDisplay, whatsapp, facebook, instagram }
})
