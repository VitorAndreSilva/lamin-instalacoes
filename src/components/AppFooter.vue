<script setup>
import { RouterLink } from 'vue-router'
import { useContactsStore } from '../stores/contacts'
import AppLogo from './AppLogo.vue'
import BrandIcon from './BrandIcon.vue'

const contacts = useContactsStore()

const socials = [
  { name: 'WhatsApp', href: contacts.whatsapp, icon: 'whatsapp' },
  { name: 'Facebook', href: contacts.facebook, icon: 'facebook' },
  { name: 'Instagram', href: contacts.instagram, icon: 'instagram' },
]

const nav = [
  { to: '/', label: 'Home' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]
</script>

<template>
  <footer class="footer surface-brand">
    <div class="container footer__grid">
      <div class="footer__brand">
        <AppLogo variant="footer" />
        <p>
          Soluções completas em instalações elétricas residenciais e comerciais, com qualidade,
          segurança e garantia.
        </p>
        <a
          class="footer__phone"
          :href="`https://wa.me/${contacts.phone}`"
          target="_blank"
          rel="noopener"
        >
          <BrandIcon name="phone" :size="16" />
          {{ contacts.phoneDisplay }}
        </a>
      </div>

      <nav class="footer__col" aria-label="Navegação do rodapé">
        <h4 class="footer__title">Navegação</h4>
        <RouterLink v-for="item in nav" :key="item.to" :to="item.to" class="footer__link">
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="footer__col">
        <h4 class="footer__title">Serviços</h4>
        <RouterLink to="/servicos" class="footer__link">Instalações elétricas</RouterLink>
        <RouterLink to="/servicos" class="footer__link">Quadros de distribuição</RouterLink>
        <RouterLink to="/servicos" class="footer__link">Iluminação</RouterLink>
        <RouterLink to="/servicos" class="footer__link">Emergências</RouterLink>
      </div>

      <div class="footer__col">
        <h4 class="footer__title">Redes</h4>
        <a
          v-for="s in socials"
          :key="s.name"
          :href="s.href"
          target="_blank"
          rel="noopener"
          class="footer__link"
        >
          {{ s.name }}
        </a>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p>
          &copy; {{ new Date().getFullYear() }} Lamin Instalações. Todos os direitos reservados.
        </p>
        <p class="footer__note">Instalações elétricas · Brasília e região</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--surface-brand);
  color: var(--text);
  margin-top: auto;
  border-top: var(--rule-weight) solid var(--accent);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: var(--sp-7);
  padding-top: var(--sp-9);
  padding-bottom: var(--sp-8);
}

.footer :deep(.brand) {
  color: var(--text);
}

.footer__brand p {
  color: var(--text-muted);
  margin-top: var(--sp-5);
  max-width: 30rem;
  font-size: var(--fs-300);
}

.footer__phone {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  margin-top: var(--sp-5);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--fs-300);
  color: var(--accent-on-brand);
  transition: opacity var(--dur) var(--ease);
}

.footer__phone:hover {
  opacity: 0.75;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
}

.footer__title {
  font-size: var(--fs-100);
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 600;
  letter-spacing: var(--tr-wide);
  text-transform: uppercase;
  color: var(--accent-on-brand);
  padding-bottom: var(--sp-3);
  border-bottom: var(--hairline) solid var(--border);
  margin-bottom: var(--sp-2);
}

.footer__link {
  color: var(--text-muted);
  font-size: var(--fs-300);
  width: fit-content;
  transition: color var(--dur) var(--ease);
}

.footer__link:hover {
  color: var(--text);
}

.footer__bottom {
  border-top: var(--hairline) solid var(--border);
  padding: var(--sp-4) 0;
}

.footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-4);
  flex-wrap: wrap;
}

.footer__bottom p {
  color: var(--text-muted);
  font-size: var(--fs-200);
}

.footer__note {
  font-family: var(--font-display);
  font-style: italic;
  letter-spacing: 0.04em;
}

@media (max-width: 900px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--sp-7) var(--sp-6);
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 560px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
}
</style>
