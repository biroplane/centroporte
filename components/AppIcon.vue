<script setup>
import feather from "feather-icons";
defineProps({
  icon: {
    type: String,
    default: "",
    required: true,
  },
  size: {
    type: Number,
    default: 24,
  },
});
// const icona = computed(() =>
//   feather.icons[props.icon].toSvg({
//     width: props.size,
//     height: props.size,
//   })
// );
onMounted(() => {
  // const appicon = document.querySelector(".appicon");
  // appicon.innerHTML = icona.value;
  feather.replace();
});
</script>
<template>
  <i :data-feather="icon"></i>
</template>
