<template>
  <div
    class="p-10 bg-white flex relative overflow-x-auto flex-col justify-start h-100"
  >
    <label
      for="class"
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

    <div class="overflow-x-auto w-full">
      <table
        id="schedule-table"
        class="min-w-full text-xs sm:text-sm text-left rtl:text-right text-gray-500 table-fixed"
      >
        <thead
          id="schedule-head"
          class="text-xs text-gray-700 uppercase bg-gray-50"
        >
          <!-- generat dinamic -->
        </thead>
        <tbody id="schedule-body" class="bg-white divide-y divide-gray-200">
          <!-- generat dinamic -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const schedules = {
  clasa1: {
    Luni: ["Comunicare în limba română", "Matematică", "Muzică"],
    Marți: ["Educație fizică", "Desen", "Comunicare în limba română"],
    Miercuri: ["Matematică", "Citire", "Joc și mișcare"],
    Joi: ["Comunicare în limba română", "Educație civică", "Desen"],
    Vineri: ["Matematică", "Muzică", "Educație fizică"],
  },
  clasa2: {
    Luni: ["Matematică", "Comunicare în limba română", "Citire"],
    Marți: ["Educație fizică", "Desen", "Comunicare în limba română"],
    Miercuri: ["Matematică", "Muzică", "Joc și mișcare"],
    Joi: ["Comunicare în limba română", "Educație civică", "Matematică"],
    Vineri: ["Citire", "Educație plastică", "Educație fizică"],
  },
  clasa3: {
    Luni: ["Limba română", "Matematică", "Educație muzicală"],
    Marți: ["Educație fizică", "Limba română", "Citire"],
    Miercuri: ["Matematică", "Educație civică", "Joc și mișcare"],
    Joi: ["Limba română", "Desen", "Matematică"],
    Vineri: ["Limba română", "Muzică", "Educație fizică"],
  },
  clasa4: {
    Luni: ["Limba română", "Matematică", "Citire"],
    Marți: ["Educație plastică", "Limba română", "Desen"],
    Miercuri: ["Matematică", "Educație civică", "Muzică"],
    Joi: ["Limba română", "Matematică", "Educație fizică"],
    Vineri: ["Citire", "Educație plastică", "Joc și mișcare"],
  },
  clasa5: {
    Luni: ["Română", "Matematică", "Biologie", "Istorie", "Geografie"],
    Marți: ["Engleză", "Educație fizică", "Română", "Muzică", "Matematică"],
    Miercuri: ["Chimie", "Fizică", "Română", "Biologie", "Geografie"],
    Joi: ["Matematică", "Engleză", "Istorie", "Română", "Sport"],
    Vineri: ["Biologie", "Matematică", "Română", "Educație plastică", "Chimie"],
  },
  clasa6: {
    Luni: ["Română", "Matematică", "Chimie", "Fizică", "Biologie"],
    Marți: ["Istorie", "Engleză", "Română", "Geografie", "Sport"],
    Miercuri: [
      "Matematică",
      "Educație civică",
      "Română",
      "Muzică",
      "Geografie",
    ],
    Joi: ["Română", "Chimie", "Matematică", "Sport", "Fizică"],
    Vineri: ["Matematică", "Biologie", "Română", "Educație plastică", "Chimie"],
  },
  clasa7: {
    Luni: ["Română", "Matematică", "Istorie", "Chimie", "Sport"],
    Marți: ["Fizică", "Educație civică", "Română", "Geografie", "Engleză"],
    Miercuri: ["Matematică", "Chimie", "Istorie", "Biologie", "Română"],
    Joi: ["Geografie", "Fizică", "Română", "Educație plastică", "Sport"],
    Vineri: ["Română", "Engleză", "Matematică", "Chimie", "Istorie"],
  },
  clasa8: {
    Luni: ["Matematică", "Fizică", "Chimie", "Engleză", "Educație fizică"],
    Marți: ["Română", "Istorie", "Biologie", "Matematică", "Muzică"],
    Miercuri: ["Chimie", "Geografie", "Sport", "Fizică", "Matematică"],
    Joi: ["Engleză", "Română", "Istorie", "Educație civică", "Fizică"],
    Vineri: ["Matematică", "Educație plastică", "Română", "Chimie", "Biologie"],
  },
  clasa9: {
    Luni: ["Matematică", "Informatică", "Fizică", "Chimie", "Biologie"],
    Marți: ["Română", "Istorie", "Geografie", "Engleză", "Sport"],
    Miercuri: [
      "Matematică",
      "Informatică",
      "Educație civică",
      "Română",
      "Biologie",
    ],
    Joi: ["Chimie", "Geografie", "Română", "Muzică", "Sport"],
    Vineri: ["Fizică", "Biologie", "Matematică", "Chimie", "Educație plastică"],
  },
  clasa10: {
    Luni: ["Română", "Matematică", "Informatică", "Fizică", "Educație civică"],
    Marți: ["Geografie", "Chimie", "Biologie", "Engleză", "Sport"],
    Miercuri: ["Matematică", "Română", "Istorie", "Informatică", "Chimie"],
    Joi: [
      "Educație plastică",
      "Română",
      "Fizică",
      "Geografie",
      "Educație civică",
    ],
    Vineri: ["Română", "Matematică", "Sport", "Muzică", "Chimie"],
  },
  clasa11: {
    Luni: ["Fizică", "Informatică", "Matematică", "Engleză", "Română"],
    Marți: ["Chimie", "Biologie", "Istorie", "Sport", "Geografie"],
    Miercuri: ["Matematică", "Educație civică", "Chimie", "Română", "Biologie"],
    Joi: ["Informatică", "Muzică", "Matematică", "Fizică", "Sport"],
    Vineri: ["Română", "Matematică", "Chimie", "Educație plastică", "Fizică"],
  },
  clasa12: {
    Luni: ["Informatică", "Matematică", "Română", "Geografie", "Fizică"],
    Marți: ["Engleză", "Chimie", "Biologie", "Educație plastică", "Sport"],
    Miercuri: ["Matematică", "Română", "Chimie", "Educație civică", "Istorie"],
    Joi: ["Informatică", "Fizică", "Geografie", "Sport", "Română"],
    Vineri: [
      "Română",
      "Matematică",
      "Muzică",
      "Educație civică",
      "Biologie",
      "Matematică",
    ],
  },
};

export default {
  data() {
    return {
      selectedClass: "clasa1",
    };
  },
  mounted() {
    this.filterSchedule({ target: { value: this.selectedClass } });
  },
  methods: {
    filterSchedule(event) {
      const selectedClass = event.target.value;
      const tbody = document.getElementById("schedule-body");
      const thead = document.getElementById("schedule-head");

      tbody.innerHTML = "";
      thead.innerHTML = "";

      const selected = schedules[selectedClass];
      if (selected) {
        const zile = Object.entries(selected);
        const maxLectii = Math.max(...zile.map(([_, lectii]) => lectii.length));

        const headRow = document.createElement("tr");
        headRow.innerHTML = `<th class="px-6 py-3"></th>`;
        for (let i = 1; i <= maxLectii; i++) {
          headRow.innerHTML += `<th class="px-6 py-3">${i}</th>`;
        }
        thead.appendChild(headRow);

        zile.forEach(([zi, lectii]) => {
          const row = document.createElement("tr");
          row.innerHTML = `<td class="px-6 py-4 font-medium text-sky-950 whitespace-nowrap">${zi}</td>`;
          for (let i = 0; i < maxLectii; i++) {
            const cell = document.createElement("td");
            cell.textContent = lectii[i] || "";
            cell.classList.add("px-6", "py-4", "border-b", "border-gray-200");
            row.appendChild(cell);
          }
          tbody.appendChild(row);
        });
      } else {
        thead.innerHTML = "";
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="6">Nu există lecții pentru această clasă.</td>`;
        tbody.appendChild(row);
      }
    },
  },
};
</script>
