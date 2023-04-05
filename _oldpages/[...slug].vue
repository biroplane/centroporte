<script setup>
// import { usePageStore } from "~~/stores/pages";

// const { page } = await useContent();
// console.log("Page", page.value);

// const pageStore = usePageStore();

// pageStore.title = page.value.title;
</script>
<template>
  <main>
    <NuxtLayout>
      <ContentDoc class="prose"></ContentDoc>
    </NuxtLayout>
  </main>
</template>
