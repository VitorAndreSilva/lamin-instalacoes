<script setup>
import { faqs } from '../content'
</script>

<template>
  <section id="faq" class="section section--alt">
    <div class="container">
      <header class="section-head">
        <p class="eyebrow">{{ faqs.eyebrow }}</p>
        <h2 class="section-head__title">{{ faqs.title }}</h2>
      </header>

      <div class="faq">
        <details v-for="f in faqs.list" :key="f.q" class="faq__item" name="faq">
          <summary class="faq__q">
            <span>{{ f.q }}</span>
            <span class="faq__marker" aria-hidden="true"></span>
          </summary>
          <p class="faq__a">{{ f.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  max-width: 48rem;
  border-top: var(--hairline) solid var(--border);
}

.faq__item {
  border-bottom: var(--hairline) solid var(--border);
}

.faq__q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-5);
  padding: var(--sp-5) 0;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--fs-lead);
  list-style: none;
  transition: color var(--dur) var(--ease);
}

.faq__q::-webkit-details-marker {
  display: none;
}

.faq__item[open] .faq__q {
  color: var(--text);
}

.faq__marker {
  position: relative;
  flex: none;
  width: 14px;
  height: 14px;
}

.faq__marker::before,
.faq__marker::after {
  content: '';
  position: absolute;
  background: var(--border-strong);
  transition: background-color var(--dur) var(--ease);
}

.faq__item[open] .faq__marker::before,
.faq__item[open] .faq__marker::after {
  background: var(--accent);
}

.faq__marker::before {
  left: 0;
  right: 0;
  top: 6px;
  height: 2px;
}

.faq__marker::after {
  top: 0;
  bottom: 0;
  left: 6px;
  width: 2px;
}

.faq__item[open] .faq__marker::after {
  transform: scaleY(0);
}

.faq__a {
  padding-bottom: var(--sp-5);
  color: var(--text-muted);
  font-size: var(--fs-body);
  max-width: 42rem;
}
</style>
