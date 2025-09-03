<template>
      <div class="flex w-full justify-center py-16 text-center">
        <div
            class="bg-default lg:rounded-2xl p-8 border mask-clip-border w-fit"
        >
            <h2 class="text-3xl font-bold mb-4">
            ¿Listo para comenzar tu aventura japonesa?
            </h2>
            <p class="mb-8 max-w-2xl mx-auto text-xl/6 font-serif line-clamp-2">
            Únete a miles de estudiantes que ya están aprendiendo japonés de
            manera efectiva y divertida.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton 
                icon="i-heroicons-academic-cap"
                leading 
                variant="solid" 
                color="neutral"
                size="xl"
                class="bg-gray-200 lg:mx-0 flex items-center w-fit rounded-full border text-lg">
                Inscribirse Ahora
            </UButton>
            <UButton
                color="primary"
                size="xl"
                class="px-8 border-white/30 text-white rounded-full shadow-2xl hover:outline text-lg"
            >
                Más Información
            </UButton>
            </div>
        </div>
    </div>
</template>