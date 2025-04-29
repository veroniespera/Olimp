<template>
  <div class="flex justify-center gap-1 h-120">
    <div
      class="rounded-l-3xl bg-slate-800 text-sky-100 p-10 h-110 w-110 text-xl flex flex-col gap-5.5 justify-center"
    >
      <h2 class="text-3xl font-bold">Info</h2>
      <ul class="space-y-2 list-disc pl-5">
        <li>+373 26 851 481</li>
        <li>email@gmail.com</li>
        <li>str. Stefan cel Mare, Costești, <br>Republica Moldova</li>
        <li>8:00-17:00</li>
      </ul>
    </div>
    <div class="rounded-r-3xl flex justify-center bg-sky-600 p-10 h-110 w-110">
      <fieldset
        class="fieldset bg-sky-600 rounded-box max-w-md w-full p-5 gap-2"
      >
        <legend class="text-2xl font-bold text-centerpx-4">
          Contactează-ne!
        </legend>
        <div class="flex flex-col gap-2 text-sky-50 text-lg ">
          <label>Nume</label>
          <input
            type="name"
            class="input w-full bg-sky-50 text-sky-800"
            placeholder="Numele tău"
          />
          <label>Email</label>
          <input
            type="email"
            class="input w-full bg-sky-50 text-sky-800"
            placeholder="exempluemail@gmail.com"
          />

          <label>Mesaj</label>
          <textarea
            type="message"
            class="input w-full p-2 pl-3 bg-sky-50 purple-800"
            placeholder="Mesajul tău"
          ></textarea>
        </div>

        <button class="btn mt-2.5 w-full bg-sky-950 border-0 shadow-xl">
          Trimite
        </button>
      </fieldset>
    </div>
  </div>
</template>
