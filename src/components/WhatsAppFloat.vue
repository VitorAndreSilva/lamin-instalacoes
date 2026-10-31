<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { contacts } from '../content'
import { wa } from './icons'

const visible = ref(false)
let observer
onMounted(() => {
  const intersections = new Map()
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) intersections.set(entry.target, entry.isIntersecting)
      visible.value = intersections.size === 3 && ![...intersections.values()].some(Boolean)
    },
    { rootMargin: '-96px 0px 0px 0px' },
  )
  for (const element of document.querySelectorAll('#top, #contato, footer'))
    observer.observe(element)
})
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <a
    v-show="visible"
    class="whatsapp-float"
    :href="contacts.whatsapp"
    target="_blank"
    rel="noopener"
    aria-label="Conversar no WhatsApp"
    title="Conversar no WhatsApp"
  >
    <span aria-hidden="true" v-html="wa"></span>
  </a>
</template>

<style scoped>
.whatsapp-float {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 50;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: var(--accent-ink);
  background: var(--accent);
  border: 1px solid var(--accent-ink);
}
.whatsapp-float:hover {
  background: var(--accent-hover);
}
.whatsapp-float :deep(svg) {
  width: 22px;
  height: 22px;
}
/* Só ocupar a margem externa, quando ela comporta o botão sem cobrir conteúdo. */
@media (max-width: 1279px) {
  .whatsapp-float {
    display: none;
  }
}
</style>
