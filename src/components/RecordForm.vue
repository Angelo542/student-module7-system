<template>
  <section class="relative overflow-hidden rounded-2xl border border-red-900/50 bg-zinc-950/80 p-5 shadow-[0_0_40px_rgba(127,29,29,0.12)] backdrop-blur-xl sm:p-7">

    <!-- Ambient background -->
    <div class="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-600/10 blur-3xl ambient-orb"></div>

    <!-- Header -->
    <div class="relative mb-6 flex items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-2">
          <span class="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]"></span>

          <p class="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500">
            Record Interface
          </p>
        </div>

        <h2 class="mt-2 text-xl font-black text-white sm:text-2xl">
          {{ editing ? 'Modify Student' : 'Register Student' }}
        </h2>

        <p class="mt-1 text-sm text-zinc-500">
          {{ editing
            ? 'Update the selected student record.'
            : 'Enter student information to create a new record.'
          }}
        </p>
      </div>

      <div class="hidden rounded-lg border border-red-900/40 bg-black px-3 py-2 font-mono text-xs text-red-500 sm:block">
        INPUT_01
      </div>
    </div>

    <!-- Form -->
    <form @submit.prevent="submitForm" class="relative space-y-5">

      <!-- Student Number -->
      <div>
        <label class="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-400">
          Student Number
        </label>

        <input
          v-model="form.studentNumber"
          type="text"
          placeholder="e.g. 2026-001"
          required
          class="cyber-input"
        />
      </div>

      <!-- Name -->
      <div>
        <label class="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-400">
          Full Name
        </label>

        <input
          v-model="form.name"
          type="text"
          placeholder="Enter student name"
          required
          class="cyber-input"
        />
      </div>

      <!-- Program + Year -->
      <div class="grid gap-5 sm:grid-cols-2">

        <div>
          <label class="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-400">
            Program
          </label>

          <select
            v-model="form.program"
            required
            class="cyber-input"
          >
            <option value="" disabled>
              Select program
            </option>

            <option value="BSCS">
              BS Computer Science
            </option>

            <option value="BSIT">
              BS Information Technology
            </option>

            <option value="BSIS">
              BS Information Systems
            </option>

            <option value="BSEMC">
              BS Entertainment & Multimedia
            </option>
          </select>
        </div>

        <div>
          <label class="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-400">
            Year Level
          </label>

          <select
            v-model="form.yearLevel"
            required
            class="cyber-input"
          >
            <option value="" disabled>
              Select year
            </option>

            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>

      </div>

      <!-- Buttons -->
      <div class="flex flex-col gap-3 pt-2 sm:flex-row">

        <button
          type="submit"
          class="cyber-button flex-1"
        >
          <span class="mr-2">+</span>

          {{ editing ? 'UPDATE RECORD' : 'ADD RECORD' }}
        </button>

        <button
          v-if="editing"
          type="button"
          @click="cancelEdit"
          class="rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-3 text-sm font-bold text-zinc-400 transition hover:border-red-900 hover:text-white"
        >
          CANCEL
        </button>

      </div>

    </form>

    <!-- Bottom status -->
    <div class="relative mt-6 flex items-center justify-between border-t border-zinc-900 pt-4">
      <span class="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
        SECURE_INPUT
      </span>

      <span class="font-mono text-[10px] text-red-600">
        ENCRYPTED
      </span>
    </div>
  </section>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  editing: {
    type: Boolean,
    default: false
  },

  student: {
    type: Object,
    default: null
  }
})

const emit = defineEmits([
  'save',
  'cancel'
])

const form = reactive({
  studentNumber: '',
  name: '',
  program: '',
  yearLevel: ''
})

watch(
  () => props.student,
  (student) => {
    if (student) {
      form.studentNumber = student.studentNumber || ''
      form.name = student.name || ''
      form.program = student.program || ''
      form.yearLevel = student.yearLevel || ''
    } else {
      resetForm()
    }
  },
  { immediate: true }
)

function submitForm() {
  emit('save', {
    ...form
  })

  if (!props.editing) {
    resetForm()
  }
}

function cancelEdit() {
  resetForm()
  emit('cancel')
}

function resetForm() {
  form.studentNumber = ''
  form.name = ''
  form.program = ''
  form.yearLevel = ''
}
</script>

<style scoped>
.cyber-input {
  width: 100%;
  border: 1px solid rgb(63 63 70);
  border-radius: 0.75rem;
  background: rgba(9, 9, 11, 0.9);
  padding: 0.85rem 1rem;
  color: white;
  outline: none;
  transition: all 0.2s ease;
}

.cyber-input::placeholder {
  color: rgb(82 82 91);
}

.cyber-input:focus {
  border-color: rgb(239 68 68);
  box-shadow:
    0 0 0 1px rgba(239, 68, 68, 0.25),
    0 0 25px rgba(239, 68, 68, 0.12);
}

.cyber-input option {
  background: #09090b;
  color: white;
}

.cyber-button {
  border: 1px solid rgb(239 68 68);
  border-radius: 0.75rem;
  background: linear-gradient(
    135deg,
    rgb(127 29 29),
    rgb(185 28 28)
  );
  padding: 0.85rem 1rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  transition: all 0.2s ease;
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.15);
}

.cyber-button:hover {
  transform: translateY(-1px);
  box-shadow:
    0 0 30px rgba(239, 68, 68, 0.3),
    inset 0 0 20px rgba(255, 255, 255, 0.04);
}

.ambient-orb {
  animation: orb 7s ease-in-out infinite alternate;
}

@keyframes orb {
  from {
    transform: translate(0, 0) scale(1);
  }

  to {
    transform: translate(-30px, 30px) scale(1.25);
  }
}
</style>