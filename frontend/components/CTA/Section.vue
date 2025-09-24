<template>
  <div class="flex w-full justify-center py-16 text-center relative z-30">
    <div class="flex flex-col items-center justify-center bg-default lg:rounded-2xl p-8 border mask-clip-border w-fit mx-4">
      <h2 class="text-center text-2xl sm:text-3xl md:text-4xl font-semibold uppercase max-w-full lg:max-w-3xl leading-tight mb-4 lg:mb-6 break-words hyphens-auto">
        ¿Listo para tu aventura japonesa?
      </h2>
      <p class="text-center text-base sm:text-lg lg:text-xl lg:mt-4 mb-6 lg:mb-8 max-w-full lg:max-w-5xl font-serif leading-relaxed break-words hyphens-auto">
        Únete a miles de estudiantes que ya están aprendiendo japonés de manera
        efectiva y divertida.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <AnimationButton
          leading
          variant="solid"
          color="neutral"
          size="xl"
          class="flex justify-center w-full sm:w-auto sm:h-14 lg:h-full text-sm sm:text-base lg:text-lg relative overflow-hidden font-extrabold uppercase tracking-wide px-4 sm:px-6 lg:px-8 py-4"
          to="https://cursos.japonizandoamerica.com/login/index.php"
        >
          <span class="relative z-30 uppercase">Inscribirse Ahora</span>
        </AnimationButton>
        <AnimationButton
          color="primary"
          size="lg"
          class="flex justify-center w-full sm:w-auto sm:h-14 lg:h-full text-sm sm:text-base lg:text-lg relative overflow-hidden font-extrabold uppercase tracking-wide px-4 sm:px-6 lg:px-8 py-4"
          to="/contact"
          target="_self"
        >
          <span class="relative z-30 uppercase">Más Información</span>
        </AnimationButton>
      </div>
    </div>
  </div>
</template>
