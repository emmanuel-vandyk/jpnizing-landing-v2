<template>
  <UButton
    ref="buttonDomRef"
    class="relative overflow-hidden"
    v-bind="$attrs"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    @mousemove="onMouseMove"
  >
    <div class="w-full h-full relative">
      <motion.div v-if="hovering" class="absolute pointer-events-none">
        <motion.div
          class="absolute inset-0 rounded-full bg-primary-300 mix-blend-difference z-10"
          :initial="{ scale: 0 }"
          :animate="{ x: maskPosition.x - 50, y: maskPosition.y - 50, scale: 1 }"
          :exit="{ scale: 0 }"
          :transition="{ type: 'spring', stiffness: 300, damping: 20 }"
          style="width: 60px; height: 60px;"
        />
      </motion.div>
      <slot />
    </div>
  </UButton>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

const buttonDomRef = ref(null)
const hovering = ref(false)
const maskPosition = reactive({ x: 0, y: 0 })

const onMouseMove = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement
  if (!target) return
  const rect = target.getBoundingClientRect()
  maskPosition.x = event.clientX - rect.left
  maskPosition.y = event.clientY - rect.top
}
</script>