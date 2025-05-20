<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6 text-sky-950">Lecții Matematică</h1>
    <Subjects :lessons="lessons" />
  </div>
</template>

<script setup>
import Subjects from '~/components/Subjects.vue'

const lessons = [
  {
    title: 'Ecuații de gradul I',
    description: 'Rezolvarea ecuațiilor simple cu o necunoscută',
    link: 'https://www.youtube.com/watch?v=exemplu1'
  },
  {
    title: 'Funcții liniare',
    description: 'Introducere în funcții și reprezentarea grafică',
    link: 'https://www.youtube.com/watch?v=exemplu2'
  },
  {
    title: 'Inecuatii',
    description: 'Metode de rezolvare și interpretări grafice',
    link: 'https://www.youtube.com/watch?v=exemplu3'
  }
]
</script>