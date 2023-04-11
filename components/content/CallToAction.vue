<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="py-12 bg-neutral-100">
    <h2>{{ title }}</h2>
    <div></div>
    <NuxtLink to="/contatti" class="button-link"
      >Richiedi subito un preventivo</NuxtLink
    >
  </div>
</template>
