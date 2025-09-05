<template>
  <div class="container m-auto grid w-full relative">
    <div class="flex justify-center w-full h-160 relative z-0">
      <div
        v-for="(sensei, idx) in senseiData"
        :key="sensei.name"
        class="relative flex w-1/3 items-end justify-center bg-default p-4"
      >
        <!-- Panel con clip-path -->
        <div :class="[panelClasses[idx], 'flex justify-between items-end w-full h-150 relative z-0']">
          <NuxtImg :src="imageSources[idx]" class="w-fit h-96 object-cover" />
        </div>
        <svg 
          class="absolute inset-4 w-full h-160 pointer-events-none z-10"
          viewBox="-0.5 -1 101 101" 
          preserveAspectRatio="none"
          style="width: calc(100% - 2rem); height: 38rem;"
          stroke-linejoin="miter"
        >

          <path 
            :d="svgPaths[idx]" 
            fill="none" 
            stroke="#000" 
            stroke-width="4"
            vector-effect="non-scaling-stroke"
          />
        </svg>

        <!-- Caja de texto fuera del clip -->
        <SenseiTextBox
          :item="sensei"
          :class="['absolute self-end justify-self-between mb-4 top-3 z-10', textBoxClasses[idx]]"
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
        japaneseLevel: "N2"
    },
    {
        name: "Fran",
        japaneseName: "フラン",
        japaneseLevel: "N3"
    },
    {
        name: "Dani",
        japaneseName: "ダニ",
        japaneseLevel: "N3"
    }
];

const textBoxClasses = [
  "justify-self-start",
  "justify-self-center",
  "justify-self-end"
]

const svgPaths = [
    // Panel Anto: polygon(0% 0, 100% 0, 80% 100%, 0% 100%)
    "M 0 0 L 100 0 L 80 99.6 L 0 99.6 Z",
    // Panel Fran: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)
    "M 20 0 L 80 0 L 100 99.6 L 0 99.6 Z",
    // Panel Dani: polygon(0% 0, 100% 0, 100% 100%, 20% 100%)
    "M 0 0 L 100 0 L 100 99.6 L 20 99.6 Z"
];

const panelClasses = ["panel-anto", "panel-fran", "panel-dani"];
const imageSources = [
    "/images/anto.png",
    "/images/fran.png",
    "/images/dani.png"
];
</script>
<style>
.panel-anto {
    background-image: url("/images/panel-anto.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    clip-path: polygon(0% 0, 100% 0, 80% 100%, 0% 100%);
}
.panel-fran {
    background-image: url("/images/panel-fran.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
}
.panel-dani {
    background-image: url("/images/panel-dani.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    clip-path: polygon(0% 0, 100% 0, 100% 100%, 20% 100%);
}
</style>
