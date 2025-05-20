<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6 text-sky-950">Lecții la umatematica — Clasa 1</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <SelectionCard
        v-for="(capitol, index) in Object.entries(chapters)"
        :key="index"
        :to="`/resurse/lectii/clasa-1/matematica/${index}`"
      >
        <template #title>
          <h2 class="card-title justify-center">{{ index }}</h2>
        </template>
        <template #description>
          <p class="text-sm text-gray-500 text-center">{{ capitol[1].titlu }}</p>
        </template>
      </SelectionCard>
    </div>
  </div>
</template>

<script setup>
import SelectionCard from "~/components/SelectionCard.vue"
import { ref, onMounted } from "vue"

const chapters = ref({})

onMounted(async () => {
  const mod = await import(`~/server/data/lessons/clasa-1/matematica.json`)
  chapters.value = mod.default
})
</script>
