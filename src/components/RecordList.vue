<template>
  <section class="relative overflow-hidden rounded-2xl border border-red-900/50 bg-zinc-950/80 shadow-[0_0_40px_rgba(127,29,29,0.12)] backdrop-blur-xl">

    <!-- Ambient glow -->
    <div class="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-red-700/10 blur-3xl ambient-orb"></div>

    <!-- Header -->
    <div class="relative border-b border-zinc-900 p-5 sm:p-7">

      <div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

        <div>
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]"></span>

            <p class="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500">
              Database Monitor
            </p>
          </div>

          <h2 class="mt-2 text-xl font-black text-white sm:text-2xl">
            Student Records
          </h2>

          <p class="mt-1 text-sm text-zinc-500">
            {{ filteredStudents.length }} record{{ filteredStudents.length === 1 ? '' : 's' }} detected
          </p>
        </div>

        <!-- Search -->
        <div class="relative w-full sm:w-80">
          <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-red-500">
            ⌕
          </span>

          <input
            v-model="search"
            type="text"
            placeholder="Search database..."
            class="search-input"
          />
        </div>

      </div>
    </div>

    <!-- Desktop Table -->
    <div class="relative hidden overflow-x-auto md:block">

      <table class="w-full text-left">

        <thead class="border-b border-zinc-900 bg-black/50">

          <tr class="text-[10px] uppercase tracking-widest text-zinc-500">

            <th class="px-6 py-4">
              Student #
            </th>

            <th class="px-6 py-4">
              Name
            </th>

            <th class="px-6 py-4">
              Program
            </th>

            <th class="px-6 py-4">
              Year
            </th>

            <th class="px-6 py-4 text-right">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          <tr
            v-for="student in filteredStudents"
            :key="student.studentNumber"
            class="group border-b border-zinc-900/70 transition hover:bg-red-950/10"
          >

            <td class="px-6 py-5">
              <span class="font-mono text-xs font-bold text-red-500">
                {{ student.studentNumber }}
              </span>
            </td>

            <td class="px-6 py-5">
              <span class="font-semibold text-white">
                {{ student.name }}
              </span>
            </td>

            <td class="px-6 py-5">
              <span class="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300">
                {{ student.program }}
              </span>
            </td>

            <td class="px-6 py-5 text-sm text-zinc-400">
              {{ student.yearLevel }}
            </td>

            <td class="px-6 py-5">
              <div class="flex justify-end gap-2">

                <button
                  @click="$emit('edit', student)"
                  class="action-button"
                  title="Edit"
                >
                  EDIT
                </button>

                <button
                  @click="$emit('delete', student)"
                  class="delete-button"
                  title="Delete"
                >
                  DELETE
                </button>

              </div>
            </td>

          </tr>

        </tbody>

      </table>

      <!-- Empty -->
      <div
        v-if="filteredStudents.length === 0"
        class="px-6 py-16 text-center"
      >
        <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-red-900/50 bg-red-950/20 text-xl text-red-500">
          ∅
        </div>

        <p class="font-bold text-zinc-300">
          NO RECORDS FOUND
        </p>

        <p class="mt-1 text-sm text-zinc-600">
          Try another search query.
        </p>
      </div>

    </div>

    <!-- Mobile Cards -->
    <div class="relative space-y-3 p-4 md:hidden">

      <article
        v-for="student in filteredStudents"
        :key="student.studentNumber"
        class="rounded-xl border border-zinc-800 bg-black/60 p-4"
      >

        <div class="flex items-start justify-between gap-3">

          <div>
            <p class="font-mono text-xs font-bold text-red-500">
              {{ student.studentNumber }}
            </p>

            <h3 class="mt-1 font-bold text-white">
              {{ student.name }}
            </h3>
          </div>

          <span class="rounded-md border border-zinc-800 px-2 py-1 text-[10px] text-zinc-400">
            {{ student.yearLevel }}
          </span>

        </div>

        <div class="mt-4 grid grid-cols-2 gap-2 text-xs">

          <div class="rounded-lg bg-zinc-900/70 p-3">
            <p class="text-zinc-600">PROGRAM</p>
            <p class="mt-1 font-semibold text-zinc-300">
              {{ student.program }}
            </p>
          </div>

          <div class="rounded-lg bg-zinc-900/70 p-3">
            <p class="text-zinc-600">YEAR</p>
            <p class="mt-1 font-semibold text-zinc-300">
              {{ student.yearLevel }}
            </p>
          </div>

        </div>

        <div class="mt-4 flex gap-2">

          <button
            @click="$emit('edit', student)"
            class="action-button flex-1"
          >
            EDIT
          </button>

          <button
            @click="$emit('delete', student)"
            class="delete-button flex-1"
          >
            DELETE
          </button>

        </div>

      </article>

      <div
        v-if="filteredStudents.length === 0"
        class="py-12 text-center"
      >
        <p class="font-bold text-zinc-400">
          NO RECORDS FOUND
        </p>
      </div>

    </div>

  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  students: {
    type: Array,
    default: () => []
  }
})

defineEmits([
  'edit',
  'delete'
])

const search = ref('')

const filteredStudents = computed(() => {

  const query = search.value.trim().toLowerCase()

  if (!query) {
    return props.students
  }

  return props.students.filter(student =>

    student.studentNumber
      .toLowerCase()
      .includes(query) ||

    student.name
      .toLowerCase()
      .includes(query) ||

    student.program
      .toLowerCase()
      .includes(query)

  )
})
</script>

<style scoped>
.search-input {
  width: 100%;
  border: 1px solid rgb(63 63 70);
  border-radius: 0.75rem;
  background: rgba(9, 9, 11, 0.9);
  padding: 0.75rem 1rem 0.75rem 2.75rem;
  color: white;
  outline: none;
  transition: all 0.2s ease;
}

.search-input::placeholder {
  color: rgb(82 82 91);
}

.search-input:focus {
  border-color: rgb(239 68 68);
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.1);
}

.action-button,
.delete-button {
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.65rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  transition: all 0.2s ease;
}

.action-button {
  border: 1px solid rgb(63 63 70);
  color: rgb(161 161 170);
}

.action-button:hover {
  border-color: rgb(239 68 68);
  color: rgb(248 113 113);
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.12);
}

.delete-button {
  border: 1px solid rgba(127, 29, 29, 0.7);
  background: rgba(69, 10, 10, 0.2);
  color: rgb(239 68 68);
}

.delete-button:hover {
  border-color: rgb(239 68 68);
  background: rgba(127, 29, 29, 0.25);
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.15);
}

.ambient-orb {
  animation: orb 9s ease-in-out infinite alternate;
}

@keyframes orb {
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(50px, -30px);
  }
}
</style>