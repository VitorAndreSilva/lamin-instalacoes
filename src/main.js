import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import { initTheme } from './composables/theme'

initTheme()
const app = createApp(App)

app.mount('#app')
