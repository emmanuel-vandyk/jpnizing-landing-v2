<template>
    <div 
      class="min-h-screen py-16 w-full"
    >
      <UContainer id="podcast" class="flex flex-col items-center justify-center w-full">
        <div 
          class="text-center mb-12"
          data-aos="fade-down-right"
        >
          <h2 class="text-5xl font-bold mb-6">Podcast en Japonés</h2>
          <p class="text-xl max-w-2xl mx-auto">
            Mejora tu comprensión auditiva con nuestro podcast semanal. Historias,
            entrevistas y lecciones en japonés real.
          </p>
        </div>
        <UCard 
          variant="solid" 
          class="w-fit rounded-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <template #default>
            <LazyNuxtImg 
              src="/images/podcast.png" 
              alt="Podcast en Japonés" 
              format="webp" placeholder="blur" 
              class="bg-cover w-lg   h-full rounded-t-xl" 
             />
          </template>
          <template #footer>
            <div class="h-16">
              <p class="text-xl font-bold -mt-8">Podcast en Japonés</p>
            </div>
          </template>
        </UCard>
      </UContainer>
      </div>
</template>