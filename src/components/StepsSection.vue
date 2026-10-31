<script setup>
import { steps } from '../content'
import GuaranteesSection from './GuaranteesSection.vue'
</script>

<template>
  <section id="como-funciona" class="section section--alt" aria-labelledby="steps-title">
    <div class="container">
      <div class="process">
        <header class="section-head">
          <p class="eyebrow">{{ steps.eyebrow }}</p>
          <h2 id="steps-title" class="section-head__title">{{ steps.title }}</h2>
        </header>
        <ol class="steps">
          <li v-for="(step, i) in steps.list" :key="step.title" class="steps__item">
            <span class="steps__num" aria-hidden="true">0{{ i + 1 }}</span>
            <div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
            </div>
          </li>
        </ol>
      </div>
      <GuaranteesSection />
    </div>
  </section>
</template>

<style scoped>
.process {
  display: grid;
  grid-template-columns: 0.8fr 1.4fr;
  gap: var(--sp-9);
}
.section-head {
  margin-bottom: 0;
  max-width: 20rem;
}
.steps {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-7) var(--sp-6);
}
.steps__item {
  display: flex;
  gap: var(--sp-3);
  align-items: baseline;
}
.steps__num {
  font-size: var(--fs-small);
  color: var(--accent-text);
  font-variant-numeric: tabular-nums;
}
.steps h3 {
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: var(--sp-2);
}
.steps p {
  font-size: var(--fs-small);
  color: var(--text-muted);
}
@media (max-width: 900px) {
  .process {
    grid-template-columns: 1fr;
    gap: var(--sp-7);
  }
  .section-head {
    max-width: 28rem;
  }
}
@media (max-width: 520px) {
  .steps {
    grid-template-columns: 1fr;
    gap: var(--sp-5);
  }
}
</style>
