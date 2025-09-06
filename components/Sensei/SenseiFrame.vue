<template>
  <div
    class="sensei-panel relative flex items-end justify-center w-full h-full"
  >
    <NuxtImg
      :src="senseiImage"
      :alt="alt || 'Sensei character image'"
      class="character-image"
      loading="eager"
      placeholder
      :key="`sensei-image-${reloadKey}`"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  senseiImage: {
    type: String,
    required: true,
  },
  backgroundImage: {
    type: String,
    required: true,
  },
  clipPath: {
    type: String,
    required: true,
  },
  senseiImageHeight: {
    type: [String, Number],
    default: 95,
  },
  flipHorizontally: {
    type: Boolean,
    default: false,
  },
  alt: {
    type: String,
    default: "",
  },
});

const reloadKey = ref(0);

// Computed properties for CSS
const backgroundImageUrl = computed(() => `url('${props.backgroundImage}')`);
const imageHeightPercent = computed(() => `${props.senseiImageHeight}%`);
const imageTransform = computed(() => {
  const flip = props.flipHorizontally ? "scaleX(-1)" : "";
  return `translateX(-50%) ${flip}`.trim();
});

// Force a re-render after mounting to ensure classes are properly applied
onMounted(() => {
  setTimeout(() => {
    reloadKey.value++;
  }, 50);
});
</script>

<style scoped>
.sensei-panel {
  background-image: v-bind(backgroundImageUrl);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: v-bind(clipPath);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.character-image {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: v-bind(imageTransform);
  width: 100%;
  height: v-bind(imageHeightPercent);
  object-fit: contain;
  object-position: bottom center;
  clip-path: inherit;
  z-index: 1;
}
</style>
