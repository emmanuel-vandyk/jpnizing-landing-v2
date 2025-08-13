<template>
  <UContainer id="items" class="py-16 min-h-screen">
    <h2 class="text-4xl font-bold text-center mb-12 text-white">
      Nuestros talleres
    </h2>
    <div class="grid md:grid-cols-2 gap-8 w-full place-items-center">
      <UCard
        v-for="item in items"
        :key="item.title"
        variant="solid"
        class="backdrop-blur-sm bg-white/10 border-white/20 w-lg"
      >
        <template #header>
          <div class="flex justify-center items-center gap-4">
            <div
              class="w-12 h-12 rounded-full flex items-center justify-center"
              :style="{ backgroundColor: item.color }"
            >
                <UIcon
                :name="
                  item.title === 'Taller de Conversación'
                  ? 'i-heroicons-chat-bubble-left-ellipsis'
                  : item.title === 'Taller de Kanji'
                    ? 'i-heroicons-book-open'
                    : 'i-heroicons-question-mark-circle'
                "
                class="w-6 h-6 text-white"
                />
            </div>
            <h3 class="text-2xl font-bold text-white">{{ item.title }}</h3>
          </div>
        </template>
        <template #default>
          <div class="w-full h-full">
            <p class="text-white/90 mb-4">
            {{ item.description }}
          </p>
          <ul class="space-y-2 text-white/80">
            <li
              v-for="(features, index) in item.features"
              :key="index"
              class="flex items-center gap-2"
            >
              <span class="w-2 h-2 bg-purple-400 rounded-full" />
              {{ features }}
            </li>
          </ul>
          </div>
        </template>
        <template #footer>
            <UButton color="amber" class="flex w-full text-center justify-center hover:outline hover:bg-amber-400" size="lg">
            Inscribirse al taller
            </UButton>
        </template>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup>

const items = [
  {
    title: "Taller de Conversación",
    color: "#EC4899",
    description:
      "Practica tu japonés hablado en un ambiente relajado y divertido. Mejora tu fluidez y confianza conversando sobre temas interesantes de la cultura japonesa.",
    features: [
      "Grupos pequeños para atención personalizada",
      "Profesores nativos japoneses",
      "Temas culturales actuales",
    ],
  },
  {
    title: "Taller de Kanji",
    color: "#9333EA",
    description:
      "Domina los caracteres japoneses de manera efectiva y divertida. Aprende técnicas de memorización y comprende el significado cultural de cada kanji.",
    features: [
      "Método de aprendizaje visual",
      "Técnicas de memorización efectivas",
      "Historia y cultura detrás de cada kanji",
    ],
  },
];
</script>
