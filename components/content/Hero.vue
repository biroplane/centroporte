<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="mb-24">
    <div class="relative z-0 w-full h-xl">
      <div class="absolute w-full h-full">
        <div class="-skew-x-6 box effect blur-sm"></div>
      </div>
      <img
        src="/img/stark_sirio.jpg"
        class="object-cover object-center w-full h-full"
      />
      <div class="absolute top-0 w-full h-full">
        <div class="container flex items-center h-full grid-cols-2">
          <div class="w-1/2">
            <text-header level="1">{{ title }}</text-header>
            <div class="text-sm md:text-base">
              <slot name="content" />
            </div>
            <!-- <NuxtLink to="/" class="button-link"> Scopri di più </NuxtLink> -->
            <slot name="cta"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="w-full h-[70vh] relative z-0">
    <div class="absolute w-full h-full">
      <div class="-skew-x-6 box effect blur-sm"></div>

    </div>
    <div
      class="relative z-40 grid h-full max-w-xs gap-8 md:grid-cols-2 md:max-w-max place-items-center"
    >

      <section class="container">
        
      </section>
    </div>
    
  </div> -->
</template>
<style lang="postcss" scoped>
.box {
  @apply absolute w-full h-full inset-0 z-0;
}
.effect {
  @apply h-full w-[65%] -ml-6 p-4 bg-white bg-opacity-50 overflow-hidden;
}

/* support backdrop-filter */
@supports (
  (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))
) {
  .effect {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
}

/* no support backdrop-filter */
@supports (
  not ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)))
) {
  .effect {
    -webkit-filter: url(#backdrop-filter-blur);
    filter: url(#backdrop-filter-blur);
  }
}

svg {
  position: absolute;
}
</style>
