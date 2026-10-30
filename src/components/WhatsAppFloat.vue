<script setup>
import { contacts } from '../content'
import { wa } from './icons'
</script>

<template>
  <a
    class="whatsapp-float"
    :href="contacts.whatsapp"
    target="_blank"
    rel="noopener"
    aria-label="Conversar no WhatsApp"
    title="Conversar no WhatsApp"
  >
    <span class="whatsapp-float__icon" v-html="wa"></span>
    <span class="whatsapp-float__label">Conversar no WhatsApp</span>
  </a>
</template>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 90;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.15rem;
  border: var(--hairline) solid var(--brand-black);
  border-radius: var(--r);
  background: var(--accent);
  color: var(--accent-ink);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--fs-micro);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: background-color var(--dur) var(--ease);
}

.whatsapp-float:hover {
  background: var(--accent-hover);
}

.whatsapp-float__icon {
  display: inline-flex;
  flex: none;
}

.whatsapp-float__icon :deep(svg) {
  width: 18px;
  height: 18px;
}

@media (max-width: 560px) {
  .whatsapp-float__label {
    display: none;
  }

  .whatsapp-float {
    padding: 0.85rem;
  }
}
</style>
