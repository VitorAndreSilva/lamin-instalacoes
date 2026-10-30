<script setup>
import BrandMark from './BrandMark.vue'

defineProps({
  variant: {
    type: String,
    default: 'header',
  },
})
</script>

<template>
  <RouterLink to="/" class="brand" :class="`brand--${variant}`">
    <BrandMark class="brand__mark" :size="variant === 'footer' ? 44 : 32" />
    <span class="brand__text">
      <span class="brand__name">Lamin</span>
      <span class="brand__sub">Instalações</span>
    </span>
  </RouterLink>
</template>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--text);
}

.brand__mark {
  color: var(--accent);
  flex: none;
}

.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1;
  padding-bottom: 0.32rem;
  border-bottom: var(--rule-weight) solid var(--accent);
}

.brand__name {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 700;
  font-size: 1.16rem;
  letter-spacing: -0.01em;
  line-height: 1;
}

.brand__sub {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-top: 0.28rem;
  line-height: 1;
}

.brand--footer .brand__name {
  font-size: 1.45rem;
}

.brand--footer .brand__sub {
  font-size: 0.7rem;
}
</style>
