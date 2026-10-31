<script setup>
import { guarantees } from '../content'
</script>

<template>
  <aside class="assurances" aria-label="Condições do atendimento">
    <p>{{ guarantees.eyebrow }} em cada etapa</p>
    <ul>
      <li v-for="item in guarantees.list" :key="item">
        <span aria-hidden="true">✓</span>{{ item }}
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.assurances {
  margin-top: var(--sp-8);
  padding-top: var(--sp-5);
  border-top: 1px solid var(--border-strong);
}
.assurances p {
  font-weight: 500;
  font-size: var(--fs-small);
  margin-bottom: var(--sp-3);
}
.assurances ul {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-3) var(--sp-7);
  color: var(--text-muted);
  font-size: var(--fs-small);
}
.assurances li {
  display: flex;
  gap: var(--sp-2);
}
.assurances li span {
  color: var(--accent-text);
}
@media (max-width: 700px) {
  .assurances ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--sp-3);
  }
}
@media (max-width: 360px) {
  .assurances ul {
    grid-template-columns: 1fr;
  }
}
</style>
