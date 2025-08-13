<template>
  <div class="min-h-screen">
    <div class="bg-center bg-cover w-full justify-center min-h-screen">
      <LazyHero />
    </div>
    <div class="bg-center bg-cover h-full w-full justify-center">
      <div
    class="bg-gradient-to-br from-rose-500 via-orange-400 to-yellow-300 min-h-screen"
  >
    <!-- Hero CTA Section -->
    <div>
      <LazyHeroCTASection />
    </div>

    <!-- Talleres Section -->
    <div class="bg-cyan-700">
      <LazyWorkshopsSection />
    </div>

    <!-- Podcast Section -->
    <div>
       <LazyPodcastSection />
    </div>

    <!-- Teacher Section -->
    <div>
      <LazyTeachersSection />
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
