<template>
  <div class="mx-4 md:mx-8 lg:mx-40">
    <!-- Desktop Layout -->
    <div class="hidden lg:flex flex-row justify-between w-auto h-160 relative z-0 p-4 bg-black">
      <div 
        v-for="(sensei, idx) in senseiData" 
        :key="sensei.name" 
        class="w-full lg:w-3/7 items-end justify-center"
        :class="idx === 1 ? 'mx-[-6%]' : ''"
      >
        <SenseiFrame v-bind="senseiFrameProps[idx]" />
      </div>
      
      <SenseiTextBox 
        v-for="(sensei, idx) in senseiData" 
        :key="sensei.name" 
        :item="sensei" 
        :class="[
          'self-end justify-self-between z-10 absolute',
          textBoxClasses[idx],
        ]" 
      />
    </div>

    <!-- Mobile Layout -->
    <div class="lg:hidden bg-black p-4 rounded-lg">
      <div class="space-y-6">
        <div 
          v-for="(sensei, idx) in senseiData" 
          :key="`mobile-${sensei.name}`" 
          class="relative"
        >
          <!-- Sensei Frame -->
          <div class="w-full h-48 sm:h-56 md:h-64 relative">
            <SenseiFrame v-bind="mobileSenseiFrameProps[idx]" />
          </div>
          
          <!-- Text Box -->
          <div class="mt-3 flex justify-center">
            <SenseiTextBox 
              :item="sensei" 
              class="relative z-10"
            />
          </div>
        </div>
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
  "justify-self-start bottom-5 -left-4",
  "justify-self-center -top-3 left-0 right-0",
  "justify-self-end -bottom-5 -right-6",
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

const mobileClipPaths = [
  "none", // Sin clip path en móvil, usará border-radius
  "none",
  "none",
];

const senseiImageHeights = [80, 95, 80];
const mobileSenseiImageHeights = [85, 90, 85]


const senseiFrameProps = computed(() => [
  {
    senseiImage: imageSources[0],
    backgroundImage: backgroundImages[0],
    clipPath: clipPaths[0],
    mobileClipPath: mobileClipPaths[0],
    senseiImageHeight: senseiImageHeights[0],
    mobileSenseiImageHeight: mobileSenseiImageHeights[0],
    alt: `${senseiData[0].name} character image`,
  },
  {
    senseiImage: imageSources[1],
    backgroundImage: backgroundImages[1],
    clipPath: clipPaths[1],
    mobileClipPath: mobileClipPaths[1],
    senseiImageHeight: senseiImageHeights[1],
    mobileSenseiImageHeight: mobileSenseiImageHeights[1],
    alt: `${senseiData[1].name} character image`,
  },
  {
    senseiImage: imageSources[2],
    backgroundImage: backgroundImages[2],
    clipPath: clipPaths[2],
    mobileClipPath: mobileClipPaths[2],
    senseiImageHeight: senseiImageHeights[2],
    mobileSenseiImageHeight: mobileSenseiImageHeights[2],
    alt: `${senseiData[2].name} character image`,
  },
]);

const mobileSenseiFrameProps = computed(() => senseiFrameProps.value);

// Force a re-render after mounting to ensure classes are properly applied
onMounted(() => {
  // Wait for the next tick to ensure the DOM is ready
  setTimeout(() => {
    reloadKey.value++;
  }, 50);
});
</script>