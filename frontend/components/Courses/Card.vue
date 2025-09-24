<template>
  <UCard
    :key="item.title"
    variant="solid"
    class="flex flex-col items-center justify-between bg-neutral-50 w-md min-h-[650px] h-full rounded-md p-0 hover:shadow-lg transition-all duration-300"
    :data-aos="item.dataAos"
    :data-aos-duration="item.dataAosDuration"
  >
    <template #header>
      <div class="flex flex-col justify-center items-start -mt-4 -mx-6">
        <div class="flex items-center gap-3 w-full">
          <LazyNuxtImg :src="item.src" class="w-full border-b-3 border-black" />
        </div>
        <h3 class="ml-4 text-2xl font-bold pt-3 px-6">{{ item.title }}</h3>
      </div>
    </template>
    <template #default>
      <div class="w-full px-4 font-serif flex-grow overflow-auto">
        <p>
          {{ item.description }}
        </p>
        <ul class="flex flex-col w-full items-start gap-1">
          <li
            v-for="(features, index) in item.features"
            :key="index"
            class="flex items-baseline gap-2 px-2"
          >
            <span
              class="size-2 rounded-full bg-linear-to-b from-primary-200 to-primary-300 flex-shrink-0 mt-1"
            />
            {{ features }}
          </li>
        </ul>
      </div>
    </template>
    <template #footer>
      <div class="w-full h-full flex justify-center items-center">
        <AnimationButton
        variant="solid"
        color="primary"
        size="lg"
        class="flex text-sm md:text-md tracking-wide uppercase mb-4"
        :to="item.to"
      >
        <span class="relative z-10">Inscribirse al taller</span>
      </AnimationButton>
      </div>
    </template>
  </UCard>
</template>
<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped>
/* Hover effects for cards */
.hover\:shadow-lg:hover {
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transform: translateY(-2px);
}
</style>
