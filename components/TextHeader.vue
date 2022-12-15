<script setup>
const props = defineProps({
  level: {
    type: String,
    default: "2",
    required: true,
    validator: (v) => parseInt(v) <= 6,
  },
});
const h = computed(() => `h${props.level}`);
const style = computed(() => props.level + "rem");
</script>
<template>
  <component
    :is="h"
    class="font-head fat mesh text-transparent bg-clip-text"
    :class="{ 'font-black': level <= 2 }"
  >
    <slot></slot>
  </component>
</template>
<style lang="postcss" scoped>
.fat {
  font-size: calc(8rem - v-bind("style"));
  line-height: calc(7rem - v-bind("style"));
  @apply uppercase;
}
</style>
