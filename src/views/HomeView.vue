<script setup>
import { RouterLink } from 'vue-router'
import { useContactsStore } from '../stores/contacts'
import BrandIcon from '../components/BrandIcon.vue'
import BrandMark from '../components/BrandMark.vue'
import CtaBand from '../components/CtaBand.vue'

const contacts = useContactsStore()

const services = [
  {
    icon: 'bolt',
    title: 'Instalações Elétricas',
    desc: 'Instalação e manutenção de circuitos, tomadas, interruptores e pontos de força com total segurança.',
  },
  {
    icon: 'panel',
    title: 'Quadros de Distribuição',
    desc: 'Montagem, reforma e manutenção de quadros elétricos e disjuntores.',
  },
  {
    icon: 'bulb',
    title: 'Iluminação',
    desc: 'Projetos de iluminação interna e externa, luminárias, spots e pontos de luz.',
  },
  {
    icon: 'heater',
    title: 'Chuveiros e Eletrodomésticos',
    desc: 'Instalação de chuveiros, torneiras elétricas e tomadas de alta potência.',
  },
  {
    icon: 'fan',
    title: 'Ventiladores e Arandelas',
    desc: 'Instalação e troca de ventiladores de teto, exaustores e arandelas.',
  },
  {
    icon: 'alert',
    title: 'Emergências Elétricas',
    desc: 'Curto-circuitos, quedas de energia e panes. Atendimento de urgência.',
  },
]

const stats = [
  { value: '500+', label: 'Serviços realizados' },
  { value: '300+', label: 'Clientes satisfeitos' },
  { value: '10', label: 'Anos de experiência' },
  { value: '24h', label: 'Atendimento' },
]

const steps = [
  {
    title: 'Fale conosco',
    desc: 'Entre em contato pelo WhatsApp para descrever o que você precisa.',
  },
  {
    title: 'Receba um orçamento',
    desc: 'Você recebe uma proposta clara e sem surpresas para o seu projeto.',
  },
  {
    title: 'Agende o serviço',
    desc: 'Escolha a melhor data e horário. Aproveite nosso atendimento flexível.',
  },
  {
    title: 'Serviço garantido',
    desc: 'Executamos com rapidez, limpeza e garantia de qualidade no resultado.',
  },
]

const differentiators = [
  'Profissionais capacitados e experientes',
  'Orçamento rápido, transparente e sem compromisso',
  'Pontualidade no agendamento e no prazo',
  'Limpeza e cuidado com o seu ambiente',
  'Garantia de qualidade em todos os serviços',
]

const testimonials = [
  {
    name: 'Mariana Souza',
    role: 'Sobradinho, DF',
    text: 'Equipe super profissional! Instalaram todo o quadro elétrico da minha casa em tempo recorde e deixaram tudo limpo. Recomendo demais.',
  },
  {
    name: 'Carlos Pereira',
    role: 'Águas Claras, DF',
    text: 'Contratei para fazer o projeto de iluminação do meu escritório. Serviço impecável e preço justo. O atendimento pelo WhatsApp foi ótimo.',
  },
  {
    name: 'Fernanda Lima',
    role: 'Guará, DF',
    text: 'Resolveram um curto-circuito que ninguém conseguia consertar. Rapidez, educação e um resultado que superou a expectativa.',
  },
]

const guarantees = [
  'Orçamento por escrito',
  'Garantia do serviço',
  'Limpeza ao finalizar',
  'Atendimento no prazo',
]
</script>

<template>
  <main id="conteudo">
    <!-- ================= HERO ================= -->
    <section class="hero surface-brand">
      <div class="container hero__grid">
        <div class="hero__body">
          <span class="hero__label">Instalações elétricas</span>
          <h1 class="hero__title">
            Suas instalações <span class="text-accent">resolvidas</span> com segurança e qualidade
          </h1>
          <p class="hero__lead">
            Instalações elétricas completas para residências e empresas. Atendemos com rapidez,
            segurança, garantia e preço justo.
          </p>

          <div class="hero__actions">
            <a class="btn btn-primary" :href="contacts.whatsapp" target="_blank" rel="noopener">
              <BrandIcon name="whatsapp" :size="18" />
              Pedir orçamento
            </a>
            <RouterLink to="/servicos" class="btn btn-inverse">Ver serviços</RouterLink>
          </div>

          <ul class="hero__trust">
            <li>Atendimento em até 24h</li>
            <li>Orçamento sem compromisso</li>
            <li>Garantia em todos os serviços</li>
          </ul>
        </div>

        <!-- composição do banner de marca -->
        <aside class="plate" aria-label="Identidade Lamin">
          <div class="plate__lockup">
            <BrandMark :size="76" />
            <span class="plate__word">Lamin</span>
          </div>
          <span class="plate__rule"></span>
          <p class="plate__caption">Instalações elétricas residenciais e comerciais.</p>
          <p class="plate__caption">Brasília e região · Atendimento de urgência 24h.</p>
        </aside>
      </div>
    </section>

    <!-- ================= NÚMEROS ================= -->
    <section class="stats">
      <div class="container stats__grid">
        <div v-for="s in stats" :key="s.label" class="stat">
          <span class="stat__value">{{ s.value }}</span>
          <span class="stat__label">{{ s.label }}</span>
        </div>
      </div>
    </section>

    <!-- ================= SERVIÇOS ================= -->
    <section class="section">
      <div class="container">
        <header class="section-head">
          <span class="section-head__label">Serviços</span>
          <h2 class="section-head__title">
            Do ponto de luz ao quadro geral, <span class="text-accent">tudo no mesmo lugar</span>
          </h2>
        </header>

        <ul class="index">
          <li v-for="(s, i) in services" :key="s.title" class="index__row">
            <span class="index__num">{{ String(i + 1).padStart(2, '0') }}</span>
            <BrandIcon class="index__icon" :name="s.icon" :size="22" />
            <div class="index__body">
              <h3 class="index__title">{{ s.title }}</h3>
              <p class="index__desc">{{ s.desc }}</p>
            </div>
          </li>
        </ul>

        <div class="index__more">
          <RouterLink to="/servicos" class="link-arrow">
            Ver todos os serviços
            <BrandIcon name="arrow" :size="16" />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ================= DIFERENCIAIS ================= -->
    <section class="section section--alt">
      <div class="container split">
        <div class="split__body">
          <header class="section-head">
            <span class="section-head__label">Por que nós</span>
            <h2 class="section-head__title">
              Um compromisso que não <span class="text-accent">muda</span>
            </h2>
            <p class="section-head__text">
              Somos movidos por um único propósito: resolver o seu problema com excelência, desde o
              primeiro contato até a entrega final.
            </p>
          </header>

          <ul class="ticks">
            <li v-for="d in differentiators" :key="d">
              <BrandIcon name="check" :size="16" />
              {{ d }}
            </li>
          </ul>

          <RouterLink to="/sobre" class="btn btn-outline">Conheça quem somos</RouterLink>
        </div>

        <aside class="guarantee">
          <BrandIcon class="guarantee__icon" name="shield" :size="34" />
          <h3 class="guarantee__title">Garantia de qualidade</h3>
          <p class="guarantee__text">
            Ficamos satisfeitos apenas quando você está. Por isso, todos os serviços contam com
            garantia e suporte.
          </p>
          <ul class="guarantee__list">
            <li v-for="g in guarantees" :key="g">{{ g }}</li>
          </ul>
          <a class="guarantee__link" :href="contacts.whatsapp" target="_blank" rel="noopener">
            Solicitar orçamento
            <BrandIcon name="arrow" :size="16" />
          </a>
        </aside>
      </div>
    </section>

    <!-- ================= PROCESSO ================= -->
    <section class="section">
      <div class="container">
        <header class="section-head section-head--center">
          <span class="section-head__label">Como funciona</span>
          <h2 class="section-head__title">
            Simples, rápido e <span class="text-accent">sem burocracia</span>
          </h2>
          <p class="section-head__text">Veja como é fácil contratar a Lamin.</p>
        </header>

        <ol class="steps">
          <li v-for="(step, i) in steps" :key="step.title" class="step">
            <span class="step__num">{{ i + 1 }}</span>
            <h3 class="step__title">{{ step.title }}</h3>
            <p class="step__desc">{{ step.desc }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- ================= DEPOIMENTOS ================= -->
    <section class="section section--alt">
      <div class="container">
        <header class="section-head">
          <span class="section-head__label">Depoimentos</span>
          <h2 class="section-head__title">
            Quem já <span class="text-accent">confia</span> na gente
          </h2>
        </header>

        <ul class="quotes">
          <li v-for="t in testimonials" :key="t.name" class="quote">
            <p class="quote__text">“{{ t.text }}”</p>
            <div class="quote__by">
              <span class="quote__name">{{ t.name }}</span>
              <span class="quote__role">{{ t.role }}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <CtaBand
      title="Pronto para resolver suas instalações?"
      text="Fale agora mesmo com um de nossos especialistas e receba um orçamento gratuito."
      secondary-label="Ver Instagram"
      secondary-to="/contato"
    />
  </main>
</template>

<style scoped>
/* ---------- HERO ---------- */
.hero {
  background: var(--surface-brand);
  color: var(--text);
  border-bottom: var(--rule-weight) solid var(--accent);
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: var(--sp-10);
  padding-top: var(--sp-11);
  padding-bottom: var(--sp-11);
}

.hero__label {
  display: inline-block;
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 600;
  font-size: var(--fs-100);
  letter-spacing: var(--tr-wider);
  text-transform: uppercase;
  color: var(--accent-on-brand);
  padding-bottom: 0.45rem;
  border-bottom: var(--rule-weight) solid var(--accent);
  margin-bottom: var(--sp-6);
}

.hero__title {
  font-size: var(--fs-900);
  color: var(--text);
  max-width: 16ch;
}

.hero :deep(.text-accent) {
  color: var(--accent-on-brand);
}

.hero__lead {
  margin-top: var(--sp-5);
  max-width: 34rem;
  color: var(--text-muted);
  font-size: var(--fs-500);
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
  gap: var(--sp-5);
  margin-top: var(--sp-7);
  padding-top: var(--sp-5);
  border-top: var(--hairline) solid var(--border);
  font-size: var(--fs-200);
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
  background: var(--accent-on-brand);
  flex: none;
}

/* placa de marca (composição do banner) */
.plate {
  border: var(--hairline) solid var(--border);
  padding: var(--sp-7);
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
}

.plate__lockup {
  display: flex;
  align-items: center;
  gap: var(--sp-4);
}

.plate__lockup :deep(svg) {
  color: var(--accent-on-brand);
  flex: none;
}

.plate__word {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(2.4rem, 5vw, 3.4rem);
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--accent-on-brand);
}

.plate__rule {
  display: block;
  height: var(--rule-weight);
  background: var(--accent-on-brand);
  margin: var(--sp-4) 0 var(--sp-3);
}

.plate__caption {
  font-size: var(--fs-200);
  color: var(--text-muted);
  letter-spacing: 0.02em;
}

/* ---------- NÚMEROS ---------- */
.stats {
  border-bottom: var(--hairline) solid var(--border);
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.stat {
  padding: var(--sp-7) var(--sp-5);
  text-align: center;
  border-left: var(--hairline) solid var(--border);
}

.stat:first-child {
  border-left: 0;
}

.stat__value {
  display: block;
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(1.9rem, 3.6vw, 2.6rem);
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--accent-text);
}

.stat__label {
  display: block;
  margin-top: var(--sp-3);
  color: var(--text-muted);
  font-size: var(--fs-200);
  letter-spacing: 0.03em;
}

/* ---------- ÍNDICE DE SERVIÇOS ---------- */
.index {
  border-top: var(--hairline) solid var(--border);
}

.index__row {
  display: grid;
  grid-template-columns: 3rem 2.5rem 1fr;
  align-items: start;
  gap: var(--sp-5);
  padding: var(--sp-6) 0;
  border-bottom: var(--hairline) solid var(--border);
  transition: background-color var(--dur) var(--ease);
}

.index__row:hover {
  background: var(--bg-soft);
}

.index__num {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 600;
  font-size: var(--fs-200);
  letter-spacing: var(--tr-wide);
  color: var(--accent-text);
  padding-top: 0.25rem;
}

.index__icon {
  color: var(--text-muted);
  padding-top: 0.15rem;
}

.index__title {
  font-size: var(--fs-600);
  margin-bottom: var(--sp-2);
}

.index__desc {
  color: var(--text-muted);
  font-size: var(--fs-300);
  max-width: 46rem;
}

.index__more {
  margin-top: var(--sp-6);
}

/* ---------- DIFERENCIAIS ---------- */
.split {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: var(--sp-9);
  align-items: start;
}

.ticks {
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
  margin-bottom: var(--sp-7);
}

.ticks li {
  display: flex;
  align-items: flex-start;
  gap: var(--sp-3);
  font-weight: 500;
  font-size: var(--fs-400);
}

.ticks svg {
  color: var(--accent-text);
  flex: none;
  margin-top: 0.25rem;
}

.guarantee {
  background: var(--accent);
  color: var(--accent-ink);
  padding: var(--sp-7);
  display: flex;
  flex-direction: column;
}

.guarantee__icon {
  margin-bottom: var(--sp-5);
}

.guarantee__title {
  font-size: var(--fs-700);
  margin-bottom: var(--sp-3);
}

.guarantee__text {
  font-size: var(--fs-400);
  margin-bottom: var(--sp-6);
}

.guarantee__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2) var(--sp-5);
  padding-top: var(--sp-5);
  border-top: var(--hairline) solid rgba(10, 10, 10, 0.25);
  font-size: var(--fs-200);
  font-weight: 600;
  letter-spacing: 0.03em;
}

.guarantee__list li {
  position: relative;
  padding-left: var(--sp-4);
}

.guarantee__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 6px;
  height: 6px;
  background: var(--accent-ink);
}

.guarantee__link {
  margin-top: var(--sp-7);
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--fs-300);
  border-bottom: var(--rule-weight) solid var(--accent-ink);
  padding-bottom: 0.2rem;
  width: fit-content;
  transition: opacity var(--dur) var(--ease);
}

.guarantee__link:hover {
  opacity: 0.7;
}

/* ---------- PROCESSO ---------- */
.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-6);
  counter-reset: step;
}

.step {
  position: relative;
  padding-top: var(--sp-6);
  border-top: var(--hairline) solid var(--border-strong);
}

.step__num {
  display: block;
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 700;
  font-size: var(--fs-800);
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--accent-text);
  margin-bottom: var(--sp-3);
}

.step__title {
  font-size: var(--fs-500);
  margin-bottom: var(--sp-2);
}

.step__desc {
  color: var(--text-muted);
  font-size: var(--fs-300);
}

/* ---------- DEPOIMENTOS ---------- */
.quotes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-6);
}

.quote {
  display: flex;
  flex-direction: column;
  gap: var(--sp-5);
  padding-top: var(--sp-5);
  border-top: var(--rule-weight) solid var(--accent);
}

.quote__text {
  color: var(--text);
  font-size: var(--fs-400);
  flex-grow: 1;
}

.quote__by {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.quote__name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--fs-300);
}

.quote__role {
  color: var(--text-muted);
  font-size: var(--fs-200);
}

/* ---------- RESPONSIVO ---------- */
@media (max-width: 1024px) {
  .hero__grid {
    gap: var(--sp-8);
  }

  .split {
    gap: var(--sp-7);
  }

  .quotes {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .hero__grid,
  .split {
    grid-template-columns: 1fr;
  }

  .steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .hero__grid {
    padding-top: var(--sp-9);
    padding-bottom: var(--sp-9);
  }

  .stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat:nth-child(odd) {
    border-left: 0;
  }

  .stat:nth-child(n + 3) {
    border-top: var(--hairline) solid var(--border);
  }

  .index__row {
    grid-template-columns: 2.25rem 1fr;
    gap: var(--sp-4);
  }

  .index__icon {
    display: none;
  }
}

@media (max-width: 520px) {
  .steps {
    grid-template-columns: 1fr;
  }

  .hero__trust {
    gap: var(--sp-3);
    flex-direction: column;
  }
}
</style>
