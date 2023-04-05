<script setup>
const { data } = await useAsyncData(() => {
  return queryContent("/news/").find();
});
</script>
<template>
  <div>
    <div v-for="post in data" :key="post._id" class="my-4 border">
      <h2>{{ post.title }}</h2>

      <p>{{ post.description }}</p>
      <NuxtLink :to="post._path">Read more..</NuxtLink>
    </div>
  </div>
</template>
