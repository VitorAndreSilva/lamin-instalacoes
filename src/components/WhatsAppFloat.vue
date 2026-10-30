<script setup>
import { useContactsStore } from '../stores/contacts'
import BrandIcon from './BrandIcon.vue'

const contacts = useContactsStore()
</script>

<template>
  <a
    class="whatsapp-float"
    :href="contacts.whatsapp"
    target="_blank"
    rel="noopener"
    aria-label="Fale conosco no WhatsApp"
    title="Fale conosco no WhatsApp"
  >
    <BrandIcon name="whatsapp" :size="22" />
    <span class="whatsapp-float__label">Fale no WhatsApp</span>
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
  border: var(--hairline) solid var(--accent);
  border-radius: var(--r-none);
  background: var(--accent);
  color: var(--accent-ink);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--fs-200);
  letter-spacing: 0.02em;
  transition:
    background-color var(--dur) var(--ease),
    border-color var(--dur) var(--ease),
    color var(--dur) var(--ease);
}

.whatsapp-float:hover {
  background: transparent;
  color: var(--accent);
}

.whatsapp-float svg {
  flex: none;
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
