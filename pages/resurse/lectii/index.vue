<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6 text-sky-950">Selectează Clasa</h1>
    <div class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-3">
      <SelectionCard
        v-for="clasa in 12"
        :key="clasa"
        :to="`/resurse/lectii/clasa-${clasa}`"
      >
        <template #title> Clasa {{ clasa }} </template>
        <template #description>
          Accesează materiile pentru clasa {{ clasa }}-a
        </template>
      </SelectionCard>
    </div>
  </div>
</template>

<script setup>
import SelectionCard from "~/components/SelectionCard.vue";
</script>
