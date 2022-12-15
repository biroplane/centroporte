<template>
  <ContentNavigation v-slot="{ navigation }">
    <ul class="flex flex-col gap-4">
      <li v-for="link of navigation" :key="link._path">
        <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
      </li>
    </ul>
  </ContentNavigation>
</template>
