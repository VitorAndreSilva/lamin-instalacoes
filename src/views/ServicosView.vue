<script setup>
import { useContactsStore } from '../stores/contacts'
import BrandIcon from '../components/BrandIcon.vue'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'

const contacts = useContactsStore()

const services = [
  {
    title: 'Instalações Elétricas Residenciais',
    desc: 'Tomadas, interruptores, pontos de luz e circuitos internos instalados com total segurança.',
    icon: 'bolt',
  },
  {
    title: 'Instalações Elétricas Comerciais',
    desc: 'Lojas, escritórios e empresas com projetos elétricos sob medida e conformidade com as normas.',
    icon: 'panel',
  },
  {
    title: 'Quadros de Distribuição',
    desc: 'Montagem, reforma e dimensionamento de quadros, disjuntores e proteções DR e DPS.',
    icon: 'breaker',
  },
  {
    title: 'Iluminação',
    desc: 'Projetos de iluminação interna e externa: luminárias, spots, trilhos e piso. Tecnologia LED.',
    icon: 'bulb',
  },
  {
    title: 'Chuveiros e Eletrodomésticos',
    desc: 'Instalação de chuveiros, torneiras elétricas, pontos de força para geladeira, fogão e máquinas.',
    icon: 'heater',
  },
  {
    title: 'Ventiladores e Exaustores',
    desc: 'Instalação e troca de ventiladores de teto, exaustores e arandelas com acabamento impecável.',
    icon: 'fan',
  },
  {
    title: 'Reformas e Aterramentos',
    desc: 'Reforma de instalações antigas, aterramento, malha elétrica e adequação às normas (NBR).',
    icon: 'ground',
  },
  {
    title: 'Laudos e Inspeções',
    desc: 'Inspeção elétrica, medições e laudos de eficiência e segurança para imóveis e empresas.',
    icon: 'clipboard',
  },
  {
    title: 'Emergências Elétricas',
    desc: 'Curto-circuito, falta de energia, cheiro de queimado e panes. Atendimento rápido de urgência.',
    icon: 'alert',
  },
]

const included = [
  'Materiais de qualidade',
  'Equipe uniformizada',
  'Orçamento por escrito',
  'Garantia do serviço',
  'Limpeza ao finalizar',
  'Atendimento no prazo',
]
</script>

<template>
  <main id="conteudo">
    <PageHero
      label="Serviços"
      title="O que fazemos, do ponto de luz ao quadro geral"
      lead="Especialistas em instalações elétricas residenciais e comerciais. Da tomada ao quadro geral, cuidamos de tudo para você."
    />

    <section class="section">
      <div class="container">
        <ul class="catalogo">
          <li v-for="(s, i) in services" :key="s.title" class="catalogo__item">
            <div class="catalogo__head">
              <span class="catalogo__num">{{ String(i + 1).padStart(2, '0') }}</span>
              <BrandIcon class="catalogo__icon" :name="s.icon" :size="22" />
              <h2 class="catalogo__title">{{ s.title }}</h2>
            </div>
            <p class="catalogo__desc">{{ s.desc }}</p>
            <a class="link-arrow" :href="contacts.whatsapp" target="_blank" rel="noopener">
              Solicitar orçamento
              <BrandIcon name="arrow" :size="16" />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section class="section included surface-brand">
      <div class="container included__grid">
        <div class="included__body">
          <span class="included__label">Transparência</span>
          <h2 class="included__title">Tudo <span class="text-accent">incluído</span></h2>
          <p class="included__text">
            Sem letras miúdas. Todo serviço sai com as mesmas condições, para você comparar qualquer
            orçamento com o nosso.
          </p>
        </div>

        <ul class="included__list">
          <li v-for="item in included" :key="item">
            <BrandIcon name="check" :size="16" />
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <CtaBand
      title="Não encontrou o que precisa?"
      text="Fale com a gente pelo WhatsApp. Se for instalação elétrica, nós resolvemos."
    />
  </main>
</template>

<style scoped>
/* ---------- CATÁLOGO ---------- */
.catalogo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: var(--sp-9);
}

.catalogo__item {
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
  padding: var(--sp-6) 0 var(--sp-7);
  border-top: var(--hairline) solid var(--border);
}

.catalogo__head {
  display: grid;
  grid-template-columns: 2.75rem 1.75rem 1fr;
  align-items: center;
  gap: var(--sp-3);
}

.catalogo__num {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 600;
  font-size: var(--fs-200);
  letter-spacing: var(--tr-wide);
  color: var(--accent-text);
}

.catalogo__icon {
  color: var(--text-muted);
}

.catalogo__title {
  font-size: var(--fs-600);
  line-height: 1.25;
}

.catalogo__desc {
  color: var(--text-muted);
  font-size: var(--fs-300);
  max-width: 34rem;
}

.catalogo__item .link-arrow {
  margin-top: var(--sp-2);
}

/* ---------- INCLUSO ---------- */
.included {
  background: var(--surface-brand);
  color: var(--text);
  border-top: var(--rule-weight) solid var(--accent);
}

.included__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-9);
  align-items: center;
}

.included__label {
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
  margin-bottom: var(--sp-5);
}

.included__title {
  font-size: var(--fs-800);
  color: var(--text);
}

.included :deep(.text-accent) {
  color: var(--accent-on-brand);
}

.included__text {
  margin-top: var(--sp-4);
  color: var(--text-muted);
  max-width: 32rem;
}

.included__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  border-top: var(--hairline) solid var(--border);
}

.included__list li {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  padding: var(--sp-4) 0;
  border-bottom: var(--hairline) solid var(--border);
  font-size: var(--fs-300);
  font-weight: 500;
  color: var(--text);
}

.included__list li:nth-child(odd) {
  padding-right: var(--sp-5);
}

.included__list li:nth-child(even) {
  padding-left: var(--sp-5);
  border-left: var(--hairline) solid var(--border);
}

.included__list svg {
  color: var(--accent-on-brand);
  flex: none;
}

@media (max-width: 900px) {
  .catalogo,
  .included__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .included__list {
    grid-template-columns: 1fr;
  }

  .included__list li:nth-child(even) {
    padding-left: 0;
    border-left: 0;
  }

  .included__list li:nth-child(odd) {
    padding-right: 0;
  }
}
</style>
