<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[] = [
  {
    label: "Powered by CoursePro / Desarrollado por CoursePro ❤️",

    to: "https://www.coursepro.app",
    target: "_blank",
  },
];
</script>

<template>
  <div
    class="flex flex-col items-center h-full max-h-56 bg-overlay bg-default/50 mask-t-from-86%"
  >
    <div class="flex flex-col justify-center items-center w-full h-full">
      <UNavigationMenu
        :items="items"
        variant="pill"
        highlight-color="primary"
        :ui="{
          link: 'text-md font-semibold',
        }"
        color="neutral"
      />
      <p class="font-semibold text-md px-2.5">
        Copyright © {{ new Date().getFullYear() }}
      </p>
    </div>
  </div>
</template>
<style lang="css" scoped>
/* Background overlay flowers */
.bg-overlay {
  max-width: 100vw;
  height: 100%;
  background-size: 200px, 300px, 200px, 300px;
  background-position:
    top left,
    bottom left,
    top right,
    bottom right;
  background-repeat: no-repeat, no-repeat;
  background-image:
    url("/images/flowers.png"), url("/images/flowers.png"),
    url("/images/flowers-right.png"), url("/images/flowers-right.png");
}
</style>
