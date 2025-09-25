<template>
  <div class="bg-default min-h-screen w-full">
    <div class="bg-center bg-cover w-full justify-center">
      <LazyHero />
    </div>
    <div class="bg-center bg-cover h-full w-full justify-center">
      <div
        class="relative bg-brand-background halftone-bg bg-contain bg-repeat-round min-h-screen bg-center mask-t-from-99% lg:mask-t-from-97% mask-b-from-98% z-20"
      >
        <div class="flex flex-col">
          <!-- Talleres Section -->
          <LazyCoursesSection />
          <!-- Podcast Section -->
          <LazyPodcastSection />
          <!-- Sensei Section -->
          <LazySenseiSection />
          <!-- CTA Section -->
          <CTASection />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Japonizando América",
  layout: "default",
});
</script>
<style scoped>
.halftone-bg {
  background-image:
    radial-gradient(circle at center, #ede8d0 0.25rem, transparent 0),
    radial-gradient(circle at center, #efe8d9 0.25rem, transparent 0);
  background-size: 1.4rem 1.4rem;
  background-position:
    0 0,
    0.65rem 0.65rem;
  background-clip: content-box;
}
</style>
