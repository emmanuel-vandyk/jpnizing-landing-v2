<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items: NavigationMenuItem[] = [
  {
    label: "Powered by CoursePro / Desarrollado por CoursePro ❤️",

    to: "https://www.coursepro.app",
    target: "_blank",
  },
];
</script>

<template>
   <div class="flex flex-col items-end bg-white py-3 text-right">
       <UNavigationMenu
      :items="items"
      variant="pill"
      highlight-color="primary"
    />
    <p class="font-semibold text-sm px-2.5">
      Copyright © {{ new Date().getFullYear() }}
    </p>
   </div>
</template>
