<template>
  <div :class="['mx-auto p-5 sm:p-8 md:p-12 lg:p-16 bg-white transition-all duration-700 ease-out', loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div class="col-span-1 md:col-span-12 lg:col-span-5 w-full">
        <NuxtLink to="/noutati/news1">
          <div
            class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/header.jpg)]"
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
              >Lansarea noului laborator de informatică</NuxtLink
            >
            <p class="text-gray-700 text-base mt-2">
              Elevii au participat la deschiderea oficială a noului laborator
              dotat cu echipamente moderne.
            </p>
          </div>
        </div>
      </div>

      <div class="lg:col-span-7 grid grid-cols-1  lg:grid-cols-3 gap-5 w-full">
        <div class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/header.jpg)]"
              title="Woman holding a mug"
            ></div>
            <div
              class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >
              Deschiderea anului școlar 2024–2025
            </div></NuxtLink
          >
        </div>
        <div class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/header.jpg)]"
              title="Woman holding a mug"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Olimpiada județeană de matematică</NuxtLink
          >
        </div>
        <div class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/header.jpg)]"
              title="Woman holding a mug"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Ziua sportului în curtea liceului</NuxtLink
          >
        </div>
        <div class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/header.jpg)]"
              title="Woman holding a mug"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Proiecte ecologice desfășurate de elevi</NuxtLink
          >
        </div>
        <div class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/header.jpg)]"
              title="Woman holding a mug"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Vizită la Muzeul Național de Istorie</NuxtLink
          >
        </div>
        <div class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/header.jpg)]"
              title="Woman holding a mug"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Concurs de lectură "Cărți și idei"</NuxtLink
          >
        </div>
      </div>
      <div class="sm:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/header.jpg)]"
              title="Woman holding a mug"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Atelier de robotică pentru clasele primare</NuxtLink
          >
        </div>
        <div class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/header.jpg)]"
              title="Woman holding a mug"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Deschiderea anului școlar 2024–2025</NuxtLink
          >
        </div>
        <div class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/header.jpg)]"
              title="Woman holding a mug"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Olimpiada județeană de matematică</NuxtLink
          >
        </div>
        <div class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/header.jpg)]"
              title="Woman holding a mug"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Ziua sportului în curtea liceului</NuxtLink
          >
        </div>
        <div class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/header.jpg)]"
              title="Woman holding a mug"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Proiecte ecologice desfășurate de elevi</NuxtLink
          >
        </div>
        <div class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/header.jpg)]"
              title="Woman holding a mug"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Vizită la Muzeul Național de Istorie</NuxtLink
          >
        </div>
        <div class="transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <NuxtLink to="/noutati/news1">
            <div
              class="w-full aspect-[4/3] bg-cover bg-center overflow-hidden bg-[url(/public/content/header.jpg)]"
              title="Woman holding a mug"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/noutati/news1"
            class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
            >Concurs de lectură "Cărți și idei"</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const loaded = ref(false)
onMounted(() => {
  requestAnimationFrame(() => {
    loaded.value = true
  })
})
</script>
