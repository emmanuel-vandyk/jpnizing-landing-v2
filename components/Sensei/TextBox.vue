<template>
    <div class="border-2 border-black bg-white p-4 shadow-lg text-black text-lg font-bold uppercase leading-tight tracking-wider w-full h-fit lg:max-w-xs font-[Mangat]">
        <span class="text-xs">{{ text }}</span>
    </div>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        default: ''
    }
})
</script>
