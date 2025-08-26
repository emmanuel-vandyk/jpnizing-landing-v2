<template>
  <UContainer id="items" class="flex flex-col justify-center items-center py-16 min-h-screen mt-32">
    <div 
      class="py-2 mb-8 w-full"
      data-aos="fade-up"
      data-aos-duration="950"
    >
      <div class="flex flex-col justify-start items-center w-full h-full">
        <h2 
          class="text-5xl font-bold text-center w-full lg:py-4"
        >
          Conóce nuestros talleres
        </h2>
      </div>
    </div>  
    <div class="grid lg:grid-cols-2 gap-8 w-full place-items-center lg:place-items-between">
      <WorkshopsCard  v-for="item in items" :key="item.title" :item="item" />
    </div>
  </UContainer>
</template>

<script setup>

const items = [
  {
    title: "Taller de Conversación",
    color: "#ff51b3",
    description:
      "Practica tu japonés hablado en un ambiente relajado y divertido. Mejora tu fluidez y confianza conversando sobre temas interesantes de la cultura japonesa.",
    features: [
      "Grupos pequeños para atención personalizada",
      "Profesores nativos japoneses",
      "Temas culturales actuales",
    ],
    src: "/images/conversation.png",
    dataAos: "fade-right",
    dataAosDuration: "1000"
  },
  {
    title: "Taller de Kanji",
    color: "#ff51b3",
    description:
      "Domina los caracteres japoneses de manera efectiva y divertida. Aprende técnicas de memorización y comprende el significado cultural de cada kanji.",
    features: [
      "Método de aprendizaje visual",
      "Técnicas de memorización efectivas",
      "Historia y cultura detrás de cada kanji",
    ],
    src: "/images/kanji.png",
    dataAos: "fade-left",
    dataAosDuration: "1000"
  },
];
</script>
