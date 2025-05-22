<template>
  <main class="pt-8 pb-8 lg:pt-16 lg:pb-10 bg-white antialiased">
    <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
      <article
        class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue text-sky-950"
      >
        <header class="mb-4 lg:mb-6 not-format">
          <address class="flex items-center mb-6 not-italic">
            <div class="inline-flex items-center mr-3 text-sm text-sky-950">
              <img
                class="mr-4 w-16 h-16 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Bivol Ion"
              />
              <div>
                <NuxtLink
                  to="#"
                  rel="author"
                  class="text-xl font-bold text-sky-950"
                  >Bivol Ion</NuxtLink
                >
                <p class="text-base text-gray-500">
                  Elev, clasa 11-a
                </p>
                <p class="text-base text-gray-500">
                  <time pubdate datetime="2022-02-08" title="February 8th, 2022"
                    >Mar. 10, 2025</time
                  >
                </p>
              </div>
            </div>
          </address>
          <h1
            class="mb-4 text-3xl font-extrabold leading-tight text-sky-950 lg:mb-6 lg:text-4xl"
          >
            Lansarea noului laborator de informatică
          </h1>
        </header>

        <p class="lead">
          Pe data de 8 februarie a avut loc inaugurarea noului laborator de
          informatică al Liceului Teoretic Olimp.
        </p>
        <p>
          Evenimentul a fost marcat de participarea profesorilor, elevilor și
          invitaților speciali din domeniul IT. Laboratorul este dotat cu
          echipamente moderne ce vor permite desfășurarea orelor de informatică
          într-un mod interactiv și eficient.
        </p>
        <p>
          Investiția în acest laborator reflectă angajamentul instituției față
          de educația digitală și pregătirea elevilor pentru carierele
          viitorului.
          <NuxtLink to="https://ltolimp.md/resurse"
            >Vezi detalii despre facilități</NuxtLink
          >.
        </p>

        <figure class="pt-4 pb-4">
          <img
            class="rounded-2xl"
            src="/public/content/newsPhotos/newsph1.jpg"
            alt=""
          />
          <figcaption class="font-thin ml-4 mt-1">
            Photo by Anonymous
          </figcaption>
        </figure>
      </article>
    </div>
  </main>
  <News></News>
</template>
