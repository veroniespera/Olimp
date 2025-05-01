<template>
  <div
    class="pl-20 py-10 pr-20 bg-white flex relative overflow-x-auto flex-col justify-start min-h-120"
  >
    <section class="filter-section text-gray-700 pb-3">
      <label
        for="manual-class"
        class="block mb-2 font-semibold text-gray-700 pb-3 text-sm"
        >Selectează clasa:</label
      >

      <section class="filter-section text-gray-700 pb-3">
        <select
          id="class-filter"
          v-model="selectedClass"
          @change="filterSchedule"
        >
          <option value="clasa1">Clasa I</option>
          <option value="clasa2">Clasa a II-a</option>
          <option value="clasa3">Clasa a III-a</option>
          <option value="clasa4">Clasa a IV-a</option>
          <option value="clasa5">Clasa a V-a</option>
          <option value="clasa6">Clasa a VI-a</option>
          <option value="clasa7">Clasa a VII-a</option>
          <option value="clasa8">Clasa a VIII-a</option>
          <option value="clasa9">Clasa a IX-a</option>
          <option value="clasa10">Clasa a X-a</option>
          <option value="clasa11">Clasa a XI-a</option>
          <option value="clasa12">Clasa a XII-a</option>
        </select>
      </section>

      <div
        v-if="selectedClass"
        class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full items-start"
      >
        <h2 class="font-semibold text-sky-950 text-sm mb-2">
          Manuale disponibile:
        </h2>
        <a
          v-for="manual in manualsByClass[selectedClass] || []"
          :key="manual.title"
          :href="manual.link"
          class="block text-sky-950 hover:underline break-words w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ manual.title }}
        </a>
      </div>
    </section>
  </div>
</template>
<script>
import manuals from "@/assets/manuale.json";

export default {
  data() {
    return {
      selectedClass: "clasa1",
      manualsByClass: manuals.materials.reduce((acc, entry) => {
        const match = entry.class.match(/Clasa a ([IVXLC]+|I)(?:-a)?/i);
        const romanToArabic = {
          I: "1",
          II: "2",
          III: "3",
          IV: "4",
          V: "5",
          VI: "6",
          VII: "7",
          VIII: "8",
          IX: "9",
          X: "10",
          XI: "11",
          XII: "12",
        };
        const key = match
          ? `clasa${romanToArabic[match[1]]}`
          : entry.class.toLowerCase().replace(/\s/g, "");
        acc[key] = entry.items;
        return acc;
      }, {}),
    };
  },
  mounted() {
    this.filterSchedule();
  },
  methods: {
    filterSchedule() {
      // existing or placeholder method
    },
  },
};
</script>
