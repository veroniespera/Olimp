<template>
  <div>
    <NuxtLink
      :to="to"
      class="card bg-slate-700 hover:bg-slate-800 shadow hover:shadow-lg transition"
    >
      <div class="card-body text-center">
        <h2 class="card-title justify-center">
          <slot name="title" />
        </h2>
        <p class="text-sm text-gray-400 text-center">
          <slot name="description" />
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
