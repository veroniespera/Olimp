<template>
  <div
    class="hero min-h-140 bg-[url(/public/content/header.jpg)] bg-cover bg-center"
  >
    <div class="hero-content text-center">
      <div class="px-10 sm:px-10 md:px-30 lg:px-60">
        <h1
         
          class="text-5xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <slot name="Title"/>
        </h1>
        <p class="py-6 text-xl">
          <slot name="Description"/>
        </p>
        <button class="btn btn-primary">
          <slot name="ButtonName" />
        </button>
      </div>
    </div>
  </div>
</template>
