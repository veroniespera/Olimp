<template>
  <div>
    <NuxtLink :to="path">
      <div
        class="h-40 bg-cover text-center overflow-hidden rounded"
        :style="{ backgroundImage: `url(${bg})` }"
        :title="title"
      ></div>
      <div
        class="text-sky-950 inline-block font-semibold text-md my-2 hover:text-sky-600 transition duration-500 ease-in-out"
      >
        <slot />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  path: {
    type: String,
    required: true
  },
  bg: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
</script>
