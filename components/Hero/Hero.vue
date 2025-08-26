<template>
  <div class="flex flex-col items-center min-h-screen bg-cover bg-no-repeat bg-overlay mask-b-from-80% bg-blend-overlay w-full">
    <div class="flex flex-col-reverse lg:flex-row justify-center items-center min-h-screen w-full bg-default/90 lg:bg-default/60">
      <div class="flex items-center lg:py-16 text-center lg:min-h-screen" data-aos="fade-up" data-duration="3000">
        <div class="flex w-full justify-center lg:p-8">
          <div class="flex flex-col justify-center items-start w-full p-4">
            <h1 class="text-primary text-start text-6xl font-bold italic mb-6 drop-shadow-lg">
              日本化するアメリカ
            </h1>
            <h2 class="text-4xl font-bold uppercase">Aprende Japonés de Forma Divertida</h2>
            <p class="text-start text-xl mb-8 max-w-3xl hyphens-auto">
              Únete a nuestros talleres de conversación y kanji,
              siguenos en nuestras redes sociales
              y descubre por qué somos la mejor opción para aprender japonés.
            </p>
            <UButton 
              icon="i-heroicons-academic-cap"
              variant="solid" 
              color="primary"
              size="xl"
              leading
              class="flex items-center w-fit mx-auto lg:mx-0 px-8 py-4 font-extrabold shadow-2xl rounded-full uppercase tracking-widest">
              Empieza aquí
            </UButton>
          </div>
        </div>
      </div>
      <LazyNuxtImg 
        src="/images/japanizing-logo.png" alt="Logo" format="webp" quality="80" class="size-80 sm:size-4/12"
        hydrate-on-visible />
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
  .bg-overlay {
    @apply flex items-center justify-between w-full;
    background-size: 400px, 500px, 400px, 500px;
    background-position: top left, bottom left, top right, bottom right;
    background-repeat: no-repeat, no-repeat;
    background-image: 
    url("/images/flowers.png"),
    url("/images/flowers.png"),
    url("/images/flowers-right.png"),
    url("/images/flowers-right.png");
  }
</style>
