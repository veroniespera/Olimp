<template>
  <div class="px-4 sm:px-8 md:px-10 lg:px-20 py-10">
    <div class="flex items-center gap-4">
      <button
        @click="scrollLeft"
        class="text-sky-950 text-2xl hover:cursor-pointer hidden sm:block"
      >
        ←
      </button>

      <div class="flex-1 overflow-hidden">
        <div
          ref="scrollContainer"
          class="flex gap-4 overflow-x-auto scroll-smooth pb-2"
        >
          <CardNews
            v-for="(item, i) in news"
            :key="i"
            :img="item.img"
            class="shrink-0"
          >
            <template #Titlu>{{ item.title }}</template>
            <template #Paragraf>{{ item.text }}</template>
          </CardNews>
        </div>
      </div>

      <button
        @click="scrollRight"
        class="text-sky-950 text-2xl hover:cursor-pointer hidden sm:block"
      >
        →
      </button>
    </div>
  </div>
</template>

<script setup>
const scrollContainer = ref(null);
const scrollLeft = () =>
  scrollContainer.value?.scrollBy({ left: -300, behavior: "smooth" });
const scrollRight = () =>
  scrollContainer.value?.scrollBy({ left: 300, behavior: "smooth" });

const news = [
  { title: "Titlu 1", text: "Text 1", img: "/content/news1.jpg" },
  { title: "Titlu 2", text: "Text 2", img: "/content/news1.jpg" },
  { title: "Titlu 3", text: "Text 3", img: "/content/news1.jpg" },
  { title: "Titlu 4", text: "Text 4", img: "/content/news1.jpg" },
  { title: "Titlu 5", text: "Text 5", img: "/content/news1.jpg" },
];
</script>
