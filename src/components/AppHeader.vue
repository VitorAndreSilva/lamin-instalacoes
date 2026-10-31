<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { nav, contacts } from '../content'
import AppLogo from './AppLogo.vue'

const menuOpen = ref(false)
const menuButton = ref(null)
let desktopQuery
function closeMenu() {
  menuOpen.value = false
}
function onKeydown(event) {
  if (event.key === 'Escape' && menuOpen.value) {
    closeMenu()
    menuButton.value?.focus()
  }
}
function onFocusout(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) closeMenu()
}
onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  desktopQuery = window.matchMedia('(min-width: 901px)')
  desktopQuery.addEventListener('change', closeMenu)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  desktopQuery?.removeEventListener('change', closeMenu)
})
</script>

<template>
  <header class="header" @focusout="onFocusout">
    <div class="container header__inner">
      <AppLogo @click="closeMenu" />
      <button
        ref="menuButton"
        class="burger"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="nav-menu"
        :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? 'Fechar' : 'Menu' }}
        <span aria-hidden="true">{{ menuOpen ? '−' : '+' }}</span>
      </button>
      <nav
        id="nav-menu"
        class="nav"
        :class="{ 'nav--open': menuOpen }"
        aria-label="Navegação principal"
      >
        <a v-for="link in nav" :key="link.to" class="nav__link" :href="link.to" @click="closeMenu">
          {{ link.label }}
        </a>
        <a
          class="btn btn--primary nav__cta"
          :href="contacts.whatsapp"
          target="_blank"
          rel="noopener"
          @click="closeMenu"
        >
          Pedir orçamento <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-5);
  min-height: var(--header-h);
}
.nav {
  display: flex;
  align-items: center;
  gap: var(--sp-6);
}
.nav__link {
  display: flex;
  align-items: center;
  min-height: 44px;
  color: var(--text-muted);
  font-size: var(--fs-small);
}
.nav__link:hover {
  color: var(--text);
  text-decoration: underline;
  text-underline-offset: 5px;
}
.nav__cta {
  padding-inline: 1rem;
}
.burger {
  display: none;
  min-height: 44px;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--border-strong);
  background: transparent;
  color: var(--text);
  font-size: var(--fs-small);
  gap: var(--sp-4);
  align-items: center;
}
@media (max-width: 900px) {
  .burger {
    display: inline-flex;
  }
  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: none;
    padding: var(--sp-4) var(--gutter) var(--sp-5);
    background: var(--bg);
    border-bottom: 1px solid var(--border-strong);
    max-height: calc(100dvh - var(--header-h));
    overflow-y: auto;
  }
  .nav--open {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
  .nav__link {
    padding-block: 0.75rem;
    border-bottom: 1px solid var(--border);
  }
  .nav__cta {
    margin-top: var(--sp-4);
  }
}
</style>
