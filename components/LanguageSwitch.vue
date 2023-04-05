<script setup>
const { locale, locales } = useI18n();

const switchLocalePath = useSwitchLocalePath();
const isOpen = ref(false);

const close = () => {
  setTimeout(() => (isOpen.value = false), 200);
};
</script>

<template>
  <div class="relative" tabindex="-1">
    <button
      class="uppercase focus:border"
      @click="isOpen = !isOpen"
      @blur="close"
    >
      {{ locale }}
    </button>
    <ul v-if="isOpen" class="absolute right-0 p-3 bg-white bg-opacity-30">
      <li v-for="(loc, l) in locales" :key="l" class="uppercase">
        <nuxt-link :to="switchLocalePath(loc.code)">
          {{ loc.code }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
