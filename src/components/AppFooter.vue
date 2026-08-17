<template>
  <footer class="relative mt-12 overflow-hidden border-t border-red-900/40 bg-black/80 backdrop-blur-xl">

    <!-- Ambient glow -->
    <div class="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-red-700/10 blur-3xl footer-glow"></div>

    <div class="relative mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">

      <div>
        <p class="font-mono text-xs font-bold uppercase tracking-widest text-red-500">
          SIS // CORE SYSTEM
        </p>

        <p class="mt-1 text-xs text-zinc-600">
          Student Information System
        </p>
      </div>

      <div class="flex items-center gap-4">

        <span class="font-mono text-[10px] text-zinc-700">
          v1.0.0
        </span>

        <span class="h-1 w-1 rounded-full bg-red-600"></span>

        <span class="text-[10px] uppercase tracking-widest text-zinc-600">
          Module 7
        </span>

      </div>

    </div>

    <div class="h-px bg-linear-to-r from-transparent via-red-700/60 to-transparent"></div>

  </footer>
</template>

<style scoped>
.footer-glow {
  animation: footerPulse 6s ease-in-out infinite alternate;
}

@keyframes footerPulse {
  from {
    opacity: 0.35;
    transform: translateX(-50%) scale(0.9);
  }

  to {
    opacity: 0.8;
    transform: translateX(-50%) scale(1.15);
  }
}
</style>