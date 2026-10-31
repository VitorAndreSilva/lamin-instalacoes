<script setup>
import { contact, contacts } from '../content'
import { wa } from './icons'

const channels = [
  { label: 'Telefone', value: contacts.phoneDisplay, href: contacts.tel },
  { label: 'E-mail', value: contacts.email, href: `mailto:${contacts.email}` },
  { label: 'Instagram', value: contacts.instagramHandle, href: contacts.instagram, external: true },
  { label: 'Endereço', value: contacts.fullAddress },
]
</script>

<template>
  <section id="contato" class="section contact" aria-labelledby="contact-title">
    <div class="container contact__grid">
      <div>
        <p class="eyebrow">{{ contact.eyebrow }}</p>
        <h2 id="contact-title" class="section-head__title">{{ contact.title }}</h2>
        <p class="contact__text">{{ contact.text }}</p>
        <a
          class="btn btn--primary contact__cta"
          :href="contacts.whatsapp"
          target="_blank"
          rel="noopener"
        >
          <span class="icon" aria-hidden="true" v-html="wa"></span>
          Conversar no WhatsApp
        </a>
      </div>
      <dl class="contact__rows">
        <div v-for="channel in channels" :key="channel.label" class="contact__row">
          <dt>{{ channel.label }}</dt>
          <dd>
            <a
              v-if="channel.href"
              :href="channel.href"
              :target="channel.external ? '_blank' : undefined"
              :rel="channel.external ? 'noopener' : undefined"
              >{{ channel.value }}</a
            >
            <span v-else>{{ channel.value }}</span>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.contact {
  border-top: 1px solid var(--border);
}
.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-9);
  align-items: start;
}
.contact__text {
  margin-top: var(--sp-4);
  color: var(--text-muted);
  max-width: 34ch;
}
.contact__cta {
  margin-top: var(--sp-5);
}
.contact__rows {
  border-top: 1px solid var(--border);
}
.contact__row {
  display: grid;
  grid-template-columns: 5.5rem minmax(0, 1fr);
  gap: var(--sp-4);
  align-items: baseline;
  padding-block: 0.875rem;
  border-bottom: 1px solid var(--border);
}
dt {
  color: var(--text-muted);
  font-size: var(--fs-small);
}
dd {
  font-size: var(--fs-small);
  overflow-wrap: anywhere;
}
dd a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
}
dd a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}
@media (max-width: 700px) {
  .contact__grid {
    grid-template-columns: 1fr;
    gap: var(--sp-7);
  }
  .contact__row {
    grid-template-columns: 4.5rem minmax(0, 1fr);
    gap: var(--sp-3);
  }
}
</style>
