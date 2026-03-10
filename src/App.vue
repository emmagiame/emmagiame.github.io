<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue'; // The component we just made
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow pb-20"> <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style>
/* src/App.vue */
.app-container {
  display: flex;
  flex-direction: column;
  /* Ensures the container is at least as tall as the screen */
  min-height: 100vh; 
}

/* This is the key: it tells the content to 'grow' to fill 
   any leftover space, pushing the footer down. */
.main-content {
  flex: 1 0 auto; 
}

footer {
  flex-shrink: 0; /* Ensures the footer doesn't get squashed */
}
</style>