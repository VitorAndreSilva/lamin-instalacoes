<script setup>
defineProps({
  size: {
    type: [Number, String],
    default: 40,
  },
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    role="img"
    :aria-hidden="title ? undefined : 'true'"
    :aria-label="title || undefined"
  >
    <g transform="translate(32 0) skewX(-11.31) translate(-32 0)" fill="currentColor">
      <path d="M32 4 L56 60 H44 L32 26 L20 60 H8 Z" />
      <path d="M27.1 40 H36.9 L39.8 48 H24.2 Z" />
    </g>
  </svg>
</template>
