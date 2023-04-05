<template>
  <footer class="w-full py-12 text-white bg-primary-900">
    <div class="container grid gap-4 md:grid-cols-4">
      <div class="col-span-full">
        <AppLogo></AppLogo>
      </div>
      <div class="md:col-span-2">
        <h3>Centro porte e finestre</h3>
        <span>Strada tal dei tali</span>
      </div>
      <div class="">
        <ContentNavigation v-slot="{ navigation }">
          <ul class="flex flex-col gap-2">
            <li v-for="link of navigation" :key="link._path">
              <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
            </li>
          </ul>
        </ContentNavigation>
      </div>
      <div class="">
        <h3>Trovaci sui social</h3>
        <ul class="flex gap-4">
          <li>
            <Icon name="uil:whatsapp" size="24"></Icon>
          </li>
          <li><Icon name="uil:facebook" size="24"></Icon></li>
          <li><Icon name="uil:twitter" size="24"></Icon></li>
          <li><Icon name="uil:instagram" size="24"></Icon></li>
          <li><Icon name="uil:linkedin" size="24"></Icon></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<style scoped lang="postcss">
h3 {
  @apply text-xl font-bold mb-4;
}
</style>
