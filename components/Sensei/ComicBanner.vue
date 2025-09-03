<template>
  <div
    class="relative w-full h-[70vh] bg-no-repeat bg-center bg-contain"
    style="background-image: url('/images/bg-comic.png')"
  >
    <div class="flex h-full w-full justify-center items-end">
      <div
        v-for="(item, index) in senseiData"
        :key="index"
        class="relative flex flex-col items-center justify-end h-full pb-2 lg:pb-8"
      >
        <NuxtImg
          :src="item.src"
          :alt="item.name"
          class="h-2/3 object-contain"
        />

        <SenseiTextBox
          :item="item"
          class="absolute"
          :class="getTextBoxPositionClass(index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

const senseiData = [
  {
    name: "Anto",
    japaneseName: "アント",
    japaneseLevel: "N2",
    text: `Moshi moshi, soy Anto, profe y fundadora de Japonizando America. ¡Irasshaimase!`,
    src: "/images/anto.png",
    dataAos: "fade-right"
  },
  {
    name: "Fran",
    japaneseName: "フラン",
    japaneseLevel: "N3",
    text: `Kon'nichiwa, soy Fran, profe de Japonizando America, Tanoshimi!`,
    src: "/images/fran.png",
    dataAos: "fade-left",
  },
  {
    name: "Dani",
    japaneseName: "ダニ",
    japaneseLevel: "N3",
    text: 'Ossu, soy Dani, profe de Japonizando America',
    src: "/images/dani.png",
    dataAos: "fade-right"
  }
];

// Función para posicionar la caja de texto según el índice
const getTextBoxPositionClass = (index) => {
  switch (index) {
    case 0:
      return 'top-[5%] md:top-[80%] -left-[10%] w-32 md:w-48';
    case 1:
      return 'top-[15%] md:bottom-[90%] left-[60%] w-32 md:w-48';
    case 2:
      return 'bottom-[5%] left-[25%] md:left-[60%] w-32 md:w-48';
    default:
      return '';
  }
};


</script>

<style scoped>
/* No se requiere CSS adicional en este archivo */
</style>