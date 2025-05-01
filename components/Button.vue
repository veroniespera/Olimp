<template>
  <a href="https://www.facebook.com/"">
    <button :class="bg" class="p-2 rounded-xl px-5 text-white font-bold hover:cursor-pointer">
      <slot />
    </button>
  </a>
</template>

<script setup lang="ts">
interface Props {
  bg?: string;
}
withDefaults(defineProps<Props>(), {
  bg: "bg-sky-950",
});
</script>
