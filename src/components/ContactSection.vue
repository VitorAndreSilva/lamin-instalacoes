<script setup>
import { contact, contacts, brand } from '../content'
import { wa } from './icons'

const channels = [
  {
    label: 'WhatsApp',
    value: contacts.phoneDisplay,
    href: contacts.whatsapp,
    action: 'Conversar agora',
    external: true,
  },
  {
    label: 'E-mail',
    value: contacts.email,
    href: `mailto:${contacts.email}`,
    action: 'Enviar mensagem',
  },
  {
    label: 'Instagram',
    value: contacts.instagramHandle,
    href: contacts.instagram,
    action: 'Ver perfil',
    external: true,
  },
  {
    label: 'Endereço',
    value: contacts.fullAddress,
  },
]
</script>

<template>
  <section id="contato" class="contact surface-brand">
    <div class="container">
      <header class="section-head">
        <p class="eyebrow">{{ contact.eyebrow }}</p>
        <h2 class="section-head__title contact__title">
          Orçamento <span class="text-accent">sem compromisso</span>
        </h2>
        <p class="section-head__text contact__text">{{ contact.text }}</p>
      </header>

      <div class="contact__grid">
        <div class="contact__left">
          <a
            class="btn btn--primary contact__cta"
            :href="contacts.whatsapp"
            target="_blank"
            rel="noopener"
          >
            <span class="contact__ctaicon" v-html="wa"></span>
            Conversar no WhatsApp
          </a>

          <dl class="contact__meta">
            <div class="contact__metarow">
              <dt>Responsável</dt>
              <dd>{{ brand.professional }}</dd>
            </div>
            <div class="contact__metarow">
              <dt>Atendimento</dt>
              <dd>{{ contacts.region }}</dd>
            </div>
          </dl>
        </div>

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

            <span v-if="c.action" class="contact__action" aria-hidden="true">{{ c.action }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding-block: var(--sp-9);
  border-top: var(--rule) solid var(--accent);
}

.contact__title {
  color: var(--on-brand);
}

.contact .text-accent {
  color: var(--accent-on-brand);
}

.contact__text {
  color: var(--on-brand-muted);
}

.contact__grid {
  display: grid;
  grid-template-columns: minmax(0, 22rem) 1fr;
  gap: var(--sp-9);
  align-items: start;
}

.contact__cta {
  width: 100%;
  padding: 1.1rem 1.5rem;
  font-size: var(--fs-body);
}

.contact__ctaicon {
  display: inline-flex;
}

.contact__ctaicon :deep(svg) {
  width: 20px;
  height: 20px;
}

.contact__meta {
  margin-top: var(--sp-5);
  border-top: var(--hairline) solid var(--border);
}

.contact__metarow {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: var(--sp-3) 0;
  border-bottom: var(--hairline) solid var(--border);
}

.contact__metarow:last-child {
  border-bottom: 0;
}

.contact__metarow dt {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--fs-micro);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--on-brand-muted);
}

.contact__metarow dd {
  color: var(--on-brand);
  font-size: var(--fs-body);
}

.contact__left {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--sp-5);
}

.contact__rows {
  border-top: var(--hairline) solid var(--border);
}

.contact__row {
  display: grid;
  grid-template-columns: 7.5rem 1fr auto;
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
  color: var(--on-brand-muted);
}

.contact__value {
  align-self: center;
  color: var(--on-brand);
  font-size: var(--fs-body);
  word-break: break-word;
}

a.contact__value:hover {
  color: var(--accent-on-brand);
}

.contact__action {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--fs-micro);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--on-brand-muted);
}

@media (max-width: 900px) {
  .contact__grid {
    grid-template-columns: 1fr;
    gap: var(--sp-7);
  }

  .contact__row {
    grid-template-columns: minmax(5.5rem, 7.5rem) 1fr;
  }

  .contact__action {
    display: none;
  }
}
</style>
