<template>
  <div class="min-h-screen">
    <UContainer
      class="flex flex-col justify-center items-center py-16 min-h-screen mt-32"
    >
      <!-- Header Section -->
      <div class="py-2 mb-12 w-full" data-aos="fade-up" data-aos-duration="950">
        <div class="flex flex-col justify-start items-center w-full h-full">
          <h2 class="text-5xl font-bold text-center w-full lg:py-4">
            Contáctanos
          </h2>
          <p
            class="text-xl text-center mt-4 font-serif text-gray-600 max-w-3xl"
          >
            ¿Tienes dudas sobre nuestros cursos? ¿Quieres más información?
            ¡Estamos aquí para ayudarte! Ponte en contacto con nosotros a través
            de cualquiera de estos medios.
          </p>
        </div>
      </div>

      <!-- Contact Cards Grid -->
      <div
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-12"
      >
        <LazyContactSocialMediaCard
          v-for="(card, index) in socialMediaCards"
          :key="card.title"
          :title="card.title"
          :description="card.description"
          :icon-name="card.iconName"
          :icon-class="card.iconClass"
          :gradient-class="card.gradientClass"
          :link="card.link"
          :button-text="card.buttonText"
          :button-text-class="card.buttonTextClass"
          :card-class="card.cardClass"
          :data-aos="card.dataAos"
          :data-aos-duration="card.dataAosDuration"
          :external="card.external"
          :target="card.target"
        />
      </div>

      <!-- Additional Info Section -->
      <LazyContactAdditionalInfo />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { SocialMediaCard } from "~/types/social-media";

// SEO
useSeoMeta({
  title: "Contacto - Japonizando América",
  ogTitle: "Contacto - Japonizando América",
  description:
    "Ponte en contacto con Japonizando América. WhatsApp: +54 9 351 340-1855, Email: japonizandoamerica@gmail.com, Instagram: @japonizandoamerica",
  ogDescription:
    "Ponte en contacto con Japonizando América. WhatsApp: +54 9 351 340-1855, Email: japonizandoamerica@gmail.com, Instagram: @japonizandoamerica",
  ogImage: "/images/japanizing-logo.png",
  twitterCard: "summary_large_image",
});

// Social Media Cards Data
const socialMediaCards: SocialMediaCard[] = [
  {
    title: "WhatsApp",
    description: "Chatea con nosotros y resuelve tus dudas al instante.",
    iconName: "i-custom-whatsapp",
    iconClass: "size-11",
    gradientClass: "bg-gradient-to-b from-green-400 to-green-500",
    link: "https://wa.me/+5493513401855",
    buttonText: "Escribir por WhatsApp",
    buttonTextClass: "relative z-30",
    cardClass: "",
    dataAos: "fade-up",
    dataAosDuration: "1000",
    external: true,
    target: "_blank",
  },
  {
    title: "Email",
    description: "Envíanos un correo electrónico con tus consultas detalladas.",
    iconName: "i-heroicons-envelope",
    iconClass: "size-8 text-white",
    gradientClass: "bg-gradient-to-b from-blue-400 to-blue-500",
    link: "mailto:japonizandoamerica@gmail.com",
    buttonText: "Enviar Email",
    buttonTextClass: "relative z-10",
    cardClass: "",
    dataAos: "fade-up",
    dataAosDuration: "1200",
    external: true,
    target: "_self",
  },
  {
    title: "Instagram",
    description: "Síguenos en Instagram para contenido diario y novedades.",
    iconName: "i-custom-instagram",
    iconClass: "size-12",
    gradientClass: "bg-gradient-to-t from-[#feda75] via-[#fa7e1e] to-[#962fbf]",
    link: "https://www.instagram.com/japonizandoamerica/",
    buttonText: "Seguir en Instagram",
    buttonTextClass: "relative z-10",
    cardClass: "md:col-span-2 lg:col-span-1",
    dataAos: "fade-up",
    dataAosDuration: "1400",
    external: true,
    target: "_blank",
  },
];

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

<style scoped>
/* Hover effects for cards */
.hover\:shadow-lg:hover {
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
