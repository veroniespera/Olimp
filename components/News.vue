<template>
  <aside
    aria-label="Related articles"
    class="py-12 px-5 md:px-25 lg:px-10 bg-white text-sky-950"
  >
    <h2 class="pb-5 text-3xl font-bold flex justify-center">Noutăți</h2>
    <div
      class="grid grid-cols-2 gap-5 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center"
    >
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
