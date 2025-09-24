<template>
  <UContainer
    id="items"
    class="flex flex-col justify-center items-center py-16 min-h-screen lg:mt-28"
  >
    <div class="flex items-center py-2 mb-8 w-full" data-aos="fade-up" data-aos-duration="950">
      <div class="flex flex-col justify-center items-center text-center w-full h-full mx-auto">
        <h2 class="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase max-w-full lg:whitespace-nowrap leading-tight mb-4 lg:mb-6">
          Conóce nuestros cursos
        </h2>
      </div>
    </div>
    <div
      class="grid lg:grid-cols-2 gap-8 w-full max-w-6xl place-content-center place-items-center mx-auto"
    >
      <CoursesCard
        v-for="item in items"
        :key="item.title"
        data-aos="fade-up"
        data-aos-duration="1200"
        :item="item"
        class="w-10/12 lg:w-auto h-full"
      />
    </div>
  </UContainer>
</template>

<script setup>
const items = [
  {
    title: "Taller de Anime",
    color: "#ff51b3",
    description:
      "Si alguna vez soñaste con entender a tus personajes favoritos sin traducciones, este taller es para ti. Aquí unimos la pasión por el anime con técnicas efectivas para mejorar tu comprensión auditiva y habilidades en japonés.",
    features: [
      "🗣️ Expresiones cotidianas tal como las usan los personajes.",
      "🔄 Diferentes niveles de lenguaje: formal, casual y dialectos únicos.",
      "🎌 Cultura japonesa: gestos, valores y modismos.",
      "🎬 Práctica activa: ver anime sin subtítulos, analizar escenas y recrear diálogos.",
    ],
    src: "/images/taller-anime.webp",
    to: "https://cursos.japonizandoamerica.com/course/view.php?id=5",
  },
  {
    title: "Curso Kanji",
    color: "#ff51b3",
    description:
      "🈯 Domina los caracteres japoneses de forma efectiva y entretenida. Aprende técnicas de memorización y descubre el trasfondo cultural de cada kanji. En este taller explorarás:",
    features: [
      "🕰️ Tiempo y vida cotidiana: horas, días, estaciones, identidad y relaciones.",
      "🌿 Naturaleza y entorno: paisajes, clima, animales y fenómenos del cielo.",
      "📚 Conocimiento: conceptos básicos, matemáticas, ciencia, arte y comunicación.",
      "👤 Cuerpo, emociones y sociedad: Partes del cuerpo, posturas, emociones, voz, comunidades y vínculos familiares.",
    ],
    src: "/images/curso-kanji.webp",
    to: "https://cursos.japonizandoamerica.com/course/view.php?id=8",
  },
  {
    title: "Japonés con Animé | N5",
    color: "#ff51b3",
    description:
      "Prepárate para descubrir los secretos del hiragana, los personajes más amigables y divertidos del japonés. Aprenderás a dibujar estos símbolos mágicos y entender sus trucos sonoros. En este taller veremos:",
    features: [
      "Diptongos: la mezcla explosiva de sonidos que da ritmo al idioma.",
      "Tenten y maru: los puntitos ninja y el círculo travieso que cambian la pronunciación.",
      "Escritura práctica: ¡termina escribiendo tu nombre en hiragana como un profesional! 🎌✨",
    ],
    src: "/images/n5.webp",
    to: "https://cursos.japonizandoamerica.com/course/view.php?id=2",
  },
  {
    title: "Japonés con Animé | N4",
    color: "#ff51b3",
    description:
      "Luego del N5, el N4 es un nivel clave para consolidar las bases del japonés. Este curso te brinda herramientas prácticas en gramática, vocabulario y kanji esenciales, para desenvolverte en la vida cotidiana. Es un paso estratégico y emocionante hacia un dominio más sólido del idioma. En este curso trabajarás:",
    features: [
      "Gramática fundamental: estructuras y usos para expresarte con confianza.",
      "Vocabulario y kanji básicos: términos esenciales para la vida diaria.",
      "Práctica aplicada: situaciones reales para rendir el N4 con éxito.",
    ],
    src: "/images/n4.webp",
    to: "https://cursos.japonizandoamerica.com/course/view.php?id=3",
  },
  {
    title: "Japonés con Animé | N3",
    color: "#ff51b3",
    description:
      "Este curso es perfecto para aquellos que quieren dominar el nivel intermedio de japonés. Con este curso, podrán prepararse y presentar el JLPT N3.",
    features: [
      "Grupos pequeños para atención personalizada",
      "Profesores nativos japoneses",
      "Temas culturales actuales",
    ],
    src: "/images/n3.webp",
    to: "https://cursos.japonizandoamerica.com/course/view.php?id=12",
  },
];

const isMobile = ref(false);

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 1024;
  };
  
  checkMobile();
  window.addEventListener('resize', checkMobile);
  
  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile);
  });
});
</script>
