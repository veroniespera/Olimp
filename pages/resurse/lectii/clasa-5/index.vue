<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6 text-sky-950">Materii pentru Clasa 5</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
      <SelectionCard
        v-for="subject in subjects"
        :key="subject"
        :to="`/resurse/lectii/clasa-5/${subject}`"
      >
        <template #title>{{ subject }}</template>
        <template #description>Lecții pentru {{ subject }}</template>
      </SelectionCard>
    </div>
  </div>
</template>

<script setup>
import SelectionCard from '~/components/SelectionCard.vue'
import { ref, onMounted } from 'vue'

const subjects = ref([])

onMounted(async () => {
  const files = await import.meta.glob(`~/server/data/lessons/clasa-5/*.json`)
  subjects.value = Object.keys(files).map(path => {
    const name = path.split('/').pop().replace('.json', '')
    return name.charAt(0).toUpperCase() + name.slice(1)
  })
})
</script>
