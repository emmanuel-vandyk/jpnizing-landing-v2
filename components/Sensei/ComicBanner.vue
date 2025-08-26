<template>
  <div
    class="flex flex-col bg-default-50 w-full" 
  >
    <div
      class="flex banner-bg h-256"
    >
      <div 
        v-for="(item, index) in senseiData"
        :key="index"
        class="flex flex-col items-center justify-center w-full h-100 lg:h-3/4"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <LazyNuxtPicture
          :src="item.src"
          class="w-48 md:w-52 lg:w-80 h-30 md:h-36 lg:h-56 px-8 object-cover items-baseline"
          :class="item.class"

        />
        <div
          class="flex flex-col bg-white border-4 border-black rounded-xl p-4 shadow-lg w-36 h-48 lg:w-md lg:h-48 mx-auto text-md leading-loose"
        >
          <p class="font-bold text-xs lg:text-xl">{{ item.name }}</p>
          <p class="font-bold text-xs lg:text-xl">{{ item.japaneseName }}</p>
          <p class="italic text-xs lg:text-xl text-gray-700">Nivel: {{ item.japaneseLevel }}</p>
          <p class="mt-2 text-xs lg:text-xl">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

const senseiData = [
  {
    name: "Fran",
    japaneseName: "フラン",
    japaneseLevel: "N3",
    text: `Kon'nichiwa, soy Fran, profe de Japonizando America, Tanoshimi!`,
    src: "/images/fran.svg",
    dataAos: "fade-left"
  },
  {
    name: "Anto",
    japaneseName: "アント",
    japaneseLevel: "N2",
    text: `Moshi moshi, soy Anto, profe y fundadora de Japonizando America. ¡Irasshaimase!`,
    src: "/images/anto.png",
    dataAos: "fade-right"
  },
  {
    name: "Dani",
    japaneseName: "ダニ",
    japaneseLevel: "N3",
    text: 'Ossu, soy Dani, profe de Japonizando America',
    src: "/images/dani.svg",
    dataAos: "fade-right"
  }
];
</script>

<style scoped>
.banner-bg {
  background-image: url('/images/banner-bg-comic.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: content-box;
}
</style>