<template>
  <div class="flex flex-col gap-4 mt-8">
      <div class="flex" data-aos="fade-up">
        <div class="w-full py-4">
          <h2 
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-center gap-2"
          >
          Nuestros Sensei
        </h2>
      </div>
    </div>
  <!-- <div
    class="w-full flex min-h-screen"
  >
    <div
      class="flex flex-col items-center gap-4 px-4 md:px-8 w-full"
      >
      <LazySenseiCard
        v-for="(item, index) in senseiData"
        :key="index"
        :item="item"
        hydrate-on-interaction="mouseover"
        class="flex flex-col w-9/12"
    />
    </div>
  </div> -->
  <LazySenseiComicBanner
    class="h-256 m-0 p-0" />
  </div>
</template>
<script setup>
</script>