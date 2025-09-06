<template>
  <div class="containergrid w-full relative m-auto">
    <div class="flex justify-center w-full h-160 relative z-0">
      <div
        v-for="(sensei, idx) in senseiData"
        :key="sensei.name"
        class="relative flex w-1/3 items-end justify-center bg-default"
      >
        <!-- Panel con clip-path -->
        <div
          :class="[
            panelClasses[idx],
            'relative flex items-end justify-center w-full h-150',
          ]"
        >
          <NuxtImg
            :src="imageSources[idx]"
            :alt="`${sensei.name} character image`"
            :class="['character-image', imageClasses[idx]]"
            loading="eager"
            placeholder
            :key="`sensei-image-${idx}-${reloadKey}`"
          />
        </div>
        <!-- Caja de texto fuera del clip -->
        <SenseiTextBox
          :item="sensei"
          :class="[
            'absolute self-end justify-self-between mb-4 top-3 z-10',
            textBoxClasses[idx],
          ]"
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

const panelClasses = ["panel-anto", "panel-fran", "panel-dani"];
const imageSources = [
  "/images/anto.png",
  "/images/fran.png",
  "/images/dani.png",
];

const imageClasses = ["image-anto", "image-fran", "image-dani"];

// Force a re-render after mounting to ensure classes are properly applied
onMounted(() => {
  // Wait for the next tick to ensure the DOM is ready
  setTimeout(() => {
    reloadKey.value++;
  }, 50);
});
</script>
<style>
.panel-anto {
  background-color: black;
  clip-path: polygon(0% 0, 100% 0, 80% 100%, 0% 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.panel-anto::after {
  content: "";
  position: absolute;
  background-image: url("/images/panel-anto.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 95%;
  width: 95%;
  clip-path: polygon(0% 0, 100% 0, 80% 100%, 0% 100%);
}

.character-image {
  width: 95%;
  height: 95%;
  object-fit: cover;
  object-position: bottom center;
  clip-path: inherit;
  z-index: 1;
}

.image-anto {
  clip-path: polygon(0% 0, 100% 0, 80% 100%, 0% 100%);
}

.panel-fran {
  background-color: black;
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.panel-fran::after {
  content: "";
  position: absolute;
  background-image: url("/images/panel-fran.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 95%;
  width: 95%;
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
}

.image-fran {
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
}

.panel-dani {
  background-color: black;
  clip-path: polygon(0% 0, 100% 0, 100% 100%, 20% 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.panel-dani::after {
  content: "";
  position: absolute;
  background-image: url("/images/panel-dani.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 95%;
  width: 95%;
  clip-path: polygon(0% 0, 100% 0, 100% 100%, 20% 100%);
}

.image-dani {
  clip-path: polygon(0% 0, 100% 0, 100% 100%, 20% 100%);
}
</style>
