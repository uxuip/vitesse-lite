<template>
  <nav gap-2 inline-flex mt-6 text-xl>
    <button icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>

    <a
      href="https://github.com/antfu-collective/vitesse-lite"
      rel="noreferrer"
      target="_blank"
      title="GitHub"
      i-carbon-logo-github
      icon-btn
    />
  </nav>
</template>
