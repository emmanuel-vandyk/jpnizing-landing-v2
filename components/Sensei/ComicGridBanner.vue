<template>
  <div class="mx-40">
    <div class="flex justify-between w-auto h-160 relative z-0 p-4 bg-black">
      <div
        v-for="(sensei, idx) in senseiData"
        :key="sensei.name"
        class="w-3/7 items-end justify-center"
        :class="idx === 1 ? 'mx-[-6%]' : ''"
      >
        <!-- Panel con clip-path -->
        <SenseiFrame v-bind="senseiFrameProps[idx]" />
      </div>
      <div class="absolute bottom-4 w-full flex">
        <SenseiTextBox
          v-for="(sensei, idx) in senseiData"
          :key="sensei.name"
          :item="sensei"
          :class="['self-end justify-self-between z-10', textBoxClasses[idx]]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const reloadKey = ref(0);
const senseiData = [
  {
    name: "Anto",
    japaneseName: "アント",
    japaneseLevel: "N2",
  },
  {
    name: "Fran",
    japaneseName: "フラン",
    japaneseLevel: "N3",
  },
  {
    name: "Dani",
    japaneseName: "ダニ",
    japaneseLevel: "N3",
  },
];

const textBoxClasses = [
  "justify-self-start",
  "justify-self-center",
  "justify-self-end",
];

const imageSources = [
  "/images/anto.png",
  "/images/fran.png",
  "/images/dani.png",
];

const backgroundImages = [
  "/images/panel-anto.png",
  "/images/panel-fran.png",
  "/images/panel-dani.png",
];

const clipPaths = [
  "polygon(0% 0, 100% 0, 80% 100%, 0% 100%)",
  "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
  "polygon(0% 0, 100% 0, 100% 100%, 20% 100%)",
];

const senseiImageHeights = [78, 95, 80];

const senseiFrameProps = [
  {
    senseiImage: imageSources[0],
    backgroundImage: backgroundImages[0],
    clipPath: clipPaths[0],
    senseiImageHeight: senseiImageHeights[0],
    alt: `${senseiData[0].name} character image`,
  },
  {
    senseiImage: imageSources[1],
    backgroundImage: backgroundImages[1],
    clipPath: clipPaths[1],
    senseiImageHeight: senseiImageHeights[1],
    alt: `${senseiData[1].name} character image`,
  },
  {
    senseiImage: imageSources[2],
    backgroundImage: backgroundImages[2],
    clipPath: clipPaths[2],
    senseiImageHeight: senseiImageHeights[2],
    alt: `${senseiData[2].name} character image`,
  },
];

// Force a re-render after mounting to ensure classes are properly applied
onMounted(() => {
  // Wait for the next tick to ensure the DOM is ready
  setTimeout(() => {
    reloadKey.value++;
  }, 50);
});
</script>
