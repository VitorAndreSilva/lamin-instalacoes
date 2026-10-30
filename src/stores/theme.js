import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const stored = localStorage.getItem('theme')

  const isDark = ref(stored ? stored === 'dark' : true)

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

  return { isDark, toggle }
})
