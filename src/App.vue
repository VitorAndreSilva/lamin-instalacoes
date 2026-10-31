<script setup>
import AppHeader from './components/AppHeader.vue'
import AppHero from './components/AppHero.vue'
import ServicesSection from './components/ServicesSection.vue'
import StepsSection from './components/StepsSection.vue'
import AboutSection from './components/AboutSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <a class="skip-link" href="#conteudo">Ir para o conteúdo</a>

  <AppHeader />

  <main id="conteudo">
    <AppHero />
    <ServicesSection />
    <StepsSection />
    <AboutSection />
    <TestimonialsSection />
    <FaqSection />
    <ContactSection />
  </main>

  <AppFooter />
</template>
