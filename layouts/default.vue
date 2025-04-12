<template>
  <div>
    <header>Header</header>
    <div class="tot">
        <aside>Sidebar</aside>
        <slot />
    </div>
    <footer>Footer</footer>
  </div>
</template>

<style scoped>
.tot {
    display: grid;
    grid-template-columns: auto 1fr;
}
</style>