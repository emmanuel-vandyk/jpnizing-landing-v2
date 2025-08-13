<template>
  <div
    class="py-16 min-h-screen bg-teal-500"
  >
    <h2 class="text-4xl font-bold text-center mb-12 text-white">
      Nuestros Sensei
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 h-full w-full place-items-center px-8">
      <TeachersSenseiCard v-for="item in items" :key="item.name" :item="item" />
    </div>
  </div>
</template>
<script setup>

const items = [
  {
    src: "/images/teacher-fran.jpg",
    description:
      "Los talleres de conversación me ayudaron enormemente a ganar confianza. Ahora puedo mantener conversaciones fluidas en japonés.",
    name: "Francisco",
    title: "Profesor de japonés",
  },
  {
    src: "/images/teacher-anto.jpg",
    description:
      "El taller de kanji es increíble. Las técnicas de memorización son muy efectivas y divertidas de aplicar.",
    name: "Anto",
    title: "Profesora de Japonés",
  },
  {
    src: "/images/teacher-dani.jpg",
    description:
      "El podcast es perfecto para practicar durante mis viajes al trabajo. El contenido es muy variado y entretenido.",
    name: "Daniela",
    title: "Profesora de japonés",
  },
];

</script>
