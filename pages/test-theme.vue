<template>
  <div class="w-full">
    <div class="w-20">
      <UNavigationMenu :items="items" orientation="vertical" />
    </div>

    <div
      class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center my-8"
    >
      <UCard variant="subtle">
        <template #header>
          <div class="flex items-center justify-center">
            <h3 class="text-lg font-medium text-center">Card Title 1</h3>
          </div>
        </template>
        <template #default>
          <div class="p-4 text-center">
            <p class="text-gray-500">First card content</p>
          </div>
        </template>
        <template #footer>
          <div class="flex items-center justify-center">
            <UButton
              icon="i-heroicons-arrow-left-20-solid"
              size="sm"
              variant="ghost"
            />
          </div>
        </template>
      </UCard>

      <UCard variant="outline">
        <template #header>
          <div class="flex items-center justify-center">
            <h3 class="text-lg font-medium text-center">Card Title 2</h3>
          </div>
        </template>
        <template #default>
          <div class="p-4 text-center">
            <p class="text-gray-500">Second card content</p>
          </div>
        </template>
        <template #footer>
          <div class="flex items-center justify-center">
            <UButton
              icon="i-heroicons-arrow-left-20-solid"
              size="sm"
              variant="ghost"
            />
            <UButton
              icon="i-heroicons-arrow-right-20-solid"
              size="sm"
              variant="ghost"
            />
          </div>
        </template>
      </UCard>

      <UCard variant="solid">
        <template #header>
          <div class="flex items-center justify-center">
            <h3 class="text-lg font-medium text-center">Card Title 3</h3>
          </div>
        </template>
        <template #default>
          <div class="p-4 text-center">
            <p class="text-gray-500">Third card content</p>
          </div>
        </template>
        <template #footer>
          <div class="flex items-center justify-center">
            <UButton
              icon="i-heroicons-arrow-left-20-solid"
              size="sm"
              variant="ghost"
            />
            <UButton
              icon="i-heroicons-arrow-right-20-solid"
              size="sm"
              variant="ghost"
            />
          </div>
        </template>
      </UCard>
      <UButton>Button</UButton>
      <UButton variant="subtle">Button</UButton>
      <UButton variant="outline">Button</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = ref<NavigationMenuItem[][]>([
  {
    label: "Inicio",
    icon: "i-heroicons-home-20-solid",
    to: "/",
  },
]);
</script>
