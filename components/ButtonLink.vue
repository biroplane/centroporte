<script setup>
defineProps({
  to: {
    type: [String, Object, Array],
    default: "",
    required: true,
  },
});
</script>
<template>
  <nuxt-link
    :to="to"
    v-bind="$attrs"
    class="px-8 py-2 mt-4 inline-block shadow-md border border-gray-300 font-bold bg-white bg-opacity-20 backdrop-blur-md text-gray-800 leading-tight rounded hover:bg-gray-200 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-300 active:shadow-lg transition duration-150 ease-in-out"
  >
    <slot></slot>
  </nuxt-link>
</template>
