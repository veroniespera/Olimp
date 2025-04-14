<template>
  <div class="flex justify-center bg-sky-800 p-10">
    <fieldset class="fieldset bg-sky-800 rounded-box max-w-md w-full p-6">
      <legend class="font-bold text-center text-2xl px-4">Contactează-ne!</legend>

      <label class="block mb-1 mt-4 text-sky-50">Nume</label>
      <input
        type="name"
        class="input w-full bg-sky-50 text-sky-950"
        placeholder="Numele tău"
      />
      <label class="block mb-1 mt-4 text-sky-50">Email</label>
      <input
        type="email"
        class="input w-full bg-sky-50 text-sky-950"
        placeholder="exempluemail@gmail.com"
      />

      <label class="block mb-1 mt-4 text-sky-50">Mesaj</label>
      <textarea
        type="message"
        class="input w-full p-2 pl-3 bg-sky-50 text-sky-950"
        placeholder="Mesajul tău"
      ></textarea>

      <button class="btn mt-6 w-full bg-sky-950">Trimite</button>
    </fieldset>
  </div>
</template>
