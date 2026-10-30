<script setup>
import { brand, contacts } from '../content'
import { wa } from './icons'
</script>

<template>
  <section id="top" class="hero surface-brand">
    <div class="hero__circuit" aria-hidden="true">
      <span class="hero__cirnode"></span>
    </div>

    <div class="container hero__grid">
      <div class="hero__main">
        <p class="eyebrow">{{ brand.professional }}</p>

        <h1 class="hero__title">
          Instalações elétricas <span class="text-accent">resolvidas</span> com segurança
        </h1>

        <p class="hero__lead">
          Instalações elétricas residenciais e comerciais. Atendimento com rapidez, segurança,
          garantia e orçamento por escrito.
        </p>
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
            <dt>WhatsApp</dt>
            <dd>
              <a class="plate__link" :href="contacts.tel">{{ contacts.phoneDisplay }}</a>
            </dd>
          </div>
          <div class="plate__row">
            <dt>Instagram</dt>
            <dd>
              <a
                class="plate__link plate__link--sm"
                :href="contacts.instagram"
                target="_blank"
                rel="noopener"
              >
                {{ contacts.instagramHandle }}
              </a>
            </dd>
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
        <a class="btn btn--ghost-on-brand" href="#servicos">Ver serviços</a>
      </div>

      <ul class="hero__trust">
        <li>Orçamento sem compromisso</li>
        <li>Atendimento de urgência</li>
        <li>Garantia em todos os serviços</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding-top: calc(var(--header-h) + var(--sp-9));
  padding-bottom: var(--sp-9);
  border-bottom: var(--rule) solid var(--accent);
}

/* ---------- Fio condutor (canto superior direito) ---------- */

.hero__circuit {
  display: none;
  position: absolute;
  top: calc(var(--header-h) + var(--sp-6));
  right: var(--gutter);
  width: min(260px, 22vw);
  height: 96px;
  pointer-events: none;
}

.hero__circuit::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: var(--trace-w);
  background: var(--border-on-brand-strong);
}

.hero__circuit::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: var(--trace-w);
  height: 100%;
  background: var(--border-on-brand-strong);
}

.hero__cirnode {
  position: absolute;
  bottom: -4px;
  left: -3.5px;
  width: var(--node-size);
  height: var(--node-size);
  background: var(--brand-yellow);
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
  margin-top: var(--sp-5);
}

.hero__trust {
  grid-area: trust;
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2) var(--sp-5);
  margin-top: var(--sp-4);
  padding-top: var(--sp-5);
  border-top: var(--hairline) solid var(--border);
  font-size: var(--fs-small);
  color: var(--on-brand-muted);
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
  background: var(--accent-on-brand);
  flex: none;
}

/* ---------- Tipografia ---------- */

.hero__title {
  font-size: var(--fs-giant);
  font-weight: var(--fw-heavy);
  letter-spacing: -0.025em;
  margin-top: var(--sp-5);
}

.hero .text-accent {
  color: var(--accent-on-brand);
}

.hero__lead {
  margin-top: var(--sp-5);
  max-width: 34rem;
  color: var(--on-brand-muted);
  font-size: var(--fs-lead);
}

/* ---------- Placa (eco do banner) ---------- */

.hero__plate {
  border: var(--hairline) solid var(--border);
  background: var(--elev-on-brand);
  padding: var(--sp-7) var(--sp-7) var(--sp-5);
}

.plate__mark {
  width: 100%;
  height: auto;
}

.plate__info {
  margin-top: var(--sp-7);
  border-top: var(--hairline) solid var(--border);
  font-size: var(--fs-small);
}

.plate__row {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: var(--sp-3) 0;
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
  color: var(--on-brand-muted);
}

.plate__row dd {
  font-size: 1rem;
  color: var(--on-brand);
}

.plate__link {
  display: inline-block;
  padding-block: 0.1rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: 0.02em;
  transition: color var(--dur) var(--ease);
}

.plate__link--sm {
  font-size: 1rem;
}

.plate__link:hover {
  color: var(--accent-on-brand);
}

/* ---------- Responsivo ---------- */

@media (min-width: 901px) {
  .hero__circuit {
    display: block;
  }
}

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
