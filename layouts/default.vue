<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <slot name="header">
        <AppHeader />
      </slot>
    </header>
    <main class="flex flex-col h-min-screen w-full font-sans halftone-bg">
      <slot name="default">
        <NuxtPage />
      </slot>
    </main>
    <footer class="flex flex-col w-full h-52 font-serif">
      <slot name="footer">
        <AppFooter />
      </slot>
    </footer>
  </div>
</template>
<script setup lang="ts"></script>
