<script setup>
import { steps } from '../content'
</script>

<template>
  <section id="como-funciona" class="section section--alt">
    <div class="container">
      <header class="section-head section-head--center">
        <p class="eyebrow">{{ steps.eyebrow }}</p>
        <h2 class="section-head__title">
          Simples, rápido e <span class="text-accent">sem burocracia</span>
        </h2>
      </header>

      <ol class="steps">
        <li v-for="(s, i) in steps.list" :key="s.title" class="steps__item">
          <span class="steps__num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="steps__title">{{ s.title }}</h3>
          <p class="steps__desc">{{ s.desc }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-6);
  counter-reset: passo;
}

.steps__item {
  padding-top: var(--sp-5);
  border-top: var(--rule) solid var(--accent);
}

.steps__num {
  display: block;
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 700;
  font-size: var(--fs-mid);
  color: var(--accent-text);
  margin-bottom: var(--sp-3);
}

.steps__title {
  font-size: var(--fs-lead);
  margin-bottom: var(--sp-2);
}

.steps__desc {
  color: var(--text-muted);
  font-size: var(--fs-body);
}

@media (max-width: 900px) {
  .steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .steps {
    grid-template-columns: 1fr;
  }
}
</style>
