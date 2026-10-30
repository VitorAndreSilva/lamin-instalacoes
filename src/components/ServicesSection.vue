<script setup>
import { services, contacts } from '../content'
</script>

<template>
  <section id="servicos" class="section">
    <div class="container">
      <header class="section-head">
        <p class="eyebrow">{{ services.eyebrow }}</p>
        <h2 class="section-head__title">
          Do ponto de luz ao <span class="text-accent">quadro geral</span>
        </h2>
      </header>

      <ul class="index">
        <li v-for="(s, i) in services.list" :key="s.title" class="index__row">
          <span class="index__num">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="index__body">
            <h3 class="index__title">{{ s.title }}</h3>
            <p class="index__desc">{{ s.desc }}</p>
          </div>
          <a
            class="index__cta"
            :href="contacts.whatsapp"
            target="_blank"
            rel="noopener"
            :aria-label="`Solicitar orçamento para ${s.title}`"
          >
            Orçamento
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.index {
  border-top: var(--hairline) solid var(--border);
}

.index__row {
  display: grid;
  grid-template-columns: 3.5rem 1fr auto;
  align-items: start;
  gap: var(--sp-5);
  padding: var(--sp-5) 0;
  border-bottom: var(--hairline) solid var(--border);
  transition: background-color var(--dur) var(--ease);
}

.index__row:hover {
  background: var(--bg-soft);
}

.index__num {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 600;
  font-size: var(--fs-small);
  color: var(--accent-text);
  padding-top: 0.2rem;
}

.index__title {
  font-size: var(--fs-mid);
  margin-bottom: var(--sp-2);
}

.index__desc {
  color: var(--text-muted);
  font-size: var(--fs-body);
  max-width: 44rem;
}

.index__cta {
  white-space: nowrap;
  padding: 0.35rem 0.9rem;
  border: var(--hairline) solid var(--border-strong);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--fs-micro);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition:
    border-color var(--dur) var(--ease),
    color var(--dur) var(--ease);
}

.index__cta:hover {
  border-color: var(--accent);
  color: var(--accent-text);
}

@media (max-width: 700px) {
  .index__row {
    grid-template-columns: 2.5rem 1fr;
  }

  .index__cta {
    grid-column: 2;
    width: fit-content;
    margin-top: var(--sp-2);
  }
}
</style>
