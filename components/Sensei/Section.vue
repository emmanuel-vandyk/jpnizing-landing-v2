<template>
  <div>
    <!-- <h2 class="text-5xl font-bold text-center py-3">
    Nuestros Sensei
  </h2> -->
  <div
    class="w-full flex py-16 min-h-screen bg-[url(/images/279.jpg)] bg-cover bg-no-repeat"
  >
    <div class="flex place-items-center px-16">
        <UCarousel 
            v-slot="{ item }" 
            :items="items"
            :autoplay="{ delay: 3000 }"
            loop="true"
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-easing="ease-out-sine"
            data-aos-duration="1200"
          >
          <LazySenseiCard
          :key="index"
          :src="item.src"
          :class="item.class"
          :name="item.name"
          :description="item.description"
          hydrate-on-interaction="mouseover"
        />
        </UCarousel>
    </div>
  </div>
  </div>
</template>
<script setup>

const items = [
  {
    name: "Anto アント",
    description: "N2",
    class: "bg-comic-burst",
    src: "/images/anto.svg",
  },
  {
    name: "Fran フラン",
    description: "N3",
    class: "bg-comic-speed",
    src: "/images/fran.svg",
  },
  {
    name: "Dani ダニ",
    description: "N3",
    class: "halftone bg-[#b1d900]",
    src: "/images/dani.svg",
  },
];

</script>

<style>
.halftone {
  background-image: radial-gradient(
      circle at center,
      green 0.25rem,
      transparent 0
    ), radial-gradient(circle at center, green 0.25rem, transparent 0);
  background-size: 1.4rem 1.4rem;
  background-position: 0 0, 0.65rem 0.65rem;
  background-clip: content-box;
}

.bg-comic-burst {
  background-image: url("/images/anto-bg.png");
  background-size: cover;
  background-clip: content-box;
}

.bg-comic-speed {
  background-image: url("/images/fran-bg.png");
  background-size: cover;
  background-clip: content-box;
}
</style>
