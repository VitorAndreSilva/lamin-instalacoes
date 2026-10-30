<script setup>
import { brand, contacts, hero } from '../content'
import { wa } from './icons'
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero__grid">
      <div class="hero__main">
        <p class="eyebrow">{{ contacts.region }}</p>

        <h1 class="hero__title">
          Instalações elétricas <span class="text-accent">resolvidas</span> com segurança
        </h1>

        <p class="hero__lead">{{ hero.lead }}</p>
      </div>

      <aside class="hero__plate">
        <img
          class="plate__mark"
          src="/lamin-logotipo.jpg"
          alt="Lamin Instalações Elétricas"
          width="570"
          height="205"
        />

        <dl class="plate__info">
          <div class="plate__row">
            <dt>Responsável</dt>
            <dd>{{ brand.professional }}</dd>
          </div>
          <div class="plate__row">
            <dt>Atendimento</dt>
            <dd>{{ contacts.region }}</dd>
          </div>
        </dl>
      </aside>

      <div class="hero__actions">
        <a class="btn btn--primary" :href="contacts.whatsapp" target="_blank" rel="noopener">
          <span class="icon" v-html="wa"></span>
          Pedir orçamento
        </a>
        <a class="btn btn--ghost" href="#servicos">Ver serviços</a>
      </div>

      <ul class="hero__trust">
        <li v-for="t in hero.trust" :key="t">{{ t }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: calc(var(--header-h) + var(--sp-8));
  padding-bottom: var(--sp-8);
  background: var(--bg);
  color: var(--text);
  border-bottom: var(--rule) solid var(--accent);
  transition:
    background-color var(--dur) var(--ease),
    color var(--dur) var(--ease);
}

/* ---------- Composição ---------- */

.hero__grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  grid-template-areas:
    'main plate'
    'actions plate'
    'trust plate';
  column-gap: clamp(3rem, 6vw, 5rem);
  row-gap: var(--sp-6);
  align-items: start;
}

.hero__main {
  grid-area: main;
}

.hero__plate {
  grid-area: plate;
}

.hero__actions {
  grid-area: actions;
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-3);
}

.hero__trust {
  grid-area: trust;
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2) var(--sp-5);
  padding-top: var(--sp-5);
  border-top: var(--hairline) solid var(--border);
  font-size: var(--fs-small);
  color: var(--text-muted);
}

.hero__trust li {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
}

.hero__trust li::before {
  content: '';
  width: 6px;
  height: 6px;
  background: var(--brand-olive);
  flex: none;
}

/* ---------- Tipografia ---------- */

.hero__title {
  font-size: var(--fs-giant);
  font-weight: 700;
  margin-top: var(--sp-4);
}

.hero__lead {
  margin-top: var(--sp-4);
  max-width: 32rem;
  color: var(--text-muted);
  font-size: var(--fs-lead);
}

/* ---------- Placa (eco do banner) ---------- */

.hero__plate {
  border: var(--hairline) solid var(--border);
  background: var(--bg-elevated);
  padding: var(--sp-5) var(--sp-5) var(--sp-3);
}

.plate__mark {
  width: min(100%, 21rem);
  height: auto;
}

.plate__info {
  margin-top: var(--sp-5);
  border-top: var(--hairline) solid var(--border);
  font-size: var(--fs-small);
}

.plate__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--sp-4);
  padding: var(--sp-2) 0;
  border-bottom: var(--hairline) solid var(--border);
}

.plate__row:last-child {
  border-bottom: 0;
}

.plate__row dt {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--fs-micro);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.plate__row dd {
  color: var(--text);
}

/* ---------- Responsivo ---------- */

@media (max-width: 900px) {
  .hero {
    padding-top: calc(var(--header-h) + var(--sp-7));
    padding-bottom: var(--sp-8);
  }

  .hero__grid {
    grid-template-columns: 1fr;
    grid-template-areas:
      'main'
      'plate'
      'actions'
      'trust';
  }

  .hero__actions .btn {
    flex: 1 1 auto;
  }

  .plate__mark {
    width: min(100%, 19rem);
  }
}

@media (max-width: 520px) {
  .hero__actions {
    flex-direction: column;
  }

  .hero__trust {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--sp-3);
  }
}
</style>
