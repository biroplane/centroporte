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
    class="text-transparent font-head fat mesh bg-clip-text"
    :class="{ 'font-black': level <= 2 }"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>
<!-- @vue-ignore-->
<style lang="postcss" scoped>
.fat {
  font-size: calc(5rem - v-bind("style"));
  line-height: calc(4.8rem - v-bind("style"));
  @apply uppercase;
}
@media screen(md) {
  .fat {
    font-size: calc(6rem - v-bind("style"));
    line-height: calc(5.75rem - v-bind("style"));
    @apply uppercase;
  }
}
@media screen(lg) {
  .fat {
    font-size: calc(8rem - v-bind("style"));
    line-height: calc(7.75rem - v-bind("style"));
    @apply uppercase;
  }
}
@media screen {
}
</style>
