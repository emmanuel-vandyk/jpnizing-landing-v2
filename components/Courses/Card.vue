<template>
  <UCard
    :key="item.title"
    variant="solid"
    class="flex flex-col items-center bg-neutral-50 w-md min-h-[650px] rounded-md pb-4 pt-0 px-0 overflow-hidden"
    :data-aos="item.dataAos"
    :data-aos-duration="item.dataAosDuration"
    >
    <template #header>
      <div class="flex flex-col justify-center items-start gap-4 -mx-6 -mt-6">
      <LazyNuxtImg :src="item.src" class="w-full border-b-3 border-black" />
      <div class="flex items-center gap-3 px-4">
        <div
        class="w-12 h-12 rounded-full flex items-center justify-center bg-linear-to-b from-primary-200 to-primary-300"
      >
      <UIcon
      :name="
        item.title === 'Taller de Conversación'
        ? 'i-heroicons-chat-bubble-left-ellipsis'
        : item.title === 'Curso Kanji'
        ? 'i-heroicons-book-open'
        : 'i-heroicons-question-mark-circle'
      "
      class="size-6"
      />
      </div>
        <h3 class="text-2xl font-bold">{{ item.title }}</h3>
      </div>
      </div>
    </template>
    <template #default>
      <div class="w-full px-4 font-serif flex-grow">
      <p class="mb-4">
      {{ item.description }}
      </p>
      <ul 
        class="flex flex-col w-full items-start gap-1"
      >
      <li
      v-for="(features, index) in item.features"
      :key="index"
      class="flex items-baseline gap-2 px-2"
      >
      <span class="size-2 rounded-full bg-linear-to-b from-primary-200 to-primary-300 flex-shrink-0 mt-1" />
      {{ features }}
    </li>
    </ul>
      </div>
    </template>
    <template #footer>
      <AnimationButton
        variant="solid"
        color="primary" 
        size="lg"
        class="flex w-max text-center justify-center hover:outline rounded-full uppercase font-bold px-8 py-3 tracking-wide">
      <span class="relative z-10">Inscribirse al taller</span>
      </AnimationButton>
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