<template>
  <div class="bg-slate-50 flex ">
    <div class="p-10 max-w-lg mx-auto text-gray-800">
      <div class="card bg-white shadow-md">
        <div class="card-body items-center text-center">
          <div class="avatar">
            <div class="w-32 rounded-full">
              <img :src="student.avatar" alt="Profile" />
            </div>
          </div>
          <h2 class="card-title mt-4">{{ student.name }}</h2>
          <p class="text-sm text-gray-800">
            {{ student.position }}, Clasa a {{ student.grade }}-a
            {{ student.section }}
          </p>

          <select
            v-model="selectedYear"
            class="select select-bordered w-full max-w-xs my-4 text-white"
          >
            <option v-for="year in years" :key="year" :value="year">
              {{ year }}
            </option>
          </select>

          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 w-full text-left"
          >
            <div
              v-for="(label, key) in ['Semestrul I', 'Semestrul II', 'Finală']"
              :key="key"
            >
              <h3 class="font-bold mb-2">{{ label }}</h3>
              <div
                v-for="(value, subject) in yearMarks[label]"
                :key="subject"
                class="flex justify-between"
              >
                <span class="font-semibold">{{ subject }}:</span>
                <span>{{ value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 text-left w-full text-black">
      <label class="block mb-2 font-semibold">Alege o dată pentru orar</label>
      <input
        type="date"
        v-model="selectedDate"
        class="input input-bordered w-full max-w-xs text-white"
      />

      <div class="mt-4" v-if="daySchedule.length">
        <h3 class="font-bold mb-2">Orar pentru {{ dayName }}</h3>
        <ul class="list-disc list-inside space-y-1">
          <li v-for="(item, idx) in daySchedule" :key="idx">{{ item }}</li>
        </ul>
      </div>
      <div v-else class="mt-4 text-gray-500">
        Nu există orar pentru această zi.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import studentData from "~/server/data/student-data.json";
import schedule from "~/server/data/schedule.json";

const student = ref(studentData);
const years = Object.keys(student.value.marks);
const selectedYear = ref(`Clasa ${student.value.grade}`);

const yearMarks = computed(() => student.value.marks[selectedYear.value] || {});

// Schedule-related logic
const selectedDate = ref(new Date().toISOString().split("T")[0]);
const dayName = computed(() => {
  const date = new Date(selectedDate.value);
  return ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"][
    date.getDay()
  ];
});
const classKey = computed(() => `Clasa ${student.value.grade}`);
const daySchedule = computed(
  () => schedule[classKey.value]?.[dayName.value] || []
);
</script>
