<template>
  <nav class="bg-white shadow-sm text-sky-950 px-4 py-3 z-1 sticky top-0">
    <div class="max-w-screen-xl mx-auto flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/public/content/logo.png" alt="Logo" class="w-10 h-auto" />
        <span class="text-3xl font-black text-sky-950">Olimp</span>
      </NuxtLink>

      <!-- Hamburger button for mobile -->
      <button
        @click="isOpen = !isOpen"
        class="lg:hidden p-2 text-sky-950 focus:outline-none"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <!-- Desktop Menu -->
      <ul
        class="hidden lg:flex mt-4 gap-6 items-center justify-center font-medium"
      >
        <li class="h-10 min-w-10"><NuxtLink to="/">Acasă</NuxtLink></li>
        <li class="h-10 min-w-10 relative group">
          <span class="cursor-pointer"
            >Despre
            <svg
              class="w-3 h-3 ml-1 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <ul
            class="absolute left-0 hidden group-hover:flex flex-col bg-white mt-2 rounded shadow z-10 w-48 overflow-hidden"
          >
            <li>
              <NuxtLink
                to="/despre/prezentare"
                class="block px-4 py-2 hover:bg-gray-100"
                >Prezentare Generală</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/despre/echipa"
                class="block px-4 py-2 hover:bg-gray-100"
                >Echipa Profesională</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/despre/istorie"
                class="block px-4 py-2 hover:bg-gray-100"
                >Istorie</NuxtLink
              >
            </li>
          </ul>
        </li>
        <li class="h-10 min-w-10 flex">
          <NuxtLink to="/noutati">Noutăți</NuxtLink>
        </li>
        <li class="h-10 min-w-10 relative group">
          <span class="cursor-pointer"
            >Resurse
            <svg
              class="w-3 h-3 ml-1 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <ul
            class="absolute left-0 hidden group-hover:flex flex-col bg-white mt-2 rounded shadow z-10 w-40 overflow-hidden"
          >
            <li>
              <NuxtLink
                to="/resurse/manuale"
                class="block px-4 py-2 hover:bg-gray-100"
                >Manuale</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/resurse/lectii"
                class="block px-4 py-2 hover:bg-gray-100"
                >Lecții online</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/resurse/orar"
                class="block px-4 py-2 hover:bg-gray-100"
                >Orar</NuxtLink
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu -->
    <ul v-show="isOpen" class="lg:hidden mt-3 space-y-2 font-medium">
      <li><NuxtLink to="/">Acasă</NuxtLink></li>
      <li>
        <div class="font-semibold">Despre</div>
        <ul class="pl-4 space-y-1">
          <li>
            <NuxtLink to="/despre/prezentare">Prezentare Generală</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/despre/echipa">Echipa Profesională</NuxtLink>
          </li>
          <li><NuxtLink to="/despre/istorie">Istorie</NuxtLink></li>
        </ul>
      </li>
      <li><NuxtLink to="/noutati">Noutăți</NuxtLink></li>
      <li>
        <div class="font-semibold">Resurse</div>
        <ul class="pl-4 space-y-1">
          <li><NuxtLink to="/resurse/manuale">Manuale</NuxtLink></li>
          <li><NuxtLink to="/resurse/lectii">Lecții online</NuxtLink></li>
          <li><NuxtLink to="/resurse/orar">Orar</NuxtLink></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>
