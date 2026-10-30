<script setup>
import { useThemeStore } from '../stores/theme'

const theme = useThemeStore()
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="theme.isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
    :aria-pressed="theme.isDark"
    @click="theme.toggle()"
  >
    <svg
      v-if="theme.isDark"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <path
        d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      />
    </svg>
    <svg
      v-else
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
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
  border-radius: var(--r);
  background: transparent;
  color: var(--text);
  transition:
    border-color var(--dur) var(--ease),
    color var(--dur) var(--ease);
}

.theme-toggle:hover {
  border-color: var(--accent);
  color: var(--accent-text);
}
</style>
