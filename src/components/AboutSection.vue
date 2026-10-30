<script setup>
import { about, brand, contacts } from '../content'
</script>

<template>
  <section id="sobre" class="section">
    <div class="container about">
      <div class="about__body">
        <p class="eyebrow">{{ about.eyebrow }}</p>
        <h2 class="section-head__title">{{ about.title }}</h2>
        <p class="about__name">{{ brand.professional }}</p>
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
        <li v-for="v in about.values" :key="v.label" class="about__value">
          <div class="about__valhead">
            <span class="about__valmarker" aria-hidden="true"></span>
            <h3 class="about__vallabel">{{ v.label }}</h3>
          </div>
          <p class="about__valdesc">{{ v.desc }}</p>
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

/* nome do profissional — protagonismo factual, sem itálico nem destaque */
.about__name {
  margin-top: var(--sp-2);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--fs-mid);
}

.about__text {
  margin-top: var(--sp-4);
  color: var(--text-muted);
  max-width: 30rem;
}

.about__cta {
  margin-top: var(--sp-6);
}

/* ---------- Grade de valores (vocabulário de caixa de passagem) ---------- */

.about__values {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: var(--hairline) solid var(--border);
}

.about__value {
  padding: var(--sp-5) var(--sp-6);
}

.about__value:nth-child(odd) {
  border-right: var(--hairline) solid var(--border);
}

.about__value:nth-child(-n + 2) {
  border-bottom: var(--hairline) solid var(--border);
}

.about__valhead {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: var(--sp-2);
}

.about__valmarker {
  width: 7px;
  height: 7px;
  background: var(--brand-olive);
  flex: none;
}

.about__vallabel {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--fs-lead);
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

  .about__values {
    grid-template-columns: 1fr;
  }

  .about__value:nth-child(odd),
  .about__value:nth-child(-n + 2) {
    border-right: 0;
    border-bottom: 0;
  }

  .about__value:not(:last-child) {
    border-bottom: var(--hairline) solid var(--border);
  }
}
</style>
