<script setup>
import AppHeader from './components/AppHeader.vue'
import AppHero from './components/AppHero.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
</script>

<template>
  <a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
  <AppHeader />

  <main id="conteudo">
    <AppHero />
  </main>

  <WhatsAppFloat />
</template>
