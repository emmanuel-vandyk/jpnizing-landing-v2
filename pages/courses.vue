<template>
  <div class="min-h-screen">
    <UContainer
      class="flex flex-col justify-center items-center py-16 min-h-screen mt-32"
    >
      <!-- Header Section -->
      <div class="py-2 mb-8 w-full">
        <div class="flex flex-col justify-start items-center w-full h-full">
          <h2 class="text-5xl font-bold text-center w-full lg:py-4">
            Nuestros cursos
          </h2>
          <p
            class="text-xl text-center mt-4 font-serif text-gray-600 max-w-3xl"
          >
            Descubre todos nuestro programa de cursos de japonés diseñados para
            diferentes niveles e intereses. Desde principiantes hasta avanzados,
            tenemos el programa perfecto para ti.
          </p>
        </div>
      </div>

      <!-- Courses Grid -->
      <div
        class="grid lg:grid-cols-2 gap-8 w-full max-w-7xl place-items-center"
        style="grid-template-rows: repeat(auto-fit, minmax(400px, 1fr))"
      >
        <CoursesCard
          v-for="item in paginatedCourses.items"
          :key="item.title"
          :item="item"
          class="w-10/12 h-full"
        />
      </div>

      <!-- Pagination -->
      <Pagination
        v-if="paginatedCourses.totalPages > 1"
        :current-page="paginatedCourses.currentPage"
        :total-pages="paginatedCourses.totalPages"
        :total-items="paginatedCourses.totalItems"
        :has-next="paginatedCourses.hasNext"
        :has-prev="paginatedCourses.hasPrev"
        @prev="prevPage"
        @next="nextPage"
        @go-to-page="goToPage"
      />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { CourseItem } from "~/types/pagination";
import { usePagination } from "~/composables/usePagination";

// SEO
useSeoMeta({
  title: "Programas - Japonizando América",
  ogTitle: "Programas - Japonizando América",
  description:
    "Descubre todos nuestros cursos de japonés: desde nivel básico N5 hasta avanzado N3, talleres especializados y cursos preparatorios para el JLPT.",
  ogDescription:
    "Descubre todos nuestros cursos de japonés: desde nivel básico N5 hasta avanzado N3, talleres especializados y cursos preparatorios para el JLPT.",
  ogImage: "/images/japanizing-logo.png",
  twitterCard: "summary_large_image",
});

// Course data
const allCourses: CourseItem[] = [
  {
    title: "Japonés con Anime | N5 - Período 1",
    level: "N5",
    period: "1",
    description:
      "Prepárate para descubrir los secretos del hiragana, los personajes más amigables y divertidos del japonés. Aprenderás a dibujar estos símbolos mágicos y entender sus trucos sonoros.",
    features: [
      "🔤 Hiragana completo: domina los 46 caracteres básicos",
      "🎵 Diptongos: la mezcla explosiva de sonidos que da ritmo al idioma",
      "📝 Tenten y maru: los puntitos ninja y el círculo travieso que cambian la pronunciación",
      "✍️ Escritura práctica: ¡termina escribiendo tu nombre en hiragana como un profesional! 🎌✨",
    ],
    src: "/images/n5.webp",
    dataAos: "fade-left",
    dataAosDuration: "1000",
  },
  {
    title: "Japonés con Anime | N5 - Período 2",
    level: "N5",
    period: "2",
    description:
      "Continuamos con el emocionante mundo del katakana y comenzamos a explorar los primeros kanjis. Perfecto para consolidar las bases del japonés.",
    features: [
      "🔠 Katakana completo: aprende a escribir palabras extranjeras",
      "🈯 Primeros kanji: descubre los caracteres más importantes",
      "🗣️ Vocabulario básico: palabras esenciales para la vida cotidiana",
      "📚 Gramática fundamental: estructuras básicas del japonés",
    ],
    src: "/images/n5-2.webp",
    dataAos: "fade-right",
    dataAosDuration: "1200",
  },
  {
    title: "Japonés con Anime | N5 - Período 3",
    level: "N5",
    period: "3",
    description:
      "Completa tu preparación para el nivel N5 con gramática avanzada, más kanji y práctica intensiva para el examen JLPT.",
    features: [
      "📖 Kanji N5 completo: domina todos los caracteres del nivel",
      "🔧 Gramática avanzada N5: estructuras complejas y sus usos",
      "🎯 Preparación JLPT: técnicas y estrategias para el examen",
      "💬 Conversación práctica: aplica todo lo aprendido en situaciones reales",
    ],
    src: "/images/n5-3.webp",
    dataAos: "fade-left",
    dataAosDuration: "1400",
  },
  {
    title: "Japonés con Anime | N4",
    level: "N4",
    description:
      "Luego del N5, el N4 es un nivel clave para consolidar las bases del japonés. Este curso te brinda herramientas prácticas en gramática, vocabulario y kanji esenciales, para desenvolverte en la vida cotidiana.",
    features: [
      "📚 Gramática fundamental: estructuras y usos para expresarte con confianza",
      "🈯 Vocabulario y kanji básicos: términos esenciales para la vida diaria",
      "🎯 Práctica aplicada: situaciones reales para rendir el N4 con éxito",
      "🎌 Cultura japonesa: comprende el contexto cultural del idioma",
    ],
    src: "/images/n4.webp",
    dataAos: "fade-right",
    dataAosDuration: "1000",
  },
  {
    title: "Japonés con Anime | N3",
    color: "#ff51b3",
    level: "N3",
    description:
      "Este curso es perfecto para aquellos que quieren dominar el nivel intermedio de japonés. Con este curso, podrán prepararse y presentar el JLPT N3.",
    features: [
      "👥 Grupos pequeños para atención personalizada",
      "🇯🇵 Profesores nativos japoneses",
      "📰 Temas culturales actuales",
      "🎭 Expresiones idiomáticas y lenguaje natural",
    ],
    src: "/images/n3.webp",
    dataAos: "fade-left",
    dataAosDuration: "1200",
  },
  {
    title: "Kanji, Cultura y Tradiciones Japonesas",
    description:
      "Sumérgete en el fascinante mundo de los kanji y descubre las tradiciones milenarias de Japón. Un viaje cultural completo que enriquecerá tu comprensión del idioma.",
    features: [
      "🈯 Kanji avanzados: historia y significado profundo",
      "🏮 Tradiciones japonesas: festivales, ceremonias y costumbres",
      "🎨 Arte y caligrafía: expresión artística del idioma",
      "🍵 Cultura contemporánea: Japón moderno y sus tradiciones",
    ],
    src: "/images/kanji-cultura-tradicion.webp",
    dataAos: "fade-right",
    dataAosDuration: "1400",
  },
  {
    title: "Curso Preparatorio JLPT N5",
    description:
      "Preparación intensiva para el examen oficial JLPT N5. Técnicas específicas, simulacros y estrategias para aprobar con confianza.",
    features: [
      "📝 Simulacros reales: práctica con exámenes anteriores",
      "⏰ Gestión del tiempo: estrategias para optimizar tu rendimiento",
      "🎯 Técnicas específicas: métodos probados para cada sección",
      "📊 Seguimiento personalizado: evalúa tu progreso constantemente",
    ],
    src: "/images/jlpt-n5.webp",
    dataAos: "fade-left",
    dataAosDuration: "1000",
  },
  {
    title: "Curso Preparatorio JLPT N4",
    description:
      "Domina las habilidades necesarias para superar el JLPT N4 con nuestro curso preparatorio especializado.",
    features: [
      "📚 Material actualizado: recursos basados en los últimos exámenes",
      "🔍 Análisis detallado: comprende cada tipo de pregunta",
      "💪 Práctica intensiva: ejercicios específicos para cada área",
      "🎓 Certificación garantizada: metodología con alta tasa de éxito",
    ],
    src: "/images/jlpt-n4.webp",
    dataAos: "fade-right",
    dataAosDuration: "1200",
  },
  {
    title: "Japonés para Viajeros",
    description:
      "¡Bienvenidos al curso que hará que tu próximo viaje a Japón sea una experiencia inolvidable! Aprende lo esencial para moverte con confianza y comunicarte efectivamente en tus aventuras.",
    features: [
      "❓ Preguntas básicas: aprende a hacer consultas y entender respuestas",
      "🤝 Conexión local: comunícate de forma cercana y auténtica con japoneses",
      "🍜 Vida práctica: disfruta comida, transporte y atracciones sin confusiones",
      "✈️ Confianza viajera: muévete por Japón como un experto",
    ],
    src: "/images/japones-para-viajeros.webp",
    dataAos: "fade-left",
    dataAosDuration: "1400",
  },
  {
    title: "Curso Kanji",
    description:
      "🈯 Domina los caracteres japoneses de forma efectiva y entretenida. Aprende técnicas de memorización y descubre el trasfondo cultural de cada kanji.",
    features: [
      "🕰️ Tiempo y vida cotidiana: horas, días, estaciones, identidad y relaciones",
      "🌿 Naturaleza y entorno: paisajes, clima, animales y fenómenos del cielo",
      "📚 Conocimiento: conceptos básicos, matemáticas, ciencia, arte y comunicación",
      "👤 Cuerpo, emociones y sociedad: partes del cuerpo, posturas, emociones, voz, comunidades y vínculos familiares",
    ],
    src: "/images/curso-kanji.webp",
    dataAos: "fade-right",
    dataAosDuration: "1000",
  },
  {
    title: "Taller de Conversación",
    description:
      "Desarrolla fluidez y confianza en conversaciones reales. Practica situaciones cotidianas y mejora tu pronunciación con hablantes nativos.",
    features: [
      "💬 Conversación práctica: situaciones reales de la vida cotidiana",
      "🗣️ Pronunciación nativa: mejora tu acento con profesores japoneses",
      "🎭 Roleplay dinámico: simula escenarios diversos y entretenidos",
      "🔄 Feedback inmediato: corrección y mejora en tiempo real",
    ],
    src: "/images/taller-de-conversacion.webp",
    dataAos: "fade-left",
    dataAosDuration: "1200",
  },
  {
    title: "Taller de Anime",
    description:
      "Si alguna vez soñaste con entender a tus personajes favoritos sin traducciones, este taller es para ti. Aquí unimos la pasión por el anime con técnicas efectivas para mejorar tu comprensión auditiva y habilidades en japonés.",
    features: [
      "🗣️ Expresiones cotidianas tal como las usan los personajes",
      "🔄 Diferentes niveles de lenguaje: formal, casual y dialectos únicos",
      "🎌 Cultura japonesa: gestos, valores y modismos",
      "🎬 Práctica activa: ver anime sin subtítulos, analizar escenas y recrear diálogos",
    ],
    src: "/images/taller-de-anime-2.webp",
    dataAos: "fade-right",
    dataAosDuration: "1400",
  },
  {
    title: "Curso de Okinawense",
    description:
      "Explora el fascinante dialecto de Okinawa, una joya lingüística única. Descubre la rica cultura de las islas Ryukyu a través de su lengua ancestral.",
    features: [
      "🏝️ Historia de Okinawa: cultura e identidad de las islas Ryukyu",
      "🗣️ Fonética especial: sonidos únicos del okinawense",
      "📜 Tradiciones orales: cuentos y leyendas en lengua nativa",
      "🎵 Música tradicional: aprende canciones folclóricas de Okinawa",
    ],
    src: "/images/curso-okinawense.webp",
    dataAos: "fade-left",
    dataAosDuration: "1000",
  },
  {
    title: "Mini Curso de Japonés | Inicial",
    description:
      "Tu primera introducción al japonés. Ideal para principiantes absolutos que quieren probar el idioma antes de comprometerse con un curso completo.",
    features: [
      "👋 Primeros pasos: saludos y presentaciones básicas",
      "🔤 Introducción a hiragana: tus primeros caracteres japoneses",
      "🔢 Números y tiempo: conceptos básicos para la vida diaria",
      "🎯 Fundamentos culturales: etiqueta y cortesía japonesa",
    ],
    src: "/images/mini-curso-japones.webp",
    dataAos: "fade-right",
    dataAosDuration: "1200",
  },
];

// Pagination setup
const {
  result: paginatedCourses,
  nextPage,
  prevPage,
  goToPage,
} = usePagination(allCourses, 2);

// Animation on mount
onMounted(() => {
  // Reinitialize AOS if needed
  if (import.meta.client) {
    const AOS = (window as unknown as { AOS?: { refresh(): void } }).AOS;
    if (AOS) {
      AOS.refresh();
    }
  }
});
</script>
