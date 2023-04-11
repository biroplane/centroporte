<script setup>
defineProps({
  hideFont: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <nuxt-link to="/">
    <div class="w-full h-full">
      <img src="/logo.png" class="object-contain h-12" />
    </div>
  </nuxt-link>
</template>
