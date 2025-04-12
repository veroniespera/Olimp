<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <Button bg=" bg-gray-400">Apasa-l</Button>
    <Button id="ex">Apasa-l1</Button>
    <Button bg=" bg-gray-500">Apasa-l2</Button>
    <Button>
      <template #after>nu apasa</template>
      <template #default> Apasa-l3 </template>
    </Button>
  </div>
</template>
