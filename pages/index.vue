<template>
  <div class="bg-sky-50">
    <Hero>
      <template #Title>Bun venit!</template>
      <template #Description
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        autem ab aspernatur nemo voluptate reprehenderit totam adipisci aliquid
        dolore omnis? Placeat beatae laborum quaerat hic cupiditate illum
        voluptas veniam nobis.
      </template>
      <template #ButtonName> Bun venit!</template>
    </Hero>
    <div>
      <h2 class="text-2xl text-center font-bold pt-10 text-cyan-900">Noutăți</h2>
      <CardScrollSection></CardScrollSection>
    </div>
    <Contact></Contact>
  </div>
</template>
