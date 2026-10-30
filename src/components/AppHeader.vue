<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useContactsStore } from '../stores/contacts'
import ThemeToggle from './ThemeToggle.vue'
import AppLogo from './AppLogo.vue'

const contacts = useContactsStore()
const route = useRoute()

const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]

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
})
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="container nav__inner">
      <AppLogo />

      <nav
        id="nav-menu"
        class="nav__links"
        :class="{ 'nav__links--open': menuOpen }"
        aria-label="Navegação principal"
      >
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav__link"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>

        <a
          class="nav__cta btn btn-primary"
          :href="contacts.whatsapp"
          target="_blank"
          rel="noopener"
          @click="closeMenu"
        >
          Orçamento
        </a>
      </nav>

      <div class="nav__actions">
        <ThemeToggle />
        <button
          class="burger"
          :class="{ 'burger--open': menuOpen }"
          :aria-expanded="menuOpen"
          aria-controls="nav-menu"
          :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
          @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg);
  border-bottom: var(--hairline) solid transparent;
  transition: border-color var(--dur) var(--ease);
}

.nav--scrolled {
  border-bottom-color: var(--border);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-5);
  min-height: var(--nav-height);
}

.nav__links {
  display: flex;
  align-items: center;
  gap: var(--sp-6);
}

.nav__link {
  position: relative;
  padding: 0.5rem 0;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--fs-200);
  letter-spacing: var(--tr-wide);
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
  height: var(--rule-weight);
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--dur) var(--ease);
}

.nav__link:hover {
  color: var(--text);
}

.nav__link:hover::after,
.nav__link.router-link-active::after {
  transform: scaleX(1);
}

.nav__link.router-link-active {
  color: var(--text);
}

.nav__cta {
  padding: 0.62rem 1.15rem;
  font-size: var(--fs-200);
  text-transform: uppercase;
  letter-spacing: var(--tr-wide);
}

.nav__actions {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  border: var(--hairline) solid var(--border-strong);
  border-radius: var(--r-none);
  background: transparent;
  padding: 11px;
}

.burger span {
  display: block;
  height: 2px;
  background: var(--text);
  transition:
    transform var(--dur) var(--ease),
    opacity var(--dur) var(--ease);
}

.burger--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.burger--open span:nth-child(2) {
  opacity: 0;
}

.burger--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 900px) {
  .burger {
    display: flex;
  }

  .nav__links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: var(--bg);
    border-bottom: var(--hairline) solid var(--border);
    padding: var(--sp-2) var(--gutter) var(--sp-5);
    transform: translateY(-6px);
    opacity: 0;
    visibility: hidden;
    transition:
      transform var(--dur) var(--ease),
      opacity var(--dur) var(--ease),
      visibility var(--dur);
  }

  .nav__links--open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav__link {
    padding: 0.95rem 0;
    border-bottom: var(--hairline) solid var(--border);
  }

  .nav__link::after {
    bottom: -1px;
    right: auto;
    width: 28px;
  }

  .nav__cta {
    margin-top: var(--sp-5);
    padding: 0.85rem 1.5rem;
  }
}
</style>
