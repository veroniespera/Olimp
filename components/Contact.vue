<template>
  <div class="grid md:grid-cols-2 min-h-[32rem] lg:px-40 px-4 gap-5 overflow-hidden max-w-full">
    <div
      class="md:px-10 lg:rounded-l-3xl rounded-3xl bg-gradient-to-br from-slate-700 to-slate-500 text-sky-100 p-6 md:p-10 text-base sm:text-lg md:text-xl flex flex-col gap-6 justify-center shadow-xl w-full py-12"
    >
      <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
        Informații de contact
      </h2>
      <ul class="space-y-4 list-none pl-0">
        <li class="flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mt-1 text-sky-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <a href="tel:+37326851481" class="hover:underline">+373 26 851 481</a>
        </li>
        <li class="flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mt-1 text-sky-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a href="mailto:email@example.org" class="hover:underline"
            >email@example.org</a
          >
        </li>
        <li class="flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mt-1 text-sky-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <a
            href="https://maps.app.goo.gl/hQuZZkJLPTuUGHS38"
            target="_blank"
            rel="noopener"
            class="hover:underline"
          >
            str. Stefan cel Mare, Costești, <br />Republica Moldova
          </a>
        </li>
        <li class="flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mt-1 text-sky-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>8:00-17:00</span>
        </li>
      </ul>
    </div>

    <div
      class="lg:rounded-r-3xl rounded-3xl flex justify-center bg-gradient-to-br from-sky-300 to-sky-700 p-6 md:p-10 md:px-6 shadow-xl"
    >
      <fieldset class="fieldset bg-transparent rounded-box p-5 gap-3">
        <legend
          class="whitespace-nowrap text-3xl sm:text-3xl md:text-3xl font-bold text-center px-4 text-white"
        >
          Contactează-ne!
        </legend>

        <div
          class="flex flex-col gap-4 text-white text-base sm:text-lg md:text-xl"
        >
          <div class="space-y-1">
            <label class="font-medium text-sky-100">Nume</label>
            <input
              type="name"
              class="input bg-white/90 text-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-300 focus:outline-none transition"
              placeholder="Numele tău"
            />
          </div>

          <div class="space-y-1">
            <label class="font-medium text-sky-100">Email</label>
            <input
              type="email"
              class="input bg-white/90 text-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-300 focus:outline-none transition"
              placeholder="exempluemail@gmail.com"
            />
          </div>

          <div class="space-y-1">
            <label class="font-medium text-sky-100">Mesaj</label>
            <textarea
              type="message"
              class="input p-3 bg-white/90 text-slate-800 rounded-lg focus:ring-2 focus:ring-sky-300 focus:outline-none transition min-h-[70px]"
              placeholder="Mesajul tău"
            ></textarea>
          </div>
        </div>

        <button
          class="btn mt-6 bg-slate-700 hover:bg-slate-600 text-white border-0 shadow-lg py-3 text-base sm:text-lg md:text-xl rounded-lg transition transform hover:scale-[1.01]"
        >
          Trimite Mesaj
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </fieldset>
    </div>
  </div>
  <div class="h-20"></div>
</template>
