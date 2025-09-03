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
   <div class="flex flex-col items-center lg:items-end py-3 text-right bg-default/80">
       <UNavigationMenu
      :items="items"
      variant="pill"
      highlight-color="primary"
      :ui="{
        link: 'text-md font-semibold'
      }"
      color="onDark"
    />
    <p class="font-semibold text-md px-2.5">
      Copyright © {{ new Date().getFullYear() }}
    </p>
   </div>
</template>
