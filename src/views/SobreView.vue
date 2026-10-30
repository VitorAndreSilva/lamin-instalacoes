<script setup>
import { RouterLink } from 'vue-router'
import BrandIcon from '../components/BrandIcon.vue'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'

const values = [
  {
    icon: 'shield',
    title: 'Segurança',
    desc: 'Trabalhamos com equipamentos de proteção e seguimos todas as normas técnicas.',
  },
  {
    icon: 'clock',
    title: 'Pontualidade',
    desc: 'Respeitamos o nosso compromisso: chegamos na hora e entregamos no prazo.',
  },
  {
    icon: 'hand',
    title: 'Transparência',
    desc: 'Orçamento claro, sem surpresas. Você aprova antes de qualquer serviço.',
  },
  {
    icon: 'heart',
    title: 'Cuidado',
    desc: 'Tratamos a sua casa ou empresa como se fosse nossa: com todo o zelo.',
  },
]

const milestones = [
  {
    year: '2016',
    title: 'Início das atividades',
    desc: 'Começamos atendendo pequenos reparos na nossa vizinhança.',
  },
  {
    year: '2019',
    title: 'Crescimento',
    desc: 'Expandimos para projetos elétricos residenciais e comerciais em toda a cidade.',
  },
  {
    year: '2022',
    title: 'Empresa formalizada',
    desc: 'Estruturamos a operação com equipe própria e garantia de serviços.',
  },
  {
    year: '2026',
    title: '+500 serviços',
    desc: 'Mais de 500 serviços realizados e uma legião de clientes satisfeitos.',
  },
]

const aboutStats = [
  { value: '500+', label: 'Serviços' },
  { value: '300+', label: 'Clientes' },
  { value: '100%', label: 'Satisfação' },
]
</script>

<template>
  <main id="conteudo">
    <PageHero
      label="Sobre nós"
      title="Conheça a Lamin"
      lead="Especialistas em instalações elétricas residenciais e comerciais, prontos para cuidar do seu espaço."
    />

    <!-- ---------- HISTÓRIA ---------- -->
    <section class="section">
      <div class="container story">
        <figure class="story__figure surface-brand">
          <img
            src="/hero-illustration.svg"
            alt="Esquema de um quadro de distribuição com circuitos de iluminação, tomadas e ventilação"
          />
          <figcaption>Quadro geral e circuitos de distribuição</figcaption>
        </figure>

        <div class="story__body">
          <span class="story__label">Nossa história</span>
          <h2 class="story__title">
            Começamos pequenos. <span class="text-accent">Crescemos assim.</span>
          </h2>
          <p>
            Lamin Instalações nasceu de uma necessidade simples: oferecer serviços de instalação
            elétrica com qualidade de verdade. Começamos pequenos, como toda grande história, e
            crescemos graças a uma coisa que nunca abrimos mão — o respeito pelo cliente.
          </p>
          <p>
            Hoje somos a escolha de centenas de residências e empresas. Nossa missão continua a
            mesma: resolver problemas com eficiência, segurança e honestidade. Cada serviço é feito
            como se fosse em nossa própria casa.
          </p>

          <dl class="story__stats">
            <div v-for="s in aboutStats" :key="s.label">
              <dt>{{ s.label }}</dt>
              <dd>{{ s.value }}</dd>
            </div>
          </dl>

          <RouterLink to="/contato" class="btn btn-primary">Fale conosco</RouterLink>
        </div>
      </div>
    </section>

    <!-- ---------- VALORES ---------- -->
    <section class="section section--alt">
      <div class="container">
        <header class="section-head">
          <span class="section-head__label">Valores</span>
          <h2 class="section-head__title">
            O que nos guia em <span class="text-accent">cada atendimento</span>
          </h2>
        </header>

        <ul class="values">
          <li v-for="v in values" :key="v.title" class="value">
            <BrandIcon class="value__icon" :name="v.icon" :size="26" />
            <h3 class="value__title">{{ v.title }}</h3>
            <p class="value__desc">{{ v.desc }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- ---------- TRAJETÓRIA ---------- -->
    <section class="section">
      <div class="container">
        <header class="section-head section-head--center">
          <span class="section-head__label">Trajetória</span>
          <h2 class="section-head__title">
            Os passos que nos <span class="text-accent">trouxeram até aqui</span>
          </h2>
        </header>

        <ol class="timeline">
          <li v-for="m in milestones" :key="m.year" class="timeline__item">
            <span class="timeline__year">{{ m.year }}</span>
            <h3 class="timeline__title">{{ m.title }}</h3>
            <p class="timeline__desc">{{ m.desc }}</p>
          </li>
        </ol>
      </div>
    </section>

    <CtaBand
      title="Vamos trabalhar juntos?"
      text="Conte sua necessidade e receba uma solução sob medida."
      primary-label="Entrar em contato"
      secondary-label="Ver Instagram"
      secondary-to="/contato"
    />
  </main>
</template>

<style scoped>
/* ---------- HISTÓRIA ---------- */
.story {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: var(--sp-9);
  align-items: center;
}

.story__figure {
  background: var(--surface-brand);
  border: var(--hairline) solid var(--border);
  padding: var(--sp-5);
}

.story__figure img {
  width: 100%;
  height: auto;
}

.story__figure figcaption {
  margin-top: var(--sp-4);
  padding-top: var(--sp-3);
  border-top: var(--hairline) solid var(--border);
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--fs-200);
  letter-spacing: 0.04em;
  color: var(--text-muted);
}

.story__label {
  display: inline-block;
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 600;
  font-size: var(--fs-100);
  letter-spacing: var(--tr-wider);
  text-transform: uppercase;
  color: var(--accent-text);
  padding-bottom: 0.45rem;
  border-bottom: var(--rule-weight) solid var(--accent);
  margin-bottom: var(--sp-5);
}

.story__title {
  font-size: var(--fs-800);
  margin-bottom: var(--sp-5);
}

.story__body p {
  color: var(--text-muted);
  margin-bottom: var(--sp-4);
  max-width: 36rem;
}

.story__stats {
  display: flex;
  gap: var(--sp-8);
  margin: var(--sp-7) 0;
  padding-top: var(--sp-5);
  border-top: var(--hairline) solid var(--border);
}

.story__stats dt {
  order: 2;
  color: var(--text-muted);
  font-size: var(--fs-200);
}

.story__stats dd {
  order: 1;
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 700;
  font-size: var(--fs-700);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--accent-text);
  margin-bottom: 0.2rem;
}

.story__stats div {
  display: flex;
  flex-direction: column;
}

/* ---------- VALORES ---------- */
.values {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-6);
}

.value {
  padding-top: var(--sp-5);
  border-top: var(--rule-weight) solid var(--accent);
}

.value__icon {
  color: var(--accent-text);
  margin-bottom: var(--sp-4);
}

.value__title {
  font-size: var(--fs-600);
  margin-bottom: var(--sp-2);
}

.value__desc {
  color: var(--text-muted);
  font-size: var(--fs-300);
}

/* ---------- TRAJETÓRIA ---------- */
.timeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-6);
}

.timeline__item {
  position: relative;
  padding-top: var(--sp-5);
  border-top: var(--hairline) solid var(--border-strong);
}

.timeline__item::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 0;
  width: 8px;
  height: 8px;
  background: var(--accent);
}

.timeline__year {
  display: inline-block;
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 700;
  font-size: var(--fs-600);
  letter-spacing: var(--tr-tight);
  color: var(--accent-text);
  margin-bottom: var(--sp-2);
}

.timeline__title {
  font-size: var(--fs-500);
  margin-bottom: var(--sp-2);
}

.timeline__desc {
  color: var(--text-muted);
  font-size: var(--fs-300);
}

@media (max-width: 1024px) {
  .values,
  .timeline {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 900px) {
  .story {
    grid-template-columns: 1fr;
    gap: var(--sp-8);
  }
}

@media (max-width: 560px) {
  .values,
  .timeline {
    grid-template-columns: 1fr;
  }

  .story__stats {
    gap: var(--sp-5);
  }
}
</style>
