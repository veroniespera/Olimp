<template>
  <article class="max-w-xs">
    <a href="#">
      <img :src="img" alt="News" class="mb-5 rounded-lg" />
    </a>
    <h2
      class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white"
    >
      <a href="#"> <slot name="Titlu" /></a>
    </h2>
    <p class="mb-4 text-gray-500 dark:text-gray-400">
      <slot name="Paragraf" />
    </p>
    <a
      href="#"
      class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
    >
      Află mai mult
    </a>
  </article>
  
</template>

<script setup lang="ts">
defineProps<{ img: string }>();
</script>
