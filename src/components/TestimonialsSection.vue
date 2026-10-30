<script setup>
import { testimonials } from '../content'
</script>

<template>
  <section v-if="testimonials.length > 0" class="section section--alt testimonios">
    <div class="container">
      <header class="section-head">
        <p class="eyebrow">Depoimentos</p>
        <h2 class="section-head__title">Quem já contratou</h2>
      </header>

      <ul class="quotes">
        <li v-for="t in testimonials" :key="t.name" class="quotes__item">
          <p class="quotes__text">{{ t.text }}</p>
          <div class="quotes__by">
            <span class="quotes__name">{{ t.name }}</span>
            <span v-if="t.role" class="quotes__role">{{ t.role }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.quotes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-6);
}

.quotes__item {
  display: flex;
  flex-direction: column;
  gap: var(--sp-5);
  padding-top: var(--sp-5);
  border-top: var(--rule) solid var(--accent);
}

.quotes__text {
  flex-grow: 1;
  font-size: var(--fs-lead);
}

.quotes__name {
  display: block;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--fs-body);
}

.quotes__role {
  display: block;
  color: var(--text-muted);
  font-size: var(--fs-small);
}

@media (max-width: 1024px) {
  .quotes {
    grid-template-columns: 1fr;
  }
}
</style>
