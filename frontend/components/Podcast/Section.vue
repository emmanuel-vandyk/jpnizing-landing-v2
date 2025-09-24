<template>
  <div class="min-h-screen py-16 w-full">
    <UContainer
      id="podcast"
      class="flex flex-col items-center justify-center w-full pt-12 mx-auto"
    >
      <div class="flex w-full text-center lg:mb-12 p-4 mx-auto" data-aos="fade-up">
        <div class="flex flex-col justify-center items-center w-full mx-auto">
          <h2 class="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase max-w-full lg:max-w-3xl leading-tight mb-4 lg:mb-6 break-words hyphens-auto">
            Podcast en Japonés
          </h2>
            <p class="text-center text-base sm:text-lg lg:text-xl lg:mt-4 mb-6 lg:mb-8 max-w-full lg:max-w-5xl font-serif leading-relaxed break-words hyphens-auto">
            Mejora tu comprensión auditiva con nuestro podcast semanal.
            Historias, entrevistas y lecciones en japonés real.
          </p>
        </div>
      </div>
      <UCard
        variant="solid"
        class="w-fit rounded-xl transition-colors"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <template #default>
          <LazyNuxtImg
            src="/images/img-podcast.png"
            alt="Podcast en Japonés"
            format="webp"
            class="bg-cover w-lg h-full rounded-t-xl"
          />
        </template>
        <template #footer>
          <div class="h-16">
            <p class="text-xl lg:text-2xl font-bold -mt-8">Podcast en Japonés</p>
          </div>
        </template>
      </UCard>
    </UContainer>
  </div>
</template>
