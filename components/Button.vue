<template>
  <button :class="bg" class=" p-2 rounded-3xl px-5 text-white font-bold">
    <slot />
    {{ bg }}
    <slot name="after"/>
  </button>
</template>

<script setup lang="ts">
interface Props {
  bg?: string;
}
withDefaults(defineProps<Props>(), {
    bg: "bg-pink-400"
})
</script>
