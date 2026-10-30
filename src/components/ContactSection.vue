<script setup>
import { contact, contacts } from '../content'
import { wa } from './icons'

const channels = [
  {
    label: 'WhatsApp',
    value: contacts.phoneDisplay,
    href: contacts.whatsapp,
    external: true,
  },
  {
    label: 'E-mail',
    value: contacts.email,
    href: `mailto:${contacts.email}`,
  },
  {
    label: 'Instagram',
    value: contacts.instagramHandle,
    href: contacts.instagram,
    external: true,
  },
  {
    label: 'Endereço',
    value: contacts.fullAddress,
  },
]
</script>

<template>
  <section id="contato" class="contact">
    <div class="container">
      <header class="section-head">
        <p class="eyebrow">{{ contact.eyebrow }}</p>
        <h2 class="section-head__title">{{ contact.title }}</h2>
        <p class="section-head__text">{{ contact.text }}</p>
      </header>

      <a
        class="btn btn--primary contact__cta"
        :href="contacts.whatsapp"
        target="_blank"
        rel="noopener"
      >
        <span class="contact__ctaicon" v-html="wa"></span>
        Conversar no WhatsApp
      </a>

      <ul class="contact__rows">
        <li
          v-for="c in channels"
          :key="c.label"
          class="contact__row"
          :class="{ 'contact__row--plain': !c.href }"
        >
          <span class="contact__label">{{ c.label }}</span>
          <a
            v-if="c.href"
            :href="c.href"
            class="contact__value"
            :target="c.external ? '_blank' : undefined"
            :rel="c.external ? 'noopener' : undefined"
          >
            {{ c.value }}
          </a>
          <span v-else class="contact__value">{{ c.value }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding-block: var(--sp-9);
  border-top: var(--hairline) solid var(--border);
  background: var(--bg);
  color: var(--text);
}

/* ---------- CTA principal (único da seção) ---------- */

.contact__cta {
  padding: 1rem 1.75rem;
  font-size: var(--fs-small);
}

.contact__ctaicon {
  display: inline-flex;
}

.contact__ctaicon :deep(svg) {
  width: 20px;
  height: 20px;
}

/* ---------- Canais ---------- */

.contact__rows {
  margin-top: var(--sp-7);
  border-top: var(--hairline) solid var(--border);
}

.contact__row {
  display: grid;
  grid-template-columns: 7.5rem 1fr;
  align-items: center;
  gap: var(--sp-4);
  padding: var(--sp-3) 0;
  border-bottom: var(--hairline) solid var(--border);
}

.contact__label {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--fs-micro);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.contact__value {
  align-self: center;
  color: var(--text);
  font-size: var(--fs-body);
  width: fit-content;
  transition: color var(--dur) var(--ease);
}

a.contact__value:hover {
  color: var(--accent-text);
}

@media (max-width: 700px) {
  .contact__row {
    row-gap: var(--sp-1);
    align-items: start;
  }
}
</style>
