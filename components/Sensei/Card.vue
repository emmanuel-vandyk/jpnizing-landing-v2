<template>
  <UCard 
    class="rounded-none border-8">
      <div class="border-8">
        <div :class="[props.class, 'flex justify-evenly items-center']">
          <div class="flex flex-col w-56 justify-center uppercase text-6xl font-extrabold">
            <h2>{{ name }}</h2>
          </div>
          <LazyNuxtImg :src="src" alt="Sensei" class="flex object-contain" />
          <div class="flex items-center">
            <h2 class="text-6xl font-bold">{{ description }}</h2>
          </div>
        </div>
      </div>
  </UCard>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
})
</script>
