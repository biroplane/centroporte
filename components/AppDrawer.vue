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
const close = () => {
  setTimeout(() => (newVal.value = false), 200);
};
</script>
<template>
  <transition name="curtain">
    <div
      v-if="newVal"
      class="fixed top-0 right-0 z-50 w-screen h-screen px-8 py-4 shadow-xl md:w-96 md:right-0 drawer"
    >
      <div class="flex mb-12">
        <AppLogo class="flex-grow" />
        <button @click="newVal = false">
          <app-icon icon="x"></app-icon>
        </button>
      </div>
      <ContentNavigation v-slot="{ navigation }">
        <ul class="px-">
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path" @click="close">{{
              link.title
            }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </div>
  </transition>
</template>
<style scoped lang="postcss">
.drawer {
  background-image: linear-gradient(
    to bottom,
    theme("colors.white") 50%,
    theme("colors.neutral.200") 50%
  ) !important;
  background-size: 400% 200%;
}

@keyframes curtain-in {
  0% {
    /* transform: translatey(100vh); */
    background-position: 0% 0%;
  }

  100% {
    background-position: 200% 200%;
    /* transform: translatey(-100vh); */
  }
}

.curtain-leave-to,
.curtain-enter-from {
  transform: translateX(100px);
  opacity: 0;
  animation: curtain-in 0.3s ease-in-out infinite alternatereverse;

  .drawer {
    border: 20px solid blue;
  }
}

.curtain-enter-active,
.curtain-leave-active {
  transition: transform 0.42s cubic-bezier(1, 0.5, 0.8, 1),
    opacity 0.5s ease-in-out 0.1s;
  animation: curtain-in 0.3s ease-in-out infinite alternate;
}
</style>
