<script setup>
import { ref, onMounted } from 'vue'

import AppHeader from './components/AppHeader.vue'
import RecordForm from './components/RecordForm.vue'
import RecordList from './components/RecordList.vue'
import AppFooter from './components/AppFooter.vue'

const students = ref([])
const editingStudent = ref(null)
const showNotification = ref(false)
const notificationMessage = ref('')

const STORAGE_KEY = 'student-information-system'

onMounted(() => {
  const savedStudents = localStorage.getItem(STORAGE_KEY)

  if (savedStudents) {
    students.value = JSON.parse(savedStudents)
  }
})

function saveStudents() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(students.value)
  )
}

function showMessage(message) {
  notificationMessage.value = message
  showNotification.value = true

  setTimeout(() => {
    showNotification.value = false
  }, 2500)
}

function addStudent(student) {
  const exists = students.value.some(
    item =>
      item.studentNumber.toLowerCase() ===
      student.studentNumber.toLowerCase()
  )

  if (exists) {
    showMessage('Student number already exists.')
    return
  }

  students.value.push({
    ...student,
    createdAt: new Date().toISOString()
  })

  saveStudents()

  showMessage('Student record added successfully.')
}

function updateStudent(student) {
  if (!editingStudent.value) {
    return
  }

  const index = students.value.findIndex(
    item =>
      item.studentNumber ===
      editingStudent.value.studentNumber
  )

  if (index !== -1) {
    students.value[index] = {
      ...student,
      createdAt:
        students.value[index].createdAt
    }

    saveStudents()

    showMessage('Student record updated successfully.')
  }

  editingStudent.value = null
}

function handleSave(student) {
  if (editingStudent.value) {
    updateStudent(student)
  } else {
    addStudent(student)
  }
}

function editStudent(student) {
  editingStudent.value = {
    ...student
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

function deleteStudent(student) {
  const confirmed = window.confirm(
    `Delete the record for ${student.name}?`
  )

  if (!confirmed) {
    return
  }

  students.value = students.value.filter(
    item =>
      item.studentNumber !== student.studentNumber
  )

  saveStudents()

  showMessage('Student record deleted.')
}

function cancelEdit() {
  editingStudent.value = null
  showMessage('Edit cancelled.')
}
</script>

<template>
  <div class="min-h-screen overflow-hidden bg-black text-white">

    <!-- Ambient Cyberpunk Background -->

    <div class="pointer-events-none fixed inset-0 overflow-hidden">

      <div
        class="absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-900/20 blur-[120px] ambient-red-one"
      ></div>

      <div
        class="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-red-600/10 blur-[120px] ambient-red-two"
      ></div>

      <div
        class="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-red-950/30 blur-[100px] ambient-red-three"
      ></div>

    </div>

    <!-- Cyber Grid -->

    <div
      class="pointer-events-none fixed inset-0 opacity-[0.035]"
      style="
        background-image:
          linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px);
        background-size: 45px 45px;
      "
    ></div>

    <!-- Main Application -->

    <div class="relative z-10">

      <AppHeader />

      <main
        class="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8"
      >

        <!-- System Intro -->

        <section
          class="relative overflow-hidden rounded-2xl border border-red-900/40 bg-zinc-950/70 p-6 backdrop-blur-xl sm:p-8"
        >

          <div
            class="absolute right-0 top-0 h-40 w-40 rounded-full bg-red-600/10 blur-3xl"
          ></div>

          <div class="relative">

            <div class="flex flex-wrap items-center gap-3">

              <span
                class="rounded-full border border-red-800/60 bg-red-950/30 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-red-400"
              >
                MODULE 07
              </span>

              <span
                class="font-mono text-[10px] uppercase tracking-widest text-zinc-600"
              >
                STUDENT DATABASE
              </span>

            </div>

            <h2
              class="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl"
            >
              Manage
              <span class="text-red-500">
                Student Records.
              </span>
            </h2>

            <p
              class="mt-3 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base"
            >
              A modern student information interface for
              creating, viewing, editing, searching, and
              deleting student records.
            </p>

          </div>

        </section>

        <!-- Statistics -->

        <section
          class="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >

          <div class="stat-card">

            <p class="stat-label">
              TOTAL RECORDS
            </p>

            <p class="stat-value">
              {{ students.length }}
            </p>

          </div>

          <div class="stat-card">

            <p class="stat-label">
              SYSTEM STATUS
            </p>

            <p class="stat-value text-green-500">
              ONLINE
            </p>

          </div>

          <div class="stat-card">

            <p class="stat-label">
              STORAGE
            </p>

            <p class="stat-value text-red-500">
              LOCAL
            </p>

          </div>

        </section>

        <!-- Form -->

        <RecordForm
          :editing="Boolean(editingStudent)"
          :student="editingStudent"
          @save="handleSave"
          @cancel="cancelEdit"
        />

        <!-- Records -->

        <RecordList
          :students="students"
          @edit="editStudent"
          @delete="deleteStudent"
        />

      </main>

      <AppFooter />

    </div>

    <!-- Notification -->

    <Transition name="notification">

      <div
        v-if="showNotification"
        class="fixed bottom-6 right-6 z-50 max-w-sm rounded-xl border border-red-700/60 bg-black/95 px-5 py-4 shadow-[0_0_35px_rgba(239,68,68,0.2)] backdrop-blur-xl"
      >

        <div class="flex items-center gap-3">

          <div
            class="flex h-9 w-9 items-center justify-center rounded-lg bg-red-950/50 text-red-500"
          >
            ✓
          </div>

          <div>

            <p
              class="text-[10px] font-bold uppercase tracking-widest text-red-500"
            >
              SYSTEM MESSAGE
            </p>

            <p class="mt-1 text-sm text-zinc-300">
              {{ notificationMessage }}
            </p>

          </div>

        </div>

      </div>

    </Transition>

  </div>
</template>

<style scoped>

.stat-card {
  border: 1px solid rgba(127, 29, 29, 0.5);
  border-radius: 1rem;
  background: rgba(9, 9, 11, 0.75);
  padding: 1.25rem;
  backdrop-filter: blur(16px);
  transition: all 0.25s ease;
}

.stat-card:hover {
  border-color: rgba(239, 68, 68, 0.7);
  box-shadow:
    0 0 30px rgba(239, 68, 68, 0.08);
  transform: translateY(-2px);
}

.stat-label {
  color: rgb(82 82 91);
  font-family: monospace;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.stat-value {
  margin-top: 0.5rem;
  color: white;
  font-size: 1.4rem;
  font-weight: 900;
}

.ambient-red-one {
  animation: ambientOne 10s ease-in-out infinite alternate;
}

.ambient-red-two {
  animation: ambientTwo 13s ease-in-out infinite alternate;
}

.ambient-red-three {
  animation: ambientThree 9s ease-in-out infinite alternate;
}

@keyframes ambientOne {
  0% {
    transform: translate(0, 0) scale(1);
  }

  100% {
    transform: translate(100px, 60px) scale(1.3);
  }
}

@keyframes ambientTwo {
  0% {
    transform: translate(0, 0) scale(1);
  }

  100% {
    transform: translate(-100px, 80px) scale(1.25);
  }
}

@keyframes ambientThree {
  0% {
    transform: translate(0, 0) scale(0.9);
  }

  100% {
    transform: translate(80px, -50px) scale(1.2);
  }
}

.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}


























.notification-enter-from,
.notification-leave-to {
  opacity: 0;
  transform: translateY(20px);
}



</style>