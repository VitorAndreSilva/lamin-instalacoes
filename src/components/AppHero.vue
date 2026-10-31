<script setup>
import { contacts, hero } from '../content'
import { wa } from './icons'
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <div class="container">
      <p class="eyebrow">Lamin Instalações Elétricas · Joinville / SC</p>
      <div class="hero__grid">
        <h1 id="hero-title">{{ hero.title }}</h1>
        <div class="hero__body">
          <p class="hero__lead">{{ hero.lead }}</p>
          <a class="btn btn--primary" :href="contacts.whatsapp" target="_blank" rel="noopener">
            <span class="icon" aria-hidden="true" v-html="wa"></span>
            Pedir orçamento
          </a>
          <p class="hero__note">Conte o que precisa. O orçamento é sem compromisso.</p>
        </div>
      </div>
      <div class="hero__base">
        <p>Instalação, manutenção e reforma</p>
        <a href="#servicos">Conheça os serviços <span aria-hidden="true">↓</span></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: clamp(3rem, 7vw, 6rem);
  background: var(--bg);
}
.hero__grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  align-items: start;
  gap: clamp(2rem, 6vw, 6rem);
  padding-block: 1.75rem 3.5rem;
}
h1 {
  max-width: 14ch;
  font-size: var(--fs-giant);
  line-height: 1.12;
  letter-spacing: -0.035em;
}
.hero__lead {
  max-width: 30ch;
  font-size: var(--fs-lead);
  color: var(--text-muted);
  margin-bottom: var(--sp-5);
}
.hero__note {
  margin-top: var(--sp-3);
  max-width: 32ch;
  color: var(--text-muted);
  font-size: var(--fs-small);
}
.hero__base {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--sp-4);
  padding-block: var(--sp-4);
  border-top: 1px solid var(--border-strong);
  color: var(--text-muted);
  font-size: var(--fs-small);
}
.hero__base a {
  display: inline-flex;
  gap: var(--sp-5);
  align-items: center;
  min-height: 44px;
  color: var(--text);
}
.hero__base a:hover {
  text-decoration: underline;
}
@media (max-width: 700px) {
  .hero__grid {
    grid-template-columns: 1fr;
    gap: var(--sp-6);
    padding-bottom: var(--sp-7);
  }
  h1 {
    max-width: 17ch;
  }
  .hero__lead {
    max-width: 34ch;
  }
  .hero__base {
    align-items: flex-start;
    flex-direction: column;
    gap: 0;
  }
}
</style>
