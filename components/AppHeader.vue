<template>
  <div class="flex items-center justify-center w-full font-sans bg-white fixed z-50">
    <UNavigationMenu
      :items="items"
      color="neutral"
      class="data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-80 flex justify-between items-center py-3 px-8"
    />
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Inicio",
      icon: "i-heroicons-home-20-solid",
      to: "/",
    },
    {
      label: "Programas",
      icon: "i-heroicons-book-open-20-solid",
      to: "https://japonizandoamerica.com/programas"
    },
    {
      label: "Contacto",
      icon: "i-heroicons-phone-solid",
      to: "https://japonizandoamerica.com/contacto"
    }
  ],
  [
    {
      label: "Ingresar",
      icon: "i-heroicons-arrow-right-on-rectangle-20-solid",
      to: "https://cursos.japonizandoamerica.com/login/index.php"
    },
  ],
]);
</script>
