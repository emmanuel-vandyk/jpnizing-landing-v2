<template>
  <div
    class="sensei-panel relative flex items-end justify-center w-full h-full"
  >
    <NuxtImg
      :key="`sensei-image-${reloadKey}`"
      :src="senseiImage"
      :alt="alt || 'Sensei character image'"
      class="character-image"
      loading="eager"
      placeholder
    />
  </div>
</template>

<script setup>

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
  mobileClipPath: {
    type: String,
    default: "",
  },
  senseiImageHeight: {
    type: [String, Number],
    default: 95,
  },
  mobileSenseiImageHeight: {
    type: [String, Number],
    default: null,
  },
  flipHorizontally: {
    type: Boolean,
    default: false,
  },
  flipVertically: {
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
const mobileImageHeightPercent = computed(() => {
  const mobileHeight = props.mobileSenseiImageHeight || props.senseiImageHeight;
  return `${mobileHeight}%`;
});

const imageTransform = computed(() => `
  translateX(-50%) 
  translateY(5%) 
  ${props.flipHorizontally ? "scaleX(-1)" : ""} 
  ${props.flipVertically ? "scaleY(-1)" : ""}
`.trim()
);

const mobileImageTransform = computed(() => {
  const flipX = props.flipHorizontally ? "scaleX(-1)" : "";
  return `translateX(-50%) ${flipX}`.trim();
});

const desktopClipPath = computed(() => props.clipPath);
const mobileClipPathValue = computed(() => {
  return props.mobileClipPath || "none";
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

/* Desktop styles */
@media (min-width: 1024px) {
  .sensei-panel {
    clip-path: v-bind(desktopClipPath);
  }
  
  .character-image {
    transform: v-bind(imageTransform);
    height: v-bind(imageHeightPercent);
    clip-path: inherit;
  }
}

/* Mobile styles */
@media (max-width: 1023px) {
  .sensei-panel {
    clip-path: v-bind(mobileClipPathValue);
    overflow: hidden;
  }
  
  .character-image {
    transform: v-bind(mobileImageTransform);
    height: v-bind(mobileImageHeightPercent);
  }
}
</style>
