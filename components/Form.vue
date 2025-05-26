<script lang="ts" setup>
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
const formSchema = z.object({
  name: z.string(),
  email: z.string().email("Emailul trebuie să fie valid"),
  message: z.string(),
});
const formState = reactive({
  name: undefined,
  email: undefined,
  message: undefined,
});
type Schema = z.output<typeof formSchema>;
function formSubmission(event: FormSubmitEvent<Schema>) {
  console.log(event);
}
</script>
<template>
  <div
    class="lg:rounded-r-3xl rounded-3xl flex justify-center bg-gradient-to-br from-sky-300 to-sky-700 p-6 md:p-10 md:px-6 shadow-xl"
  >
    <UForm
      :state="formState"
      :schema="formSchema"
      @submit="formSubmission"
      class="p-10 rounded-md space-y-3"
    >
      <h1
        class="whitespace-nowrap text-3xl sm:text-3xl md:text-3xl font-bold text-center px-4 text-white"
      >
        Contactează-ne!
      </h1>
      <UFormField name="name" label="Nume Prenume" size="lg"
        ><UInput
          v-model="formState.name"
          class="h-12 w-full backdrop-blur-md bg-white/90 text-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-300 focus:outline-none transition"
        />
      </UFormField>
      <UFormField v-model="formState.email" name="email" label="Email" size="lg"
        ><UInput
          class="h-12 w-full backdrop-blur-md bg-white/90 text-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-300 focus:outline-none transition"
      /></UFormField>
      <UFormField
        v-model="formState.message"
        name="message"
        label="Mesaj"
        size="lg"
        ><UTextarea
          class="w-full backdrop-blur-md bg-white/90 text-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-300 focus:outline-none transition"
        />
      </UFormField>
      <UButton
        size="lg"
        type="submit"
        label="Submit"
        class="btn w-full mt-6 bg-slate-700 hover:bg-slate-600 text-white border-0 shadow-lg py-3 text-base sm:text-lg md:text-xl rounded-lg transition transform hover:scale-[1.01]"
      >
        Trimite mesaj
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
          /></svg
      ></UButton>
    </UForm>
  </div>
</template>
