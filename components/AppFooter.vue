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
    class="flex flex-col items-center w-full h-full max-h-56 bg-overlay bg-default/50 mask-t-from-90%"
  >
    <div class="flex flex-col justify-center items-center w-full h-full mx-auto">
      <UNavigationMenu
        :items="items"
        variant="pill"
        highlight-color="primary"
        :ui="{
          link: 'flex justify-center font-semibold p-0 text-center',
          linkLabel: 'text-sm md:text-lg break-words',
          linkTrailingIcon: 'hidden',
          childLinkLabel: 'w-full break-words', 
        }"
        color="neutral"
      />
      <p class="font-semibold text-sm md:text-lg px-2.5">
        Copyright © {{ new Date().getFullYear() }}
      </p>
    </div>
  </div>
</template>
<style lang="css" scoped>
.bg-overlay {
  height: 100%;
  background-size: 20% auto, 25% auto, 20% auto, 25% auto; 
  background-position:
    top left,
    bottom left,
    top right,
    bottom right;
  background-repeat: no-repeat;
  background-image:
    url("/images/flowers.png"), url("/images/flowers.png"),
    url("/images/flowers-right.png"), url("/images/flowers-right.png");
}
</style>
