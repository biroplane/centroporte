<script setup>
defineProps({
  imeage: {
    type: String,
    default: "",
  },
  odd: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="grid grid-cols-4 gap-8">
    <div class="w-full aspect-square" :class="{ 'order-last': odd }">IMG</div>
    <div class="w-full col-span-3">
      <slot></slot>
    </div>
  </div>
</template>
