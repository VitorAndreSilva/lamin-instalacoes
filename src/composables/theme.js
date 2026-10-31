import { ref } from 'vue'

const theme = ref('light')
let preference = null

function readPreference() {
  try {
    const stored = localStorage.getItem('theme')
    return stored === 'dark' || stored === 'light' ? stored : null
  } catch {
    return null
  }
}

function apply(value) {
  theme.value = value
  document.documentElement.dataset.theme = value
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', value === 'dark' ? '#191b16' : '#f6f5ee')
}

export function initTheme() {
  const system = window.matchMedia('(prefers-color-scheme: dark)')
  preference = readPreference()
  const sync = () => apply(preference ?? (system.matches ? 'dark' : 'light'))
  sync()
  system.addEventListener('change', sync)
  window.addEventListener('storage', (event) => {
    if (event.key === 'theme' || event.key === null) {
      preference = readPreference()
      sync()
    }
  })
}

export function useTheme() {
  function toggle() {
    preference = theme.value === 'dark' ? 'light' : 'dark'
    apply(preference)
    try {
      localStorage.setItem('theme', preference)
    } catch {
      /* A escolha ainda funciona sem armazenamento. */
    }
  }
  return { theme, toggle }
}
