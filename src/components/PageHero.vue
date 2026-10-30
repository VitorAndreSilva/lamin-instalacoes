<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  lead: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="page-hero surface-brand">
    <div class="container page-hero__inner">
      <span class="page-hero__label">{{ label }}</span>
      <h1 class="page-hero__title">
        <slot name="title">{{ title }}</slot>
      </h1>
      <p v-if="lead" class="page-hero__lead">{{ lead }}</p>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  background: var(--surface-brand);
  color: var(--text);
  border-bottom: var(--rule-weight) solid var(--accent);
}

.page-hero__inner {
  padding-top: var(--sp-10);
  padding-bottom: var(--sp-10);
}

.page-hero__label {
  display: inline-block;
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 600;
  font-size: var(--fs-100);
  letter-spacing: var(--tr-wider);
  text-transform: uppercase;
  color: var(--accent-on-brand);
  padding-bottom: 0.45rem;
  border-bottom: var(--rule-weight) solid var(--accent);
  margin-bottom: var(--sp-6);
}

.page-hero__title {
  font-size: var(--fs-900);
  max-width: 18ch;
  color: var(--text);
}

.page-hero__lead {
  margin-top: var(--sp-5);
  max-width: 46rem;
  color: var(--text-muted);
  font-size: var(--fs-500);
}

.page-hero :deep(.text-accent) {
  color: var(--accent-on-brand);
}

@media (max-width: 700px) {
  .page-hero__inner {
    padding-top: var(--sp-8);
    padding-bottom: var(--sp-8);
  }
}
</style>
