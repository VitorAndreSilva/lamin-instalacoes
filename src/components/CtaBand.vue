<script setup>
import { useContactsStore } from '../stores/contacts'
import BrandIcon from './BrandIcon.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: '',
  },
  primaryLabel: {
    type: String,
    default: 'Chamar no WhatsApp',
  },
  secondaryLabel: {
    type: String,
    default: '',
  },
  secondaryTo: {
    type: String,
    default: '',
  },
})

const contacts = useContactsStore()
</script>

<template>
  <section class="cta surface-brand">
    <div class="container cta__inner">
      <div class="cta__body">
        <span class="cta__label">Orçamento</span>
        <h2 class="cta__title">{{ title }}</h2>
        <p v-if="text" class="cta__text">{{ text }}</p>
      </div>

      <div class="cta__actions">
        <a class="btn btn-primary" :href="contacts.whatsapp" target="_blank" rel="noopener">
          <BrandIcon name="whatsapp" :size="18" />
          {{ primaryLabel }}
        </a>
        <RouterLink v-if="secondaryLabel && secondaryTo" class="btn btn-inverse" :to="secondaryTo">
          {{ secondaryLabel }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background: var(--surface-brand);
  color: var(--text);
  border-top: var(--rule-weight) solid var(--accent);
}

.cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-8);
  padding-top: var(--sp-9);
  padding-bottom: var(--sp-9);
}

.cta__body {
  max-width: 40rem;
}

.cta__label {
  display: inline-block;
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 600;
  font-size: var(--fs-100);
  letter-spacing: var(--tr-wider);
  text-transform: uppercase;
  color: var(--accent-on-brand);
  margin-bottom: var(--sp-4);
}

.cta__title {
  font-size: var(--fs-700);
  color: var(--text);
}

.cta__text {
  margin-top: var(--sp-4);
  color: var(--text-muted);
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-3);
  flex: none;
}

@media (max-width: 800px) {
  .cta__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--sp-6);
  }
}
</style>
