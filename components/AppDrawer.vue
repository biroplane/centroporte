<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["update:modelValue"]);
const newVal = computed({
  get: () => props.modelValue,
  set: (v) => emits("update:modelValue", v),
});
</script>
<template>
  <transition name="slide">
    <div
      v-if="newVal"
      class="w-screen md:w-96 h-screen fixed bg-white shadow-xl top-0 left-0 md:right-0 overflow-y-auto p-6 z-50"
    >
      <div class="flex mb-12">
        <AppLogo class="flex-grow" />
        <button @click="newVal = false">
          <app-icon icon="x"></app-icon>
        </button>
      </div>
      <ContentNavigation v-slot="{ navigation }">
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </div>
  </transition>
</template>
