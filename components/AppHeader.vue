<template>
  <div class="flex items-center justify-around w-full">
    <UNavigationMenu
      :items="items"
      class="data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-72"
      highlight
      color="neutral"
      variant="pill"
    />
  </div>
</template>

<script setup lang="ts">
const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Inicio",
      icon: "i-heroicons-home-20-solid",
      to: "/",
    },
    {
      label: "Cursos",
      icon: "i-heroicons-book-open-20-solid",
    },
  ],
  [
    {
      label: "Ingresar",
      icon: "i-heroicons-arrow-right-on-rectangle-20-solid",
    },
  ],
]);
</script>
