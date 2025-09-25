<template>
  <div
    class="min-h-screen halftone-bg mask-t-from-93% lg:mask-t-from-85% mask-b-from-96% lg:mask-b-from-94%"
  >
    <UContainer
      class="flex flex-col justify-center items-center pb-16 min-h-screen mt-32"
    >
      <!-- Header Section -->
      <div class="py-2 mb-12 w-full" data-aos="fade-up" data-aos-duration="950">
        <div class="flex flex-col justify-start items-center w-full h-full">
          <h2 class="text-center text-3xl md:text-4xl lg:text-5xl font-semibold uppercase max-w-full leading-tight mb-4 lg:mb-6 break-words hyphens-auto">
            Contáctanos
          </h2>
            <p class="flex flex-col text-xl text-center mt-4 font-serif text-gray-600 max-w-3xl">
            ¿Tienes dudas sobre nuestros cursos? <span class="whitespace-pre w-full mx-auto">¿Quieres más información?</span>
            <span class="whitespace-pre-line">
              ¡Estamos aquí para ayudarte! Ponte en contacto con nosotros a través
              de cualquiera de estos medios.
            </span>
          </p>
        </div>
      </div>

      <!-- Contact Cards Grid -->
      <div
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-12 place-items-center"
      >
        <LazyContactSocialMediaCard
          v-for="card in socialMediaCards"
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
          class="w-10/12"
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
    buttonText: "Enviar un WhatsApp",
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

const isMobile = ref(false);


// Animation on mount
onMounted(() => {
  // Reinitialize AOS if needed
  if (import.meta.client) {
    const AOS = (window as unknown as { AOS?: { refresh(): void } }).AOS;
    if (AOS) {
      AOS.refresh();
    }
    const checkMobile = () => {
      isMobile.value = window.matchMedia('(max-width: 1024px)').matches
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {})
})
</script>
<style scoped>
.halftone-bg {
  background-image:
    radial-gradient(circle at center, #ede8d0 0.25rem, transparent 0),
    radial-gradient(circle at center, #efe8d9 0.25rem, transparent 0);
  background-size: 1.4rem 1.4rem;
  background-position:
    0 0,
    0.65rem 0.65rem;
  background-clip: content-box;
}
</style>