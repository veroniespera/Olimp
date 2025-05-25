<template>
  <div
    :class="[
      'mx-auto p-5 sm:p-8 md:p-12 lg:p-16 bg-white transition-all duration-700 ease-out',
      loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
    ]"
  >
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div class="col-span-1 md:col-span-12 lg:col-span-5 w-full">
        <NuxtLink to="/noutati/news1">
          <div
            class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/newsPhotos/news1.jpg)]"
          ></div>
        </NuxtLink>
        <div
          class="mt-3 bg-blue-100 p-4 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal w-full"
        >
          <div class="">
            <p
              to="/noutati/news1"
              class="text-xs text-sky-600 uppercase font-mediumt"
            >
              Noutăți recente
            </p>
            <NuxtLink
              to="/noutati/news1"
              class="block text-sky-950 font-bold text-2xl mb-2 hover:text-sky-600 transition duration-500 ease-in-out"
              >Performanțele continuă!</NuxtLink
            >
            <p class="text-gray-700 text-base mt-2">
              Suntem mândri de rezultatele la Olimpiada Republicană de Economie
              a elevilor!
            </p>
          </div>
        </div>
      </div>

      <div class="lg:col-span-7 grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
        <div
          class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/newsPhotos/news2.jpg)]"
              title="Imagine descriptivă știrii"
            ></div>
            <div
              class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >
              Gândește global, acționează local!
            </div></NuxtLink
          >
        </div>
        <div
          class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/newsPhotos/news3.jpg)]"
              title="Imagine descriptivă știrii"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Clubul de Robotică Quasar Robotics</NuxtLink
          >
        </div>
        <div
          class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/newsPhotos/news4.jpg)]"
              title="Imagine descriptivă știrii"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Mândru că sunt PROFESOR</NuxtLink
          >
        </div>
        <div
          class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/newsPhotos/news5.jpg)]"
              title="Imagine descriptivă știrii"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Ziua Europei la Ialoveni!
          </NuxtLink>
        </div>
        <div
          class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/newsPhotos/news6.jpg)]"
              title="Imagine descriptivă știrii"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Vizită la Muzeul Național de Istorie</NuxtLink
          >
        </div>
        <div
          class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/newsPhotos/news7.jpg)]"
              title="Imagine descriptivă știrii"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Experiențe de neuitat elevilor pe stadionul Emirates</NuxtLink
          >
        </div>
      </div>
      <div
        class="sm:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        <div
          class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/newsPhotos/news8.jpg)]"
              title="Imagine descriptivă știrii"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Deschiderea Daciadei!
          </NuxtLink>
        </div>
        <div
          class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/newsPhotos/news9.jpg)]"
              title="Imagine descriptivă știrii"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Autobuzul școlar Olimp!
          </NuxtLink>
        </div>
        <div
          class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/newsPhotos/news10.jpg)]"
              title="Imagine descriptivă știrii"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Începutul noului an de studii!</NuxtLink
          >
        </div>
        <div
          class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/newsPhotos/news11.jpg)]"
              title="Imagine descriptivă știrii"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Bunătatea va salva lumea!
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const loaded = ref(false);
onMounted(() => {
  requestAnimationFrame(() => {
    loaded.value = true;
  });
});
</script>
