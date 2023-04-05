<script setup>
const { data } = await useAsyncData(() => {
  return queryContent("/azienda/").find();
});
</script>
<template>
  <ul class="grid grid-cols-2 gap-4">
    <li
      v-for="post in data"
      :key="post._id"
      class="p-4 prose border-2 rounded-md"
    >
      <h2>
        {{ post.title }}
      </h2>
      <p>{{ post.description }}</p>
      <NuxtLink :to="post._path">Scopri</NuxtLink>
    </li>
  </ul>
</template>
