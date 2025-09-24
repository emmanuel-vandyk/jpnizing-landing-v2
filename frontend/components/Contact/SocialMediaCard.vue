<template>
  <UCard
    :class="[
      'flex flex-col items-center justify-between h-full bg-neutral-50 p-8 rounded-md border-3 border-black hover:shadow-lg transition-all duration-300 md:w-auto',
      cardClass,
    ]"
    :data-aos="dataAos"
    :data-aos-duration="dataAosDuration"
  >
    <div class="flex flex-col items-center flex-grow">
      <div
        :class="[
          'size-16 rounded-full flex items-center justify-center mb-6',
          gradientClass,
        ]"
      >
        <UIcon :name="iconName" :class="iconClass" />
      </div>
      <h3 class="text-2xl font-bold mb-4 text-center">{{ title }}</h3>
      <p class="text-center font-serif text-gray-600 mb-6 flex-grow">
        {{ description }}
      </p>
    </div>
    <AnimationButton
      :to="link"
      :external="external"
      :target="target"
      variant="solid"
      color="primary"
      size="lg"
      class="w-full justify-center mt-auto text-center"
    >
      <span :class="buttonTextClass">{{ buttonText }}</span>
    </AnimationButton>
  </UCard>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  iconName: string;
  iconClass?: string;
  gradientClass: string;
  link: string;
  buttonText: string;
  buttonTextClass?: string;
  cardClass?: string;
  dataAos?: string;
  dataAosDuration?: string;
  external?: boolean;
  target?: string;
}

withDefaults(defineProps<Props>(), {
  iconClass: "size-8",
  buttonTextClass: "relative z-10",
  cardClass: "truncate",
  dataAos: "fade-up",
  dataAosDuration: "1000",
  external: false,
  target: "_self",
});
</script>
