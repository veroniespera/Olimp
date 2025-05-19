<template>
  <div
    class="p-10 bg-white flex relative overflow-x-auto flex-col justify-start"
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
        <option value="Clasa 1">Clasa I</option>
        <option value="Clasa 2">Clasa a II-a</option>
        <option value="Clasa 3">Clasa a III-a</option>
        <option value="Clasa 4">Clasa a IV-a</option>
        <option value="Clasa 5">Clasa a V-a</option>
        <option value="Clasa 6">Clasa a VI-a</option>
        <option value="Clasa 7">Clasa a VII-a</option>
        <option value="Clasa 8">Clasa a VIII-a</option>
        <option value="Clasa 9">Clasa a IX-a</option>
        <option value="Clasa 10">Clasa a X-a</option>
        <option value="Clasa 11">Clasa a XI-a</option>
        <option value="Clasa 12">Clasa a XII-a</option>
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
import schedules from '~/server/data/schedule.json';

export default {
  data() {
    return {
      selectedClass: "Clasa 1",
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
