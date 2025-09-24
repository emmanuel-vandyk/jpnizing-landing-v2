<script setup lang="ts">
import { ref } from "vue";
import type { NavigationMenuItem } from '@nuxt/ui';

const open = ref(false)


const openMenu = () => {
  open.value = true
}

const props = defineProps<{
  items: NavigationMenuItem[][]
}>();
</script>

<template>
  <USlideover 
    v-model="open" 
    title="Japonizando América"
    class="text-center uppercase"
    :ui="
    { 
      title: 'text-center uppercase text-xl',
      body: 'flex flex-col items-start w-full gap-3',
      footer: 'justify-end' }">
    <div class="flex items-center justify-end size-10 -ml-8 mt-4">
        <AnimationButton 
        label="Open" color="primary" variant="solid" class="flex justify-center px-2 py-1 rounded-md"
        @click="openMenu"
        >
            <UIcon name="heroicons-bars-3-bottom-right" class="w-6 h-6" />
        </AnimationButton>

    </div>
    <template #body="{ close }">
      <div class="flex flex-col justify-start items-center w-full gap-6 mt-4">
        <ULink
        to="/"
        class="flex items-center transition-all ease-in-out duration-300"
          @click="close"
        >
        <NuxtImg
        src="/images/japanizing-logo.png"
        alt="Logo de Japonizando América"
        class="h-24 w-auto"
        />
        </ULink>
        <ULink
          v-for="(item, index) in items[0]"
          :key="index"
          :to="item.to"
          class="flex items-center justify-center font-serif font-extralight tracking-wide uppercase z-50 pb-2 mx-auto w-full"
          @click="close"

        >
        <span class="text-black text-3xl">{{ item.label }}</span>
      </ULink>
      </div>
    </template>

    <template #footer>
      <UButton 
        label="Ingresar" 
        color="primary"
        to="https://cursos.japonizandoamerica.com/login/index.php"
        class="flex justify-center w-full sm:w-auto sm:h-14 lg:h-full text-sm sm:text-base lg:text-lg relative overflow-hidden font-extrabold uppercase tracking-wide px-4 sm:px-6 lg:px-8 py-4" 
        />
    </template>
  </USlideover>
</template>