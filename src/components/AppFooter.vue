<script setup>
import { brand, contacts } from '../content'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer surface-brand">
    <div class="container">
      <span class="footer__wire" aria-hidden="true"></span>
    </div>

    <div class="container footer__grid">
      <div class="footer__brand">
        <img
          class="footer__logo"
          src="/lamin-logotipo.jpg"
          alt="Lamin Instalações Elétricas"
          width="570"
          height="205"
        />
      </div>

      <ul class="footer__links">
        <li>
          <a :href="contacts.tel">{{ contacts.phoneDisplay }}</a>
        </li>
        <li>
          <a :href="`mailto:${contacts.email}`">{{ contacts.email }}</a>
        </li>
        <li>
          <a :href="contacts.instagram" target="_blank" rel="noopener">{{
            contacts.instagramHandle
          }}</a>
        </li>
        <li>
          <span>{{ contacts.fullAddress }}</span>
        </li>
      </ul>
    </div>

    <div class="container footer__base">
      <p>© {{ year }} {{ brand.fullName }}</p>
      <p>{{ contacts.city }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-top: var(--sp-8);
}

/* fio final — o condutor encerra num ponto */
.footer__wire {
  position: relative;
  display: block;
  width: 160px;
  height: var(--trace-w);
  background: var(--border-on-brand-strong);
}

.footer__wire::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 0;
  width: var(--node-size);
  height: var(--node-size);
  background: var(--brand-yellow);
}

.footer__grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--sp-9);
  align-items: center;
  padding-top: var(--sp-7);
  padding-bottom: var(--sp-8);
}

.footer__logo {
  width: min(100%, 210px);
  height: auto;
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--sp-2) var(--sp-6);
  font-size: var(--fs-small);
  color: var(--on-brand-muted);
}

.footer__links a {
  padding: 0.25rem 0;
  color: var(--on-brand);
  transition: color var(--dur) var(--ease);
}

.footer__links a:hover {
  color: var(--accent-on-brand);
}

.footer__base {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--sp-2) var(--sp-5);
  padding-block: var(--sp-5);
  border-top: var(--hairline) solid var(--border);
  font-size: var(--fs-micro);
  color: var(--on-brand-muted);
}

@media (max-width: 700px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--sp-7);
  }

  .footer__links {
    justify-content: flex-start;
    flex-direction: column;
    gap: var(--sp-2);
  }
}
</style>
