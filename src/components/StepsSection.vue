<script setup>
import { steps } from '../content'
</script>

<template>
  <section id="como-funciona" class="section section--alt">
    <div class="container">
      <header class="section-head">
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
/* ---------- Circuitos em série (desktop: linha horizontal) ---------- */

.steps {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-6);
}

.steps::before {
  content: '';
  position: absolute;
  top: 9px;
  left: 0;
  right: 0;
  height: var(--rule);
  background: var(--border-strong);
}

.steps::after {
  content: '';
  position: absolute;
  top: 4px;
  right: 0;
  width: 12px;
  height: 12px;
  background: var(--brand-yellow);
}

.steps__item {
  position: relative;
  padding-top: var(--sp-7);
}

.steps__item::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 0;
  width: 10px;
  height: 10px;
  background: var(--bg-soft);
  border: var(--rule) solid var(--brand-yellow);
}

.steps__item:first-child::before {
  background: var(--brand-yellow);
}

.steps__num {
  display: block;
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 700;
  font-size: var(--fs-mid);
  color: var(--text);
  margin-bottom: var(--sp-2);
}

.steps__title {
  font-size: var(--fs-lead);
  margin-bottom: var(--sp-2);
}

.steps__desc {
  color: var(--text-muted);
  font-size: var(--fs-body);
  max-width: 16rem;
}

/* ---------- Vertical: o fio desce pela esquerda ---------- */

@media (max-width: 900px) {
  .steps {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .steps::before {
    top: 4px;
    bottom: 4px;
    right: auto;
    left: 4px;
    width: var(--rule);
    height: auto;
  }

  .steps::after {
    top: auto;
    right: auto;
    bottom: -2px;
    left: -1px;
  }

  .steps__item {
    padding-top: 0;
    padding-left: 2.5rem;
    margin-bottom: var(--sp-7);
  }

  .steps__item:last-child {
    margin-bottom: 0;
  }

  .steps__item::before {
    top: 2px;
    left: 0;
  }
}
</style>
