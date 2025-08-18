<template>
  <div class="bg-brand-primary-50 min-h-screen">
    <div class="bg-center bg-cover w-full justify-center min-h-screen">
      <LazyHero />
    </div>
    <div class="bg-center bg-cover h-full w-full justify-center">
      <div
    class="bg-brand-background min-h-screen"
  >
    <!-- Hero CTA Section -->
    <div>
      <LazyHeroCTASection />
    </div>

    <!-- Talleres Section -->
    <div>
      <LazyWorkshopsSection />
    </div>

    <!-- Podcast Section -->
    <div>
       <LazyPodcastSection />
    </div>

    <!-- Teacher Section -->
    <div>
      <LazySenseiSection />
    </div>
    <!-- CTA Section -->
     <div>
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
