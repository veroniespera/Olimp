<template>
  <div class="bg-slate-50 flex justify-center items-start p-10">
    <div class="max-w-6xl w-full flex flex-col md:flex-row gap-10">
      <div class="p-10 max-w-xl mx-auto text-sky-950 w-full">
      <div class="card bg-white shadow-md">
        <div class="card-body items-center text-center">
          <div class="avatar">
            <div class="w-32 rounded-full">
              <img :src="student.avatar" alt="Profile" />
            </div>
          </div>
          <h2 class="card-title mt-4">{{ student.name }}</h2>
          <p class="text-sm text-sky-950">
            {{ student.position }}, Clasa a {{ student.grade }}-a
            {{ student.section }}
          </p>

          <select
            v-model="selectedYear"
            class="select select-bordered w-full max-w-xs my-4 text-white bg-sky-950"
          >
            <option v-for="year in years" :key="year" :value="year">
              {{ year }}
            </option>
          </select>

          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4 w-full text-left"
          >
            <div v-for="(label, key) in ['Semestrul I', 'Semestrul II', 'Finală']" :key="key">
              <h3 class="font-bold mb-2">{{ label }}</h3>
              <div
                v-for="(subjectGrades, subject) in computedGrades"
                :key="subject"
                class="flex justify-between"
              >
                <span class="font-semibold">{{ subject }}:</span>
                <span>{{ subjectGrades[label] ?? '—' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="mt-8 text-left w-full text-sky-950">
        <label class="block mb-2 font-semibold">Alege o dată pentru orar</label>
        <input
          type="date"
          v-model="selectedDate"
          class="input input-bordered w-full max-w-xs text-white bg-sky-950"
        />

        <div class="mt-4" v-if="daySchedule.length">
          <h3 class="font-bold mb-2">Orar și teme pentru {{ dayName }}</h3>
          <ul class="space-y-2">
            <li v-for="(item, idx) in daySchedule" :key="idx" class="p-2 rounded bg-white shadow-sm">
              <div class="font-semibold">{{ item }}</div>
              <div v-if="homeworkMap[item]" class="text-sm mt-1 text-sky-950">
                <div>Temă: {{ homeworkMap[item].tema }}</div>
                <div v-if="homeworkMap[item].nota">Notă: {{ homeworkMap[item].nota }}</div>
              </div>
              <div v-else class="text-sm mt-1 text-gray-400 italic">Fără temă.</div>
            </li>
          </ul>
        </div>
        <div v-else class="mt-4 text-sky-950">
          Nu există orar pentru această zi.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import studentData from "~/server/data/student-data.json";
import schedule from "~/server/data/schedule.json";
import homeworkData from '~/server/data/homework.json';

const student = ref(studentData);
const years = Array.from({ length: 12 }, (_, i) => `Clasa ${i + 1}`);
const selectedYear = ref(`Clasa ${student.value.grade}`);

// Watch selectedYear and update student.value.grade accordingly
watch(selectedYear, (newVal) => {
  const match = newVal.match(/\d+/);
  if (match) student.value.grade = parseInt(match[0]);
});

function isSemester1(dateStr) {
  const month = new Date(dateStr).getMonth();
  return month >= 8 && month <= 11; // Sept–Dec
}

function isSemester2(dateStr) {
  const month = new Date(dateStr).getMonth();
  return month >= 0 && month <= 4; // Jan–May
}

function computeAverage(grades) {
  if (!grades.length) return null;
  const sum = grades.reduce((a, b) => a + parseFloat(b), 0);
  return (sum / grades.length).toFixed(2);
}

const classKey = computed(() => `Clasa ${student.value.grade}`);

const computedGrades = computed(() => {
  const classHomework = homeworkData[classKey.value];
  if (!classHomework) return {};

  const subjects = {};
  for (const [dateStr, entries] of Object.entries(classHomework)) {
    for (const { disciplina, nota } of entries) {
      if (!nota) continue;
      const sem = isSemester1(dateStr) ? 'Semestrul I' : 'Semestrul II';
      subjects[disciplina] = subjects[disciplina] || {
        'Semestrul I': [],
        'Semestrul II': []
      };
      subjects[disciplina][sem].push(nota);
    }
  }

  const result = {};
  for (const [subject, values] of Object.entries(subjects)) {
    const sem1 = computeAverage(values['Semestrul I']);
    const sem2 = computeAverage(values['Semestrul II']);
    const final =
      sem1 && sem2 ? ((+sem1 + +sem2) / 2).toFixed(2) : sem1 || sem2 || null;

    result[subject] = {
      'Semestrul I': sem1,
      'Semestrul II': sem2,
      'Finală': final
    };
  }

  return result;
});

// Schedule-related logic
const selectedDate = ref(new Date().toISOString().split("T")[0]);
const dayName = computed(() => {
  const date = new Date(selectedDate.value);
  return ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"][
    date.getDay()
  ];
});

const daySchedule = computed(
  () => schedule[classKey.value]?.[dayName.value] || []
);

const homeworkForDay = computed(() => {
  const date = selectedDate.value;
  return homeworkData[classKey.value]?.[date] || [];
});

const homeworkMap = computed(() => {
  const map = {};
  for (const entry of homeworkForDay.value) {
    map[entry.disciplina] = { tema: entry.tema, nota: entry.nota };
  }
  return map;
});
</script>
