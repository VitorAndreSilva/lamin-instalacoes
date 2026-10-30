<script setup>
import { about, brand, contacts } from '../content'
</script>

<template>
  <section id="sobre" class="section">
    <div class="container about">
      <div class="about__body">
        <p class="eyebrow">{{ about.eyebrow }}</p>
        <h2 class="about__title">
          {{ about.title }} <span class="text-accent">{{ brand.professional }}</span>
        </h2>
        <p v-for="p in about.paragraphs" :key="p" class="about__text">{{ p }}</p>

        <a
          class="btn btn--primary about__cta"
          :href="contacts.whatsapp"
          target="_blank"
          rel="noopener"
        >
          Conversar no WhatsApp
        </a>
      </div>

      <ul class="about__values">
        <li v-for="(v, i) in about.values" :key="v.label" class="about__value">
          <span class="about__valnum">{{ String(i + 1).padStart(2, '0') }}</span>
          <div>
            <h3 class="about__vallabel">{{ v.label }}</h3>
            <p class="about__valdesc">{{ v.desc }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: var(--sp-10);
  align-items: start;
}

.about__title {
  font-size: var(--fs-big);
  margin-top: var(--sp-3);
}

.about__text {
  margin-top: var(--sp-4);
  color: var(--text-muted);
  max-width: 30rem;
}

.about__cta {
  margin-top: var(--sp-6);
}

.about__values {
  border-top: var(--rule) solid var(--accent);
}

.about__value {
  display: flex;
  gap: var(--sp-5);
  padding: var(--sp-5) 0;
  border-bottom: var(--hairline) solid var(--border);
}

.about__valnum {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 600;
  font-size: var(--fs-small);
  color: var(--accent-text);
  padding-top: 0.2rem;
}

.about__vallabel {
  font-size: var(--fs-mid);
  margin-bottom: var(--sp-1);
}

.about__valdesc {
  color: var(--text-muted);
  font-size: var(--fs-body);
}

@media (max-width: 900px) {
  .about {
    grid-template-columns: 1fr;
    gap: var(--sp-8);
  }
}
</style>
