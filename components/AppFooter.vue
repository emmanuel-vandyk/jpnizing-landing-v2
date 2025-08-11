<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[] = [
  {
    label: "Powered by CoursePro / Desarrollado por CoursePro",
    to: "https://www.coursepro.app",
    target: "_blank",
  },
];
</script>

<template>
  <div class="py-4">
    <UNavigationMenu :items="items" variant="link" />
    <p class="text-white text-sm px-2.5">
      Copyright © {{ new Date().getFullYear() }}
    </p>
  </div>
</template>
