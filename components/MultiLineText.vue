<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
const multiline = computed(() => {
  let idx = -1;
  return props.text.split(" ").reduce((prev, line, index, arr) => {
    if (line.length < 3 && arr[index + 1]) {
      prev.push(line + " " + arr[index + 1]);
      idx = index + 1;
    } else if (idx !== index) {
      prev.push(line);
      idx = -1;
    }
    return prev;
  }, []);
});
</script>
<template>
  <ul
    class="uppercase font-head font-bold text-8xl md:text-[160px] flex flex-col mesh select-none text-transparent bg-clip-text"
  >
    <li v-for="(line, l) in multiline" :key="l" class="h-20 md:h-[128px]">
      {{ line }}
    </li>
  </ul>
</template>
<style lang="postcss">
.mesh-bg {
  background-image: url("/img/stark_sirio.jpg");

  background-size: 400%;

  animation: gradient 15s ease infinite;
}
.mesh {
  background-color: #26004d;
  background-size: 400%;
  background-image: radial-gradient(
      at 53% 70%,
      rgb(250, 61, 61) 0,
      hsla(0, 75%, 22%, 0) 50%
    ),
    radial-gradient(at 57% 76%, rgb(244, 113, 135) 0, hsla(0, 86%, 70%, 0) 50%),
    radial-gradient(at 85% 26%, rgb(149, 7, 83) 0, hsla(259, 88%, 57%, 0) 50%),
    radial-gradient(at 47% 13%, rgb(149, 11, 43) 0, hsla(347, 81%, 14%, 0) 50%);

  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 10%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 90%;
  }
}
</style>
