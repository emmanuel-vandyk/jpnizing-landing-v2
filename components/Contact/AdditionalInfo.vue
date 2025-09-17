<template>
  <div
    class="w-full max-w-4xl bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-lg border-2 border-primary-200"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="text-center">
      <h2 class="text-3xl font-bold mb-6">
        ¿Por qué elegir Japonizando América?
      </h2>
      <div class="grid md:grid-cols-3 gap-6 mt-8">
        <div class="flex flex-col items-center">
          <div
            class="w-12 h-12 rounded-full bg-gradient-to-b from-primary-200 to-primary-300 flex items-center justify-center mb-4"
          >
            <UIcon name="i-heroicons-academic-cap" class="size-6 text-white" />
          </div>
          <h4 class="font-bold mb-2">Profesores Expertos</h4>
          <p class="text-sm font-serif text-gray-600">
            Aprende con instructores nativos y certificados
          </p>
        </div>
        <div class="flex flex-col items-center">
          <div
            class="w-12 h-12 rounded-full bg-gradient-to-b from-primary-200 to-primary-300 flex items-center justify-center mb-4"
          >
            <UIcon name="i-heroicons-users" class="size-6 text-white" />
          </div>
          <h4 class="font-bold mb-2">Grupos Pequeños</h4>
          <p class="text-sm font-serif text-gray-600">
            Atención personalizada en cada clase
          </p>
        </div>
        <div class="flex flex-col items-center">
          <div
            class="w-12 h-12 rounded-full bg-gradient-to-b from-primary-200 to-primary-300 flex items-center justify-center mb-4"
          >
            <UIcon name="i-heroicons-clock" class="size-6 text-white" />
          </div>
          <h4 class="font-bold mb-2">Horarios Flexibles</h4>
          <p class="text-sm font-serif text-gray-600">
            Adapta el aprendizaje a tu ritmo de vida
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Call to Action -->
  <div class="mt-12 text-center">
    <p class="text-lg font-serif text-gray-600 mb-6">
      ¿Listo para comenzar tu aventura con el japonés?
    </p>
    <AnimationButton
      to="/courses"
      variant="solid"
      color="neutral"
      size="xl"
      class="px-12 py-4 text-lg"
    >
      <span class="relative z-10">Ver Nuestros Programas</span>
    </AnimationButton>
  </div>
</template>
