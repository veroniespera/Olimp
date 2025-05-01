<template>
  <div
    class="hero min-h-140 bg-[url(/content/HeaderNew.jpg)] bg-cover bg-center relative"
  >
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="hero-content text-center">
      <div class="text-white px-10 sm:px-10 md:px-30 lg:px-60">
        <h1 class="text-5xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          <slot name="Title" />
        </h1>
        <p class="py-6 text-xl">
          <slot name="Description" />
        </p>
        <NuxtLink to="/despre/prezentare">
          <button class="btn bg-sky-800 border-0 pl-7 pr-7">
            <slot name="ButtonName" />
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
