<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { nav, contacts } from '../content'
import AppLogo from './AppLogo.vue'
import ThemeToggle from './ThemeToggle.vue'

const scrolled = ref(false)
const menuOpen = ref(false)

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

function onScroll() {
  scrolled.value = window.scrollY > 8
}

function closeMenu() {
  menuOpen.value = false
}

function onKeydown(e) {
  if (e.key === 'Escape' && menuOpen.value) closeMenu()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <div class="container header__inner">
      <AppLogo />

      <nav
        id="nav-menu"
        class="nav"
        :class="{ 'nav--open': menuOpen }"
        aria-label="Navegação principal"
      >
        <a v-for="l in nav" :key="l.to" class="nav__link" :href="l.to" @click="closeMenu">
          {{ l.label }}
        </a>

        <a
          class="btn btn--primary nav__cta"
          :href="contacts.whatsapp"
          target="_blank"
          rel="noopener"
          @click="closeMenu"
        >
          Pedir orçamento
        </a>
      </nav>

      <div class="header__actions">
        <ThemeToggle class="header__toggle" />
        <button
          class="burger"
          type="button"
          :class="{ 'burger--open': menuOpen }"
          :aria-expanded="menuOpen"
          aria-controls="nav-menu"
          :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
          @click="menuOpen = !menuOpen"
        >
          <span class="burger__bar"></span>
          <span class="burger__bar"></span>
          <span class="burger__bar"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--surface-brand);
  --text: var(--on-brand);
  --text-muted: var(--on-brand-muted);
  --border: var(--border-on-brand);
  --border-strong: var(--border-on-brand-strong);
  --accent-text: var(--accent-on-brand);
  color: var(--text);
  border-bottom: var(--hairline) solid transparent;
  transition: border-color var(--dur) var(--ease);
}

.header--scrolled {
  border-bottom-color: var(--border);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-5);
  min-height: var(--header-h);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
}

/* ---------- Navegação ---------- */

.nav__links,
.nav {
  display: flex;
  align-items: center;
  gap: var(--sp-6);
}

.nav__link {
  position: relative;
  padding: 0.5rem 0;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--fs-micro);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color var(--dur) var(--ease);
}

.nav__link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--rule);
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--dur) var(--ease);
}

.nav__link:hover {
  color: var(--text);
}

.nav__link:hover::after {
  transform: scaleX(1);
}

.nav__cta {
  padding: 0.62rem 1.15rem;
  font-size: var(--fs-micro);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* ---------- Burguer ---------- */

.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  border: var(--hairline) solid var(--border-strong);
  border-radius: var(--r);
  background: transparent;
  padding: 11px;
}

.burger__bar {
  display: block;
  height: 2px;
  background: var(--text);
  transition:
    transform var(--dur) var(--ease),
    opacity var(--dur) var(--ease);
}

.burger--open .burger__bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.burger--open .burger__bar:nth-child(2) {
  opacity: 0;
}

.burger--open .burger__bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ---------- Menu mobile fullscreen ---------- */

@media (max-width: 900px) {
  .burger {
    display: flex;
  }

  .nav {
    position: fixed;
    inset: 0;
    z-index: -1;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: calc(var(--header-h) + var(--sp-7)) var(--gutter) var(--sp-9);
    background: var(--surface-brand);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition:
      transform var(--dur) var(--ease),
      opacity var(--dur) var(--ease),
      visibility var(--dur);
  }

  .nav--open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .nav__link {
    padding: 1.1rem 0;
    border-bottom: var(--hairline) solid var(--border);
    font-size: 1.05rem;
    letter-spacing: 0.08em;
  }

  .nav__link::after {
    bottom: -1px;
    right: auto;
    width: 28px;
  }

  .nav__cta {
    margin-top: var(--sp-6);
    padding: 0.9rem 1.5rem;
  }
}
</style>
