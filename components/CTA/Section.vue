<template>
  <div class="flex w-full justify-center py-16 text-center relative z-30">
    <div class="bg-default lg:rounded-2xl p-8 border mask-clip-border w-fit">
      <h2 class="text-3xl font-bold mb-4">
        ¿Listo para comenzar tu aventura japonesa?
      </h2>
      <p class="mb-8 max-w-2xl mx-auto text-xl/6 font-serif line-clamp-2">
        Únete a miles de estudiantes que ya están aprendiendo japonés de manera
        efectiva y divertida.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <AnimationButton
          leading
          variant="solid"
          color="neutral"
          size="xl"
          class="w-fit text-lg relative z-30"
          to="https://cursos.japonizandoamerica.com/login/index.php"
        >
          <span class="relative z-30">Inscribirse Ahora</span>
        </AnimationButton>
        <AnimationButton
          color="primary"
          size="xl"
          class="text-lg"
          to="/contact"
          target="_self"
        >
          <span class="relative z-30">Más Información</span>
        </AnimationButton>
      </div>
    </div>
  </div>
</template>
