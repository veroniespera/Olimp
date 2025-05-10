<template>
  <article class="max-w-xs relative">
    <a href="#">
      <img :src="img" alt="News" class="mb-5 rounded-lg" />
    </a>
    <h2 class="mb-2 text-xl font-bold leading-tight text-slate-900">
      <a href="#"> <slot name="Titlu" /></a>
    </h2>
    <p class="mb-4 text-gray-600">
      <slot name="Paragraf" />
    </p>
    <NuxtLink
      to="noutati"
      class="after:absolute after:inset-0 inline-flex items-center font-medium underline-offset-4 text-primary-600 dark:text-primary-500 hover:underline"
    >
      Află mai mult
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
defineProps<{ img: string }>();
</script>
