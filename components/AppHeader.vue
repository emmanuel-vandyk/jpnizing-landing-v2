<template>
  <div 
  :class="[
    'header',
    isScrolled ? 'bg-[color:var(--ui-contrast)] transition-colors duration-300 ease-in-out sticky-header shadow-md' : 'bg-transparent duration-300'  
  ]" 
    class="flex items-center justify-center w-full font-sans fixed z-50">
      <UNavigationMenu
        :items="items"
        :color="isScrolled ? 'onDark' : 'neutral'"
        class="data-[orientation=horizontal]:w-full h-full flex justify-between items-center px-8 pb-2"
      />
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Inicio",
      icon: "i-heroicons-home-20-solid",
      to: "/",
    },
    {
      label: "Programas",
      icon: "i-heroicons-book-open-20-solid",
      to: "https://japonizandoamerica.com/programas"
    },
    {
      label: "Contacto",
      icon: "i-heroicons-phone-solid",
      to: "https://japonizandoamerica.com/contacto"
    }
  ],
  [
    {
      label: "Ingresar",
      icon: "i-heroicons-arrow-right-on-rectangle-20-solid",
      to: "https://cursos.japonizandoamerica.com/login/index.php"
    },
  ],
]);

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
})
</script>

<style lang="css">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 28px 0;
  border-bottom: 0;
  z-index: 999;
}

.sticky-header {
  padding: 28px 0;
  border-top-color: transparent;
}

@media screen and (max-width:767px) {
    .header {
        padding: 15px 0;
    }

    .sticky-header {
        padding: 8px 0;
    }
}
</style>