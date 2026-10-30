<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    default: 24,
  },
  stroke: {
    type: [Number, String],
    default: 1.5,
  },
})

/* Conjunto único de ícones de linha, viewBox 24x24, terminais retos.
   Ícones de rede social são preenchidos (fill) por não possuírem versão
   de traço coerente com o restante do sistema. */
const ICONS = {
  bolt: '<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/>',
  panel: '<path d="M3 21h18"/><rect x="5" y="3" width="14" height="14" rx="1"/>',
  breaker: '<rect x="7" y="2" width="10" height="20" rx="1"/><path d="M12 9l-2 3h4l-2 3"/>',
  bulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5"/>',
  heater:
    '<path d="M12 22v-4"/><path d="M7 8V3"/><path d="M17 8V3"/><path d="M5.5 12a6.5 6.5 0 0 1 13 0"/><path d="M18 8v4a6 6 0 0 1-12 0V8"/>',
  fan: '<path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"/><path d="M12 12v.01"/>',
  ground:
    '<path d="M12 3v12"/><path d="M7 8l5-5 5 5"/><path d="M3 21h18"/><path d="M5 17h2v2H5z"/>',
  clipboard:
    '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M17 17h-3a1 1 0 0 0-1 1"/><path d="M17 12h-3"/>',
  alert:
    '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  hand: '<path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 9V5a2 2 0 0 0-4 0v10l-1.4-1.4a1.8 1.8 0 0 0-2.6 2.4L5.6 21a5 5 0 0 0 3.6 1.9H13a5 5 0 0 0 4.6-3l1.8-5a2 2 0 0 0-1.9-2.9z"/>',
  heart:
    '<path d="M19 14c1.5-1.5 3-3 3-5a3 3 0 0 0-3-3 3 3 0 0 0-5-2 3 3 0 0 0-4 4V8a3 3 0 0 0-2 5c0 .6.4 1 .4 1"/><path d="M13 17v2a3 3 0 0 0 6 0v-4a1.5 1.5 0 0 0-3 0"/>',
  whatsapp:
    '<path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.57-.35z"/><path d="M12.04 2a9.65 9.65 0 0 0-8.36 14.47L2.1 21.9l5.5-1.44A9.6 9.6 0 0 0 12.04 22 9.65 9.65 0 1 0 12.04 2zm0 17.25a7.68 7.68 0 0 1-3.92-1.07l-.28-.17-3.26.85.87-3.18-.18-.3a7.65 7.65 0 1 1 6.77 3.87z"/>',
  facebook:
    '<path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.3-.04-1.3-.13-2.45-.13-2.4 0-4.05 1.47-4.05 4.17v2.26H7.5V14h2.7v8h3.3z"/>',
  instagram:
    '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/>',
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  phone:
    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect x="2" y="4" width="20" height="16"/><path d="m2 7 10 6 10-6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
  check: '<path d="m4 12 6 6L20 6"/>',
  pin: '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
}

const FILLED = new Set(['whatsapp', 'facebook', 'instagram'])

const markup = computed(() => ICONS[props.name] || '')
const isFilled = computed(() => FILLED.has(props.name))
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    :fill="isFilled ? 'currentColor' : 'none'"
    :stroke="isFilled ? 'none' : 'currentColor'"
    :stroke-width="stroke"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    v-html="markup"
  />
</template>
