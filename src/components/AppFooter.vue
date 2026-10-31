<script setup>
import { brand, contacts, nav } from '../content'
import AppLogo from './AppLogo.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer surface-brand">
    <div class="container">
      <div class="footer__top">
        <AppLogo />
        <nav class="footer__nav" aria-label="Navegação do rodapé">
          <a v-for="link in nav" :key="link.to" :href="link.to">{{ link.label }}</a>
          <a href="#top">Voltar ao início <span aria-hidden="true">↑</span></a>
        </nav>
      </div>
      <div class="footer__base">
        <p>© {{ year }} {{ brand.fullName }}</p>
        <p>{{ brand.professional }} · {{ contacts.city }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: var(--sp-6);
}
.footer__top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-5);
  padding-bottom: var(--sp-5);
}
.footer__nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2) var(--sp-5);
  font-size: var(--fs-small);
}
.footer__nav a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  gap: var(--sp-3);
  color: var(--on-brand);
}
.footer__nav a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}
.footer__base {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--sp-2) var(--sp-5);
  padding-top: var(--sp-5);
  border-top: 1px solid var(--border);
  color: var(--on-brand-muted);
  font-size: var(--fs-small);
}
@media (max-width: 700px) {
  .footer__top {
    align-items: flex-start;
    flex-direction: column;
  }
  .footer__nav {
    column-gap: var(--sp-4);
  }
  .footer__base {
    flex-direction: column;
  }
}
</style>
