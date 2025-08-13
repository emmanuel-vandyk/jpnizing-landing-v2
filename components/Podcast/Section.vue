<template>
    <div class="min-h-screen py-16 bg-fuchsia-800 w-full">
      <UContainer id="podcast" class="flex flex-col items-center justify-center w-full">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-6 text-white">Podcast en Japonés</h2>
          <p class="text-xl text-white/90 max-w-2xl mx-auto">
            Mejora tu comprensión auditiva con nuestro podcast semanal. Historias,
            entrevistas y lecciones en japonés real.
          </p>
        </div>
        <UCard variant="solid" class="w-fit rounded-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors hover:text-white">
          <template #default>
            <LazyNuxtImg 
              src="/images/podcast-japones.jpeg" 
              alt="Podcast en Japonés" 
              format="webp" placeholder="blur" 
              class="bg-cover w-92 h-full rounded-t-xl" 
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