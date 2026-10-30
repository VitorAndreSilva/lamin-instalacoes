<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
</script>

<template>
  <a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
  <AppHeader />
  <RouterView />
  <AppFooter />
  <WhatsAppFloat />
</template>
