<template>
  <header class="relative overflow-hidden border-b border-red-900/50 bg-black/80 backdrop-blur-xl">
    <!-- Animated ambient glow -->
    <div class="pointer-events-none absolute -left-20 -top-32 h-72 w-72 animate-pulse rounded-full bg-red-600/20 blur-3xl"></div>
    <div class="pointer-events-none absolute -right-20 -bottom-32 h-72 w-72 rounded-full bg-red-900/20 blur-3xl ambient-drift"></div>

    <div class="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
      <div class="flex items-center gap-4">
        <!-- Logo -->
        <div class="relative flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/60 bg-red-950/30 shadow-[0_0_25px_rgba(220,38,38,0.25)]">
          <div class="absolute inset-1 rounded-lg border border-red-500/20"></div>

          <span class="text-xl font-black text-red-500">
            SIS
          </span>
        </div>

        <div>
          <p class="text-[10px] font-bold uppercase tracking-[0.35em] text-red-500">
            SYSTEM ONLINE
          </p>

          <h1 class="mt-1 text-xl font-black tracking-tight text-white sm:text-2xl">
            Student
            <span class="text-red-500">Information</span>
            System
          </h1>

          <p class="hidden text-xs text-zinc-500 sm:block">
            Secure student record management interface
          </p>
        </div>
      </div>

      <!-- Status -->
      <div class="hidden items-center gap-3 rounded-full border border-red-900/50 bg-red-950/20 px-4 py-2 sm:flex">
        <span class="relative flex h-2.5 w-2.5">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60"></span>
          <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]"></span>
        </span>

        <span class="text-xs font-bold uppercase tracking-widest text-red-400">
          Online
        </span>
      </div>
    </div>

    <!-- Neon scan line -->
    <div class="scan-line pointer-events-none absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
  </header>
</template>

<style scoped>
.ambient-drift {
  animation: drift 8s ease-in-out infinite alternate;
}

.scan-line {
  animation: scan 5s linear infinite;
}

@keyframes drift {
  0% {
    transform: translate(0, 0) scale(1);
  }

  100% {
    transform: translate(-50px, 30px) scale(1.2);
  }
}

@keyframes scan {
  0% {
    top: 0%;
  }

  50% {
    top: 100%;
  }

  100% {
    top: 0%;
  }
}
</style>