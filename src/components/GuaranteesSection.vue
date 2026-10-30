<script setup>
import { guarantees, differentiators } from '../content'
</script>

<template>
  <section class="band surface-brand">
    <div class="container">
      <div class="band__seal" aria-hidden="true"></div>

      <div class="band__grid">
        <div class="band__body">
          <p class="eyebrow">{{ guarantees.eyebrow }}</p>
          <h2 class="band__title">{{ guarantees.title }}</h2>
          <p class="band__text">{{ guarantees.text }}</p>

          <ul class="band__diffs dot-list">
            <li v-for="d in differentiators" :key="d">{{ d }}</li>
          </ul>
        </div>

        <aside class="band__label">
          <p class="band__labelhead">Incluído em todo serviço</p>
          <ul class="band__items">
            <li v-for="item in guarantees.list" :key="item">{{ item }}</li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.band {
  padding-block: var(--sp-9);
}

/* selo zebrado — única ocorrência em toda a página */
.band__seal {
  height: 8px;
  background: repeating-linear-gradient(
    45deg,
    var(--brand-yellow) 0 10px,
    var(--brand-black) 10px 20px
  );
  margin-bottom: var(--sp-8);
}

.band__grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--sp-9);
  align-items: start;
}

.band__title {
  font-size: var(--fs-big);
  color: var(--on-brand);
  margin-top: var(--sp-3);
}

.band__text {
  margin-top: var(--sp-4);
  color: var(--on-brand-muted);
  max-width: 30rem;
}

.band__diffs {
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
  margin-top: var(--sp-6);
  padding-top: var(--sp-5);
  border-top: var(--hairline) solid var(--border);
  font-size: var(--fs-body);
  font-weight: 500;
  color: var(--on-brand);
}

/* ---------- Etiqueta amarela ---------- */

.band__label {
  background: var(--accent);
  color: var(--accent-ink);
  border: var(--rule) solid var(--accent-ink);
  padding: var(--sp-6);
}

.band__labelhead {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--fs-micro);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(10, 10, 10, 0.65);
  margin-bottom: var(--sp-2);
}

.band__items li {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  padding: var(--sp-4) 0;
  border-bottom: var(--hairline) solid rgba(10, 10, 10, 0.25);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--fs-lead);
}

.band__items li:last-child {
  border-bottom: 0;
}

.band__items li::before {
  content: '';
  width: 7px;
  height: 7px;
  background: var(--accent-ink);
  flex: none;
}

@media (max-width: 900px) {
  .band__grid {
    grid-template-columns: 1fr;
    gap: var(--sp-7);
  }
}
</style>
