<script setup lang="ts"></script>

<template>
  <div class="navbar shadow-sm bg-sky-50 text-sky-950">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-sky-50 rounded-box z-1 mt-5 w-52 p-2 shadow"
        >
          <li><NuxtLink to="/">Acasă</NuxtLink></li>
          <li>
            <a>Despre</a>
            <ul class="p-2">
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
            <a>Resurse</a>
            <ul class="p-2">
              <li><NuxtLink to="/resurse/manuale">Manuale</NuxtLink></li>
              <li><NuxtLink to="/resurse/lectii">Lecții online</NuxtLink></li>
              <li><NuxtLink to="/resurse/orar">Orar</NuxtLink></li>
            </ul>
          </li>
        </ul>
      </div>
      <a class="text-slate-900 font-black text-2xl p-3 ">Olimp</a>
    </div>

    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><NuxtLink to="/">Acasă</NuxtLink></li>
        <li>
          <details>
            <summary>Despre</summary>
            <ul class="bg-sky-50 w-45 rounded-tl-none rounded-tr-none z-1">
              <li>
                <NuxtLink to="/despre/prezentare">Prezentare Generală</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/despre/echipa">Echipa Profesională</NuxtLink>
              </li>
              <li><NuxtLink to="/despre/istorie">Istorie</NuxtLink></li>
            </ul>
          </details>
        </li>
        <li><NuxtLink to="/noutati">Noutăți</NuxtLink></li>
        <li>
          <details>
            <summary>Resurse</summary>
            <ul class="bg-sky-50 w-45 rounded-tl-none rounded-tr-none z-1">
              <li><NuxtLink to="/resurse/manuale">Manuale</NuxtLink></li>
              <li><NuxtLink to="/resurse/lectii">Lecții online</NuxtLink></li>
              <li><NuxtLink to="/resurse/orar">Orar</NuxtLink></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
    <div class="navbar-end"></div>
  </div>
</template>
