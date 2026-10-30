<script setup>
import { useContactsStore } from '../stores/contacts'
import BrandIcon from '../components/BrandIcon.vue'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'

const contacts = useContactsStore()

const channels = [
  {
    name: 'WhatsApp',
    description: 'Resposta rápida e orçamento direto pelo celular.',
    href: contacts.whatsapp,
    icon: 'whatsapp',
    action: 'Conversar agora',
  },
  {
    name: 'Facebook',
    description: 'Acompanhe novidades, promoções e avaliações.',
    href: contacts.facebook,
    icon: 'facebook',
    action: 'Ver página',
  },
  {
    name: 'Instagram',
    description: 'Veja nossos trabalhos mais recentes no feed.',
    href: contacts.instagram,
    icon: 'instagram',
    action: 'Seguir perfil',
  },
]

const faqs = [
  {
    q: 'Como funciona o orçamento?',
    a: 'Você descreve o serviço pelo WhatsApp, com fotos se puder. Enviamos uma proposta clara e sem compromisso, normalmente em até 1 hora.',
  },
  {
    q: 'Vocês atendem empresas e residências?',
    a: 'Sim! Atendemos tanto residências quanto empresas, com equipe capacitada para os dois cenários.',
  },
  {
    q: 'Qual a garantia do serviço?',
    a: 'Todos os nossos serviços possuem garantia. Se algo não estiver perfeito, retornamos e corrigimos sem custo adicional.',
  },
  {
    q: 'Atendem em até quanto tempo?',
    a: 'Em casos de urgência (curto-circuitos, falta de energia e panes) chegamos em até 2 horas dentro da região. Para agendamentos, respeitamos o horário combinado.',
  },
]
</script>

<template>
  <main id="conteudo">
    <PageHero
      label="Contato"
      title="Fale conosco"
      lead="Escolha o seu canal preferido. Será um prazer atender você."
    />

    <section class="section">
      <div class="container">
        <header class="section-head">
          <span class="section-head__label">Canais</span>
          <h2 class="section-head__title">Por onde <span class="text-accent">começar</span></h2>
        </header>

        <ul class="channels">
          <li v-for="c in channels" :key="c.name" class="channel">
            <BrandIcon class="channel__icon" :name="c.icon" :size="24" />
            <div class="channel__body">
              <h3 class="channel__name">{{ c.name }}</h3>
              <p class="channel__desc">{{ c.description }}</p>
            </div>
            <a class="link-arrow channel__action" :href="c.href" target="_blank" rel="noopener">
              {{ c.action }}
              <BrandIcon name="arrow" :size="16" />
            </a>
          </li>
        </ul>

        <div class="channels__extra">
          <div class="channels__item">
            <BrandIcon name="phone" :size="20" />
            <div>
              <span class="channels__label">Telefone</span>
              <a
                class="channels__value"
                :href="`https://wa.me/${contacts.phone}`"
                target="_blank"
                rel="noopener"
              >
                {{ contacts.phoneDisplay }}
              </a>
            </div>
          </div>
          <div class="channels__item">
            <BrandIcon name="pin" :size="20" />
            <div>
              <span class="channels__label">Área de atendimento</span>
              <span class="channels__value">Brasília e região · Atendimento de urgência 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <header class="section-head">
          <span class="section-head__label">Dúvidas</span>
          <h2 class="section-head__title">Perguntas <span class="text-accent">frequentes</span></h2>
        </header>

        <div class="faq">
          <details v-for="f in faqs" :key="f.q" class="faq__item" name="faq">
            <summary class="faq__q">
              <span>{{ f.q }}</span>
              <span class="faq__marker" aria-hidden="true"></span>
            </summary>
            <p class="faq__a">{{ f.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <CtaBand
      title="Prefere um atendimento imediato?"
      text="Chame no WhatsApp e fale com um especialista agora mesmo."
    />
  </main>
</template>

<style scoped>
/* ---------- CANAIS ---------- */
.channels {
  border-top: var(--hairline) solid var(--border);
}

.channel {
  display: grid;
  grid-template-columns: 3rem 1fr auto;
  align-items: center;
  gap: var(--sp-5);
  padding: var(--sp-5) 0;
  border-bottom: var(--hairline) solid var(--border);
}

.channel__icon {
  color: var(--accent-text);
}

.channel__name {
  font-size: var(--fs-600);
  margin-bottom: 0.15rem;
}

.channel__desc {
  color: var(--text-muted);
  font-size: var(--fs-300);
}

.channel__action {
  white-space: nowrap;
}

.channels__extra {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sp-6);
  margin-top: var(--sp-7);
  padding-top: var(--sp-6);
  border-top: var(--rule-weight) solid var(--accent);
}

.channels__item {
  display: flex;
  align-items: flex-start;
  gap: var(--sp-4);
}

.channels__item svg {
  color: var(--accent-text);
  flex: none;
  margin-top: 0.15rem;
}

.channels__label {
  display: block;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--fs-200);
  letter-spacing: var(--tr-wide);
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.2rem;
}

.channels__value {
  font-size: var(--fs-400);
  color: var(--text);
  display: inline-block;
  padding-block: 0.15rem;
}

a.channels__value:hover {
  color: var(--accent-text);
}

/* ---------- FAQ ---------- */
.faq {
  max-width: 48rem;
  border-top: var(--hairline) solid var(--border);
}

.faq__item {
  border-bottom: var(--hairline) solid var(--border);
}

.faq__q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-5);
  padding: var(--sp-5) 0;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--fs-500);
  list-style: none;
}

.faq__q::-webkit-details-marker {
  display: none;
}

.faq__marker {
  position: relative;
  flex: none;
  width: 14px;
  height: 14px;
}

.faq__marker::before,
.faq__marker::after {
  content: '';
  position: absolute;
  background: var(--accent);
  transition: transform var(--dur) var(--ease);
}

.faq__marker::before {
  left: 0;
  right: 0;
  top: 6px;
  height: 2px;
}

.faq__marker::after {
  top: 0;
  bottom: 0;
  left: 6px;
  width: 2px;
}

.faq__item[open] .faq__marker::after {
  transform: scaleY(0);
}

.faq__a {
  padding-bottom: var(--sp-5);
  color: var(--text-muted);
  font-size: var(--fs-400);
  max-width: 42rem;
}

@media (max-width: 700px) {
  .channel {
    grid-template-columns: 2.5rem 1fr;
    gap: var(--sp-4);
  }

  .channel__action {
    grid-column: 2;
  }

  .channels__extra {
    grid-template-columns: 1fr;
    gap: var(--sp-5);
  }
}
</style>
