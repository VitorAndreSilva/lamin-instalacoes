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
          <span class="index__num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="index__body">
            <h3 class="index__title">
              <a
                class="index__link"
                :href="contacts.whatsapp"
                target="_blank"
                rel="noopener"
                :aria-label="`Solicitar orçamento para ${s.title}`"
              >
                {{ s.title }}
              </a>
            </h3>
            <p class="index__desc">{{ s.desc }}</p>
          </div>
          <span class="index__arrow" aria-hidden="true">→</span>
        </li>
      </ul>

      <div class="index__more">
        <a class="btn btn--primary" :href="contacts.whatsapp" target="_blank" rel="noopener">
          Pedir orçamento no WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.index {
  border-top: var(--hairline) solid var(--border);
}

.index__row {
  position: relative;
  display: grid;
  grid-template-columns: 3.5rem 1fr auto;
  align-items: center;
  gap: var(--sp-5);
  padding: var(--sp-5) 0;
  border-bottom: var(--hairline) solid var(--border);
  transition: background-color var(--dur) var(--ease);
}

.index__num,
.index__body {
  transition: transform var(--dur) var(--ease);
}

.index__row:hover,
.index__row:focus-within {
  background: var(--bg-soft);
}

.index__row:hover .index__body,
.index__row:hover .index__num,
.index__row:focus-within .index__body,
.index__row:focus-within .index__num {
  transform: translateX(0.5rem);
}

.index__num {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 600;
  font-size: var(--fs-small);
  color: var(--accent-text);
}

.index__title {
  font-size: var(--fs-mid);
}

.index__link {
  display: inline-block;
  color: inherit;
}

.index__link::after {
  content: '';
  position: absolute;
  inset: 0;
}

.index__desc {
  color: var(--text-muted);
  font-size: var(--fs-body);
  max-width: 44rem;
}

.index__arrow {
  color: var(--accent-text);
  font-size: var(--fs-lead);
  opacity: 0;
  transform: translateX(-6px);
  transition:
    opacity var(--dur) var(--ease),
    transform var(--dur) var(--ease);
}

.index__row:hover .index__arrow,
.index__row:focus-within .index__arrow {
  opacity: 1;
  transform: translateX(0);
}

.index__more {
  margin-top: var(--sp-7);
}

@media (max-width: 700px) {
  .index__row {
    grid-template-columns: 2.5rem 1fr;
    row-gap: var(--sp-2);
  }
}
</style>
