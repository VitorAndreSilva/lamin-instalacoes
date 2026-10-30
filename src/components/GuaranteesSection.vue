<script setup>
import { guarantees, differentiators } from '../content'
</script>

<template>
  <section class="band">
    <div class="container band__grid">
      <div class="band__body">
        <p class="band__eyebrow">{{ guarantees.eyebrow }}</p>
        <h2 class="band__title">{{ guarantees.title }}</h2>
        <p class="band__text">{{ guarantees.text }}</p>

        <ul class="band__diffs dot-list">
          <li v-for="d in differentiators" :key="d">{{ d }}</li>
        </ul>
      </div>

      <dl class="band__list">
        <div v-for="item in guarantees.list" :key="item" class="band__row">
          <dt aria-hidden="true" class="band__check">✓</dt>
          <dd>{{ item }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.band {
  background: var(--accent);
  color: var(--accent-ink);
  padding-block: var(--sp-9);
}

.band__grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--sp-9);
  align-items: start;
}

.band__eyebrow {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 600;
  font-size: var(--fs-micro);
  letter-spacing: var(--tr-label);
  text-transform: uppercase;
}

.band__title {
  font-size: var(--fs-big);
  margin-top: var(--sp-3);
}

.band__text {
  margin-top: var(--sp-4);
  max-width: 30rem;
}

.band__diffs {
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
  margin-top: var(--sp-6);
  padding-top: var(--sp-5);
  border-top: var(--hairline) solid rgba(10, 10, 10, 0.3);
  font-size: var(--fs-body);
  font-weight: 500;
}

.band__diffs li::before {
  background: var(--accent-ink);
}

.band__list {
  border-top: var(--rule) solid var(--accent-ink);
}

.band__row {
  display: flex;
  align-items: center;
  gap: var(--sp-4);
  padding: var(--sp-5) 0;
  border-bottom: var(--hairline) solid rgba(10, 10, 10, 0.25);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--fs-lead);
}

.band__row:last-child {
  border-bottom: 0;
}

.band__check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: var(--hairline) solid rgba(10, 10, 10, 0.5);
  font-size: var(--fs-small);
  flex: none;
}

@media (max-width: 900px) {
  .band {
    padding-block: var(--sp-9);
  }

  .band__grid {
    grid-template-columns: 1fr;
    gap: var(--sp-7);
  }
}
</style>
