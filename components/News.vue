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
    title: "Performanțele continuă!",
    text: "Suntem mândri de rezultatele la Olimpiada Republicană de Economie a elevilor!",
    img: "/content/newsPhotos/news1.jpg",
  },
  {
    title: "Gândește global, acționează local!",
    text: "LOCUL II,  în cadrul concursului raional ”Gândește global, acționează local”! ",
    img: "/content/newsPhotos/news2.jpg",
  },
  {
    title: "Clubul de Robotică Quasar Robotics ",
    text: "Am adus inovația prin dialogul deschis prin care s-a vorbit despre cum se construiește și cum se programează un robot.",
    img: "/content/newsPhotos/news3.jpg",
  },
  {
    title: "Mândru că sunt PROFESOR",
    text: "Astăzi efortul dlui a fost recunoscut în întreaga republică, obținând Diploma de onoare a Ministerului Educației și Cercetării.",
    img: "/content/newsPhotos/news4.jpg",
  },
];
</script>
