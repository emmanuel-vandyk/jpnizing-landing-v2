<template>
  <UCard
    variant="solid"
    class="backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors rounded-xl w-md">
    <template #header>
      <div class="flex justify-center items-center w-full">
        <LazyNuxtImg 
          :src="item.src" 
          :alt="item.name" 
          width="400" 
          height="450" 
          class="rounded-t-lg mt-2 w-full h-full bg-cover"
          format="webp"
          placeholder="blur"
           />
      </div>
    </template>
    <template #default>
      <div class=" group">
        <h4 class="text-xl font-bold">{{ item.name }}</h4>
        <p class="text-black/80 font-bold">{{ item.title }}</p>
      </div>
    </template>
    <template #footer>
      <div class=" pb-2 group">
        <p class="text-black/70 font-bold">{{ item.description }}</p>
      </div>
    </template>
  </UCard>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
