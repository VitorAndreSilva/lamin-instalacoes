<script setup>
import { about, contacts } from '../content'
</script>

<template>
  <section id="sobre" class="section" aria-labelledby="about-title">
    <div class="container about">
      <header>
        <p class="eyebrow">{{ about.eyebrow }} a Lamin</p>
        <h2 id="about-title" class="section-head__title">{{ about.title }}</h2>
        <p class="about__role">Instalações elétricas · {{ contacts.city }}</p>
      </header>
      <div class="about__body">
        <p v-for="paragraph in about.paragraphs" :key="paragraph">{{ paragraph }}</p>
        <a href="#contato">Entre em contato <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 0.8fr 1.4fr;
  gap: var(--sp-9);
}
.about__role {
  margin-top: var(--sp-3);
  color: var(--text-muted);
  font-size: var(--fs-small);
}
.about__body {
  max-width: 38rem;
  color: var(--text-muted);
}
.about__body p + p {
  margin-top: var(--sp-4);
}
.about__body a {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-4);
  min-height: 44px;
  margin-top: var(--sp-4);
  color: var(--text);
  text-decoration: underline;
  text-underline-offset: 5px;
  font-size: var(--fs-small);
}
@media (max-width: 700px) {
  .about {
    grid-template-columns: 1fr;
    gap: var(--sp-5);
  }
}
</style>
