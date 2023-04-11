<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "xl",
    validation: (v) => ["xs", "sm", "md", "lg", "xl"].includes(v),
  },
  weight: {
    type: String,
    default: "bold",
    validation: (v) => ["light", "regular", "bold"].includes(v),
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
const cssClasses = computed(() => {
  const _w = props.weight ? props.weight : "bold";
  const _s = props.size ?? "xl";
  return {
    [`weight-${_w}`]: true,
    [`font-size-${_s}`]: true,
  };
});
</script>
<template>
  <ul
    class="flex flex-col text-transparent uppercase select-none font-head mesh bg-clip-text"
  >
    <li v-for="(line, l) in multiline" :key="l" class="" :class="cssClasses">
      {{ line }}
    </li>
  </ul>
</template>
<style lang="postcss">
.mesh-bg {
  /* background-image: url("/img/stark_sirio.jpg"); */

  background-size: 400%;

  animation: gradient 15s ease infinite;
}
.mesh {
  letter-spacing: 0.5rem;
  background-color: #26004d;
  background-size: 400%;
  background-image: radial-gradient(
    at 53% 70%,
    theme("colors.primary.200") 0,
    theme("colors.primary.700") 50%
  );

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

.font-size-xs {
}
.font-size-sm {
}
.font-size-md {
  @apply text-3xl md:text-6xl lg:text-9xl h-7 md:h-12 lg:h-24;
}
.font-size-lg {
}
.font-size-xl {
  @apply text-7xl md:text-9xl lg:text-[160px] h-20 md:h-24 lg:h-32;
}
</style>
