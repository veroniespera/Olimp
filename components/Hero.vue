<template>
  <div
    class="hero min-h-140 bg-[url(/content/HeaderNew.jpg)] bg-cover bg-center relative"
  >
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="hero-content lg:text-center">
      <div class="text-white px-8 sm:px-8 md:px-30 lg:px-60">
        <h1
          class="text-4xl text-left lg:text-center font-bold sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <slot name="Title" />
        </h1>
        <p class="py-6 max-w-2xl text-xl mx-auto text-left lg:text-center">
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
