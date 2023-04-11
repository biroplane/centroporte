<script setup>
const props = defineProps({
  path: {
    type: String,
    default: "",
    required: true,
  },
});
const { data } = await useAsyncData(() => {
  return queryContent(props.path)
    .where({ _file: { $not: { $contains: "index" } } })
    .where({ _partial: { $eq: false } })
    .find();
});

// onMounted(async ()=>{
// })
</script>
<template>
  <ul class="flex flex-col gap-12">
    <li v-for="(item, i) in data" :key="item._id">
      <div class="grid grid-cols-5 gap-8">
        <div
          class="col-span-2 aspect-square"
          :class="{ 'order-last': i % 2 == 0 }"
        >
          <img :src="item.image" class="object-cover w-full h-full" />
        </div>
        <div class="w-full col-span-3" :class="{ 'text-right': i % 2 == 0 }">
          <MultiLineText
            :text="item.title"
            weight="light"
            size="md"
          ></MultiLineText>
          <ContentRendererMarkdown :value="item"></ContentRendererMarkdown>
        </div>
      </div>
    </li>
  </ul>
</template>
<style lang="postcss" scoped>
/* h3 {
  @apply font-bold text-3xl;
} */
</style>
