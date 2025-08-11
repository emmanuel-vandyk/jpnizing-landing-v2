<template>
  <main
    class="min-h-screen flex flex-col bg-center bg-cover h-full w-full justify-center font-sans"
    :style="backgroundStyles"
  >
    <div>
      <AppHeader />
    </div>
    <div class="flex-1">
      <slot />
    </div>
    <AppFooter />
  </main>
</template>
<script setup lang="ts">
const img = useImage();

const backgroundStyles = computed(() => {
  const url = img("/images/background-image.jpg", {
    width: 1200,
    quality: 90,
    format: "webp",
  });
  return { backgroundImage: `url(${url})` };
});
</script>
