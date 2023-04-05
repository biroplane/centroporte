<script setup>
defineProps({
  to: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <NuxtLink :to="to" class="button-link">{{ title }}</NuxtLink>
</template>
