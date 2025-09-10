<template>
  <div class="flex flex-col items-center min-h-screen bg-cover bg-no-repeat bg-overlay mask-b-from-80% bg-blend-overlay w-full">
    <div class="flex flex-col-reverse lg:flex-row justify-center items-center min-h-screen w-full bg-default/90 lg:bg-default/60">
      <div class="flex items-center lg:py-16 text-center lg:min-h-screen" data-aos="fade-up" data-duration="3000"> 
        <div class="flex w-full justify-center lg:p-8">
          <div class="flex flex-col justify-center items-start w-full p-4">
            <h1 class="text-start text-6xl font-comic font-bold italic mb-6 drop-shadow-lg px-2">
              日本化するアメリカ
            </h1>
            <h2 class="text-start text-5xl font-semibold uppercase max-w-3xl">Aprende Japonés de Forma Divertida</h2>
            <p class="text-start text-xl lg:mt-4 mb-8 max-w-5xl font-serif">
              Únete a nuestros talleres de conversación y kanji,
              siguenos en nuestras redes sociales
              y descubre por qué somos la mejor opción para aprender japonés.
            </p>
            <AnimationButton 
              variant="solid" 
              color="neutral"
              size="xl"
              leading
              class="h-full gap-2 text-lg relative overflow-hidden font-extrabold uppercase tracking-wide"
              >
              <span class="relative z-10">Empieza aquí</span>
            </AnimationButton>
          </div>
        </div>
      </div>
      <LazyNuxtImg 
        src="/images/japanizing-logo.png" alt="Logo" format="webp" quality="80" class="size-80 sm:size-3/12"
        hydrate-on-visible />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="css" scoped>
/* Background overlay flowers */
.bg-overlay {
  max-width: 100vw;
  background-size: 400px, 500px, 400px, 400px;
  background-position: top left, bottom left, top right, bottom right;
  background-repeat: no-repeat, no-repeat;
  background-image: 
  url("/images/flowers.png"),
  url("/images/flowers.png"),
  url("/images/flowers-right.png"),
  url("/images/flowers-right.png");
}
</style>