<script setup>
import { brand, contacts } from '../content'
import { wa } from './icons'
</script>

<template>
  <section id="top" class="hero surface-brand">
    <div class="container hero__grid">
      <div class="hero__body">
        <p class="eyebrow">{{ brand.professional }}</p>

        <h1 class="hero__title">
          Instalações elétricas <span class="text-accent">resolvidas</span> com segurança
        </h1>

        <p class="hero__lead">
          Instalações elétricas residenciais e comerciais. Atendimento com rapidez, segurança,
          garantia e orçamento por escrito.
        </p>

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
            <dt>Profissional</dt>
            <dd>{{ contacts.instagramHandle }}</dd>
          </div>
          <div class="plate__row">
            <dt>WhatsApp</dt>
            <dd>
              <a class="plate__link" :href="contacts.tel">{{ contacts.phoneDisplay }}</a>
            </dd>
          </div>
          <div class="plate__row">
            <dt>Atendimento</dt>
            <dd>{{ contacts.region }}</dd>
          </div>
        </dl>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: calc(var(--header-h) + var(--sp-9));
  padding-bottom: var(--sp-9);
  border-bottom: var(--rule) solid var(--accent);
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  align-items: center;
  gap: clamp(3rem, 6vw, 5rem);
}

/* ---------- Corpo ---------- */

.hero__title {
  font-size: var(--fs-giant);
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

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-3);
  margin-top: var(--sp-7);
}

.hero__trust {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2) var(--sp-5);
  margin-top: var(--sp-7);
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

.plate__link:hover {
  color: var(--accent-on-brand);
}

/* ---------- Responsivo ---------- */

@media (max-width: 900px) {
  .hero {
    padding-top: calc(var(--header-h) + var(--sp-7));
    padding-bottom: var(--sp-8);
  }

  .hero__grid {
    grid-template-columns: 1fr;
    gap: var(--sp-8);
  }

  .hero__actions {
    margin-top: var(--sp-6);
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
