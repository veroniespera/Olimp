<template>
  <div
    class="hero min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] bg-[url(/content/HeaderNew.jpg)] bg-cover bg-center relative"
  >
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="hero-content text-center ">

      <div class="text-white px-20 sm:px-8 md:px-30 lg:px-50">
        <h1 class="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
          <slot name="Title" />
        </h1>
        <p class="pt-6 text-md md:text-lg lg:text-xl">
          <slot name="Quote" />
        </p>
        <p class="pb-6 italic text-right text-md md:text-lg lg:text-xl">
          <slot name="Author" /></p>
        <NuxtLink to="/despre/prezentare">
          <button class="btn text-md bg-sky-800 border-0 px-4 sm:px-6 lg:px-7">
            <slot name="ButtonName" />
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
