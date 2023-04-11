<script setup>
const drawer = ref(false);
const { navigation } = useContent();
</script>
<template>
  <header
    class="w-full h-28 bg-primary-900 backdrop-blur fixed z-[999] shadow-xl text-primary-50"
  >
    <div class="container flex items-center justify-between h-full gap-8">
      <AppLogo />
      <nav class="flex-grow hidden md:block">
        <ul class="flex gap-6">
          <li v-for="nav in navigation" :key="nav._path">
            <div v-if="nav.children" class="relative nested">
              <NuxtLink :to="nav._path" active-class="active">{{
                nav.title
              }}</NuxtLink>
              <ul class="absolute p-4 shadow-lg bg-primary-900">
                <li v-for="child in nav.children" :key="child._id">
                  <NuxtLink
                    :to="child._path"
                    class="whitespace-nowrap hover:underline"
                    active-class="active"
                    >{{ child.title }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <NuxtLink v-else :to="nav._path" active-class="active">{{
              nav.title
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <language-switch class="hidden md:block" />
      <button class="md:hidden" @click="drawer = !drawer">
        <app-icon icon="menu"></app-icon>
      </button>
      <AppDrawer v-model="drawer" class="" />
    </div>
  </header>
</template>
<style lang="postcss">
.link_page {
  @apply relative;
  &::after {
    content: "";
    @apply w-0 absolute transition-all duration-300 bottom-0 left-0 -mb-3 h-full border-red-500 border-b-2 origin-center;
  }
  &:hover {
    &::after {
      @apply w-full right-0;
    }
  }
}

.nested {
  transition: visibility 0s, opacity 2s ease-in-out;
  ul {
    transition: visibility 0s, opacity 0.2s ease-in-out, transform 0.3s ease-out;

    /* display: none; */
    visibility: visible;
    opacity: 0;
    transform: translateY(20px);
    min-width: theme("spacing.48");
    li {
      @apply py-1;
    }
  }
  &:hover ul {
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
  }
}
.active {
  @apply font-bold text-primary-700;
}
</style>
