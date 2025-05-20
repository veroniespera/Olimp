<template>
    <div class="p-8">
      <h1 class="text-3xl font-bold mb-6 text-sky-950">Lecții Limba Română</h1>
      <Subjects :lessons="lessons" />
    </div>
  </template>
  
  <script setup>
  import Subjects from '~/components/Subjects.vue'
  
const lessons = [
  {
    title: 'Substantivul',
    description: 'Ce este substantivul și cum se clasifică',
    link: 'https://www.youtube.com/watch?v=substantiv'
  },
  {
    title: 'Adjectivul',
    description: 'Definiție, clasificare și acordul cu substantivul',
    link: 'https://www.youtube.com/watch?v=adjectiv'
  },
  {
    title: 'Punctuația în dialog',
    description: 'Reguli de punctuație specifice dialogului',
    link: 'https://www.youtube.com/watch?v=punctuatie'
  }
]
  </script>