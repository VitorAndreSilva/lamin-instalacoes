import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const stored = localStorage.getItem('theme')

  const isDark = ref(stored ? stored === 'dark' : systemDark)

  function apply() {
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  function toggle() {
    isDark.value = !isDark.value
  }

  watch(
    isDark,
    (val) => {
      localStorage.setItem('theme', val ? 'dark' : 'light')
      apply()
    },
    { immediate: true },
  )

  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  mq.addEventListener?.('change', (e) => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
    }
  })

  return { isDark, toggle }
})
