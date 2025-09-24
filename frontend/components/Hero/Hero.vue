<template>
  <div
    class="flex flex-col items-center min-h-screen bg-cover bg-no-repeat bg-overlay mask-b-from-80% bg-blend-overlay w-full"
  >
    <div
      class="flex flex-col-reverse lg:flex-row justify-center items-center min-h-screen w-full bg-default/90 lg:bg-default/60"
    >
      <div
        class="flex items-center justify-center lg:py-16 text-center lg:min-h-screen mt-20 lg:mt-0"
        data-aos="fade-up"
        data-duration="3000"
      >
        <div class="flex w-full justify-center lg:p-8">
          <div class="flex flex-col justify-center items-start sm:items-center lg:items-start w-full p-4">
            <h1
              class="text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-comic font-semibold italic mb-4 lg:mb-6 drop-shadow-lg leading-normal lg:leading-tight break-words hyphens-auto pr-4"
            >
              日本化するアメリカ
            </h1>
            <h2 class="text-start sm:text-center lg:text-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase max-w-full lg:max-w-3xl leading-tight mb-4 lg:mb-6 break-words hyphens-auto">
              Aprende Japonés de Forma Divertida
            </h2>
            <p class="text-start sm:text-center lg:text-start text-base sm:text-lg lg:text-2xl lg:mt-4 mb-6 lg:mb-8 max-w-full lg:max-w-5xl font-serif leading-relaxed break-words hyphens-auto">
              Únete a nuestros talleres de conversación y kanji, siguenos en
              nuestras redes sociales y descubre por qué somos la mejor opción
              para aprender japonés.
            </p>
            <AnimationButton
              to="https://cursos.japonizandoamerica.com/course/view.php?id=16"
              variant="solid"
              color="neutral"
              size="xl"
              leading
              class="flex justify-center w-full sm:w-auto sm:h-14 lg:h-full text-sm sm:text-base lg:text-lg relative overflow-hidden font-extrabold uppercase tracking-wide px-4 sm:px-6 lg:px-8 py-4">
              <span class="relative z-10">Prueba nuestro curso gratuito</span>
            </AnimationButton>
          </div>
        </div>
      </div>
      <LazyNuxtImg
        src="/images/japanizing-logo.png"
        alt="Logo"
        format="webp"
        quality="80"
        class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
        hydrate-on-visible
      />
    </div>
  </div>
</template>
<style lang="css" scoped>
/* Background overlay flowers - Responsive */
.bg-overlay {
  max-width: 100vw;
  background-size: 
    200px 300px, 
    250px 350px, 
    200px 300px, 
    200px 300px;
  background-position:
    top left,
    bottom left,
    top right,
    bottom right;
  background-repeat: no-repeat;
  background-image:
    url("/images/flowers.png"), 
    url("/images/flowers.png"),
    url("/images/flowers-right.png"), 
    url("/images/flowers-right.png");
}

/* Media queries para mejor control del background */
@media (min-width: 640px) {
  .bg-overlay {
    background-size: 
      300px 400px, 
      350px 450px, 
      300px 400px, 
      300px 400px;
  }
}

@media (min-width: 1024px) {
  .bg-overlay {
    background-size: 
      400px 500px, 
      500px 600px, 
      400px 500px, 
      400px 500px;
  }
}
</style>
