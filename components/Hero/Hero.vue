<template>
  <div class="flex flex-col items-center min-h-screen bg-cover bg-no-repeat " :style="backgroundStyles">
    <LazyNuxtImg 
      src="/images/client-logo-japan.png" 
      alt="Logo" 
      format="webp"
      quality="100"
      hydrate-on-visible  
    />
  </div>
</template>
<script setup lang="ts">
const img = useImage();

const backgroundStyles = computed(() => {
  const url = img("/images/background-image.jpg", {
    width: 1820,
    quality: 100,
    format: "webp",
  });
  return { backgroundImage: `url(${url})` };
});
</script>
