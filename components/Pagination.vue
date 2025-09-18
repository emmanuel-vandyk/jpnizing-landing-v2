<template>
  <div class="flex items-center justify-center gap-4 mt-8">
    <!-- Previous Button -->
    <AnimationButton
      :disabled="!hasPrev"
      variant="solid"
      color="neutral"
      size="lg"
      class="px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed relative z-10"
      @click="$emit('prev')"
    >
      <span class="relative z-10">Anterior</span>
    </AnimationButton>

    <!-- Page Numbers -->
    <div class="flex items-center gap-2">
      <button
        v-for="page in visiblePages"
        :key="page"
        :class="[
          'px-4 py-2 rounded-full font-serif font-semibold transition-all duration-200 relative z-10',
          page === currentPage
            ? 'bg-gradient-to-b from-primary-200 to-primary-300 text-white'
            : 'bg-neutral-100',
        ]"
        @click="$emit('goToPage', page)"
      >
        {{ page }}
      </button>
    </div>

    <!-- Next Button -->
    <AnimationButton
      :disabled="!hasNext"
      variant="solid"
      color="neutral"
      size="lg"
      class="px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed relative z-10"
      @click="$emit('next')"
    >
      <span class="relative z-10">Siguiente</span>
    </AnimationButton>
  </div>

  <!-- Page Info -->
  <div class="text-center text-gray-600 mt-4 font-serif">
    Página {{ currentPage }} de {{ totalPages }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

const props = defineProps<Props>();

defineEmits<{
  prev: [];
  next: [];
  goToPage: [page: number];
}>();

const visiblePages = computed(() => {
  const maxVisible = 4;
  const total = props.totalPages;
  const current = props.currentPage;

  if (total <= maxVisible) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const start = Math.max(1, Math.min(current - 2, total - maxVisible + 1));
  const end = Math.min(total, start + maxVisible - 1);

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});
</script>
