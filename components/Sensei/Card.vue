<template>
  <UCard 
    class="rounded-none border-4" :data-aos="item.dataAos" data-aos-duration="1500">
      <div class="flex flex-col border-4">
        <div :class="[item.class, 'flex flex-col md:flex-row justify-evenly items-center bg-content bg-center p-4 md:p-8']">
          <div class="flex flex-col justify-center items-center h-full w-full md:w-4/12 uppercase text-3xl md:text-4xl lg:text-6xl font-extrabold gap-4 whitespace-normal md:whitespace-nowrap my-4 md:m-8 text-center md:text-left">
            <h2>{{ item.name }}</h2>
            <span class="text-2xl md:text-3xl lg:text-4xl">{{ item.japaneseLevel }}</span>
          </div>
          <LazyNuxtImg :src="item.src" alt="Sensei" class="flex object-cover w-2/4 md:w-auto my-4 md:my-0 mask-b-from-85%" />
          <div class="flex justify-evenly w-full items-center">
            <SenseiTextBox :text="item.text" />
          </div>
        </div>
      </div>
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
