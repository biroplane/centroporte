<script setup>
import { usePageStore } from "~~/stores/pages";

// const { page } = useContent();
// console.log("Page", page.value);

const pageStore = usePageStore();
pageStore.title = "Centro Porte E finestre trinitapoli";
definePageMeta({
  layout: "grid",
});
</script>
<template>
  <div class="">
    <NuxtLayout>
      <div class="container relative grid grid-cols-4 mt-6">
        <div class="col-span-3">
          <ContentDoc class="prose"></ContentDoc>
        </div>
        <nav class="sticky"></nav>
      </div>
    </NuxtLayout>
  </div>
</template>
