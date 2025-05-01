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
                alt="Jese Leos"
              />
              <div>
                <a href="#" rel="author" class="text-xl font-bold text-sky-950"
                  >Jese Leos</a
                >
                <p class="text-base text-gray-500">
                  Graphic Designer, educator & CEO Flowbite
                </p>
                <p class="text-base text-gray-500">
                  <time pubdate datetime="2022-02-08" title="February 8th, 2022"
                    >Feb. 8, 2022</time
                  >
                </p>
              </div>
            </div>
          </address>
          <h1
            class="mb-4 text-3xl font-extrabold leading-tight text-sky-950 lg:mb-6 lg:text-4xl"
          >
            Best practices for successful prototypes
          </h1>
        </header>

        <p class="lead">
          Flowbite is an open-source library of UI components built with the
          utility-first classes from Tailwind CSS. It also includes interactive
          elements such as dropdowns, modals, datepickers.
        </p>
        <p>
          Before going digital, you might benefit from scribbling down some
          ideas in a sketchbook. This way, you can think things through before
          committing to an actual design project.
        </p>
        <p>
          But then I found a
          <a href="https://flowbite.com"
            >component library based on Tailwind CSS called Flowbite</a
          >. It comes with the most commonly used UI components, such as
          buttons, navigation bars, cards, form elements, and more which are
          conveniently built with the utility classes from Tailwind CSS.
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
        <h2>Getting started with Flowbite</h2>
        <p>
          First of all you need to understand how Flowbite works. This library
          is not another framework. Rather, it is a set of components based on
          Tailwind CSS that you can just copy-paste from the documentation.
        </p>
        <p>
          It also includes a JavaScript file that enables interactive
          components, such as modals, dropdowns, and datepickers which you can
          optionally include into your project via CDN or NPM.
        </p>
      </article>
    </div>
  </main>
  <News></News>
</template>
