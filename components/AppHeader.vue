<script setup>
const drawer = ref(false);
</script>
<template>
  <header class="w-full h-16 bg-white bg-opacity-10 backdrop-blur">
    <div class="container h-full flex gap-8 items-center justify-between">
      <app-logo />
      <nav class="flex-grow hidden md:block">
        <ContentNavigation v-slot="{ navigation }">
          <ul class="flex gap-4">
            <li v-for="link of navigation" :key="link._path">
              <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
            </li>
          </ul>
        </ContentNavigation>
      </nav>
      <language-switch class="hidden md:block" />
      <button>
        <app-icon icon="menu"></app-icon>
      </button>
      <AppDrawer v-model="drawer" />
    </div>
  </header>
</template>
