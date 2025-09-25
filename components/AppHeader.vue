<template>
  <!-- Contenedor Principal -->
  <div class="w-full">
    <!-- Mobile Header-->
    <div class="lg:hidden flex items-center justify-between font-serif font-extralight tracking-wide uppercase z-50 p-4 mx-auto w-full">
        <MobileNavigationMenu class="header" :items="items" />
    </div>
    <!-- Desktop Header -->
    <div
      :class="[
        'header hidden lg:flex',
        isScrolled
          ? 'bg-default/50 transition-colors duration-300 ease-in-out sticky-header shadow-sm backdrop-blur-md'
          : 'bg-transparent duration-300',
      ]"
      class="flex items-center justify-around font-serif font-extralight tracking-wide uppercase z-50 pb-2 mx-auto w-full"
    >
      <!-- Sección Izquierda: Logo como un ULink con una imagen -->
      <ULink
        to="/"
        :class="[
          'md:flex transition-all ease-in-out duration-300',
          isScrolled
            ? 'visible opacity-100'
            : 'invisible opacity-0 pointer-events-none',
        ]"
      >
        <NuxtImg
          src="/images/japanizing-logo.png"
          alt="Logo de Japonizando América"
          class="h-12 md:h-16 lg:h-32 w-auto"
        />
      </ULink>
      <!-- Sección Central: Menú de Navegación -->
      <div class="hidden md:block font-serif">
        <UNavigationMenu :items="items" color="neutral" orientation="vertical" class="data-[orientation-vertical]:w-48" />
      </div>

      <!-- Sección Derecha: Botón de Ingresar -->
      <AnimationButton
        to="https://cursos.japonizandoamerica.com/login/index.php"
        size="xl"
        variant="solid"
        color="primary"
        class="gap-2 text-lg relative overflow-hidden"
        @mouseover="handleLottieHover"
        @mouseleave="handleLottieLeave"
      >
        <Lottie
          ref="buttonLottie"
          name="flowers"
          play-on-hover
          :speed="1.5"
          loop
          class="absolute inset-0 w-full h-full opacity-0 duration-75 ease-in-out z-0"
          :class="{ 'opacity-100 duration-75 ease-in-out ': isLottieVisible }"
          :renderer-settings="{ preserveAspectRatio: 'xMidYMid slice' }"
        />
        <span class="relative z-10">Ingresar</span>
      </AnimationButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Lottie } from "nuxt-lottie";
import type { NavigationMenuItem } from "@nuxt/ui";

const buttonLottie = ref<Lottie | null>(null);
const isLottieVisible = ref(false);

const handleLottieHover = () => {
  isLottieVisible.value = true;
  // Espera un pequeño momento si es necesario para que el DOM se actualice y la animación sea visible
  // antes de intentar reproducirla.
  if (buttonLottie.value) {
    buttonLottie.value.play(); // Reproduce la animación [3]
  }
};

const handleLottieLeave = () => {
  isLottieVisible.value = false;
  if (buttonLottie.value) {
    buttonLottie.value.stop();
  }
};

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Cursos",
      to: "/courses",
    },
    {
      label: "Contacto",
      to: "/contact",
    },
  ],
]);

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="css">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 0;
  z-index: 999;
  font-family: inherit;
  font-weight: 200;
  letter-spacing: 0.025em;
  text-transform: uppercase;
}

.sticky-header {
  border-top-color: transparent;
}
</style>
