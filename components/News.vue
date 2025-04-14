<template>
  <aside
    aria-label="Related articles"
    class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
  >
    <div class="px-4 mx-auto max-w-screen-xl">
      <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
        Noutăți
      </h2>
      <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <NewsCard
          v-for="(item, i) in news"
          :key="i"
          :img="item.img"
          class="shrink-0"
        >
          <template #Titlu>{{ item.title }}</template>
          <template #Paragraf>{{ item.text }}</template>
        </NewsCard>
      </div>
    </div>
  </aside>
</template>

<script setup>
const news = [
  {
    title: "Ziua Școlii",
    text: "Am sărbătorit împreună tradițiile și valorile liceului nostru prin activități culturale și artistice.",
    img: "/content/news1.jpg",
  },
  {
    title: "Concursul de Matematică",
    text: "Elevii noștri au participat la etapa națională și au obținut rezultate remarcabile.",
    img: "/content/news1.jpg",
  },
  {
    title: "Campanie de Ecologizare",
    text: "Elevii claselor a IX-a și a X-a au participat activ la curățarea parcului din apropierea școlii.",
    img: "/content/news1.jpg",
  },
  {
    title: "Vizită la Universitate",
    text: "Clasa a XII-a a vizitat Universitatea Tehnică pentru a explora oportunitățile academice.",
    img: "/content/news1.jpg",
  },
];
</script>
