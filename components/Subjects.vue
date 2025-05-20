<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div
      v-for="(lesson, index) in lessons"
      :key="index"
      class="card bg-base-100 shadow hover:shadow-lg transition cursor-pointer"
    >
      <NuxtLink :to="lesson.link" class="card-body">
        <h2 class="card-title">{{ lesson.title }}</h2>
        <p class="text-sm text-gray-500">{{ lesson.description }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  lessons: {
    type: Array,
    required: true
  }
});
</script>