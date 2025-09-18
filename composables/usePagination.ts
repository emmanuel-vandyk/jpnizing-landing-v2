import type { PaginatedResult } from "~/types/pagination";

export const usePagination = <T>(items: T[], itemsPerPage: number = 2) => {
  const currentPage = ref(1);

  const totalItems = computed(() => items.length);
  const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage));

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
  });

  const hasNext = computed(() => currentPage.value < totalPages.value);
  const hasPrev = computed(() => currentPage.value > 1);

  const nextPage = () => {
    if (hasNext.value) {
      currentPage.value++;
    }
  };

  const prevPage = () => {
    if (hasPrev.value) {
      currentPage.value--;
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };

  const reset = () => {
    currentPage.value = 1;
  };

  const result = computed<PaginatedResult<T>>(() => ({
    items: paginatedItems.value,
    currentPage: currentPage.value,
    totalPages: totalPages.value,
    totalItems: totalItems.value,
    hasNext: hasNext.value,
    hasPrev: hasPrev.value,
    itemsPerPage,
  }));

  return {
    result: readonly(result),
    nextPage,
    prevPage,
    goToPage,
    reset,
    currentPage: readonly(currentPage),
    totalPages: readonly(totalPages),
    hasNext: readonly(hasNext),
    hasPrev: readonly(hasPrev),
  };
};
