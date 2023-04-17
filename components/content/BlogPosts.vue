<script setup>
const props = defineProps({
  limit: {
    type: Number,
    default: 10,
  },
});
const { data } = await useAsyncData(() => {
  return queryContent("/news/")
    .where({ _partial: { $eq: false } })
    .limit(props.limit)
    .find();
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
