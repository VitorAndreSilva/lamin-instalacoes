<script setup>
import { useThemeStore } from '../stores/theme'
import BrandIcon from './BrandIcon.vue'

const theme = useThemeStore()
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="theme.isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
    :aria-pressed="theme.isDark"
    @click="theme.toggle"
  >
    <BrandIcon :name="theme.isDark ? 'sun' : 'moon'" :size="18" />
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: var(--hairline) solid var(--border-strong);
  border-radius: var(--r-none);
  background: transparent;
  color: var(--text);
  transition:
    border-color var(--dur) var(--ease),
    color var(--dur) var(--ease),
    background-color var(--dur) var(--ease);
}

.theme-toggle:hover {
  border-color: var(--accent);
  color: var(--accent-text);
  background: var(--accent-soft);
}
</style>
