<script setup>
defineProps({
  showMap: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "",
  },
});
const form = reactive({
  name: "",
  email: "",
  message: "",
});
</script>
<template>
  <div class="grid md:grid-cols-5 contact-form">
    <div v-if="showMap" class="order-last md:order-first md:col-span-2">
      <Map></Map>
    </div>
    <div class="md:col-span-3">
      {{ title }}
      <form name="contact" netlify>
        <label>
          <span>Nome</span>
          <input v-model="form.name" type="text" required />
        </label>
        <label>
          <span>Email</span>
          <input
            v-model="form.email"
            type="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </label>
        <label>
          <span>Messaggio</span>
          <textarea v-model="form.message" required></textarea>
        </label>
        <button to="#" class="text-primary-900 bg-primary">Invia</button>
      </form>
    </div>
  </div>
  <!-- <div class="contact-form">
    <div class="info">
      <h2>I nostri<br />contatti</h2>
    </div>
    <form action="">
      <label>
        <span>Nome</span>
        <input v-model="form.name" type="text" />
      </label>
      <label>
        <span>Email</span>
        <input v-model="form.email" type="text" />
      </label>
      <label>
        <span>Messaggio</span>
        <textarea v-model="form.message"></textarea>
      </label>
      <button to="#" class="text-white bg-primary">Invia</button>
    </form>
  </div> -->
</template>
<style lang="postcss" scoped>
.contact-form {
  @apply my-12 w-full shadow-lg;
  .info {
    @apply bg-primary text-white px-3 !important;
    h2 {
      @apply text-white;
    }
  }
  form {
    @apply p-4;
    label {
      @apply flex flex-col gap-2 mb-4;
      input,
      textarea {
        @apply border border-primary-500;
      }
    }
    button {
      @apply px-8 py-1 text-primary-800 bg-primary hover:bg-primary-600 transition-colors;
    }
    &:invalid button {
      @apply cursor-not-allowed opacity-30;
    }
  }
  label:focus-within:after {
    position: absolute;
    content: "";
    transform: scale(1);
    transition: all 3s ease-in-out;
  }
  label {
    position: relative;
    &:after {
      border: 2px solid theme("colors.primary.600");
      bottom: 0;
      transition: all 3s ease-in-out;
      width: 100%;
      transform: scale(0);
    }
    input,
    textarea {
      padding: 0.5rem 1rem;
    }
  }
}
</style>
