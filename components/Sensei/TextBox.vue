<template>
<div
      class="font-comic aspect-video max-w-sm lg:w-56 bg-white border-4 border-black rounded-xl shadow-lg text-center p-3 z-10 text-xs lg:text-2xl" :class="item.class"
      >
        <p>{{ item.name }}</p>
        <p>{{ item.japaneseName }}</p>
        <p>Nivel: {{ item.japaneseLevel }}</p>
    </div>
</template>

<script setup generic="T">
defineProps({
    item: {
        type: String,
        required: true
    }
})
</script>
