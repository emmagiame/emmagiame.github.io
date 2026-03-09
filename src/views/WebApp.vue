<script setup>
import EvidenceCard from '../components/EvidenceCard.vue';
import Button from 'primevue/button';

const projects = [
  {
    title: 'Client Management Web App',
    description: 'A full-stack application built with Vue3 and ASP.NET, providing a streamlined interface for managing client data.',
    tech: ['Vue3', 'ASP.NET', 'Azure', 'SQL'],
    buttonLabel: 'View Github Repo',
    link: 'https://github.com/Cosmos-DataTechCapStone/Cosmos'
  },
 
];
</script>

<template>
  <div class="page-container">
    <header class="text-center mb-12">
      <Button label="Back to Home" icon="pi pi-arrow-left" text @click="$router.push('/')" class="mb-4" />
      <h1 class="text-4xl font-bold text-gray-800">Full-Stack Developer</h1>
      <p class="text-gray-600 mt-2">Building scalable backends and modern frontends.</p>
    </header>

    <div class="grid-layout">
      <EvidenceCard v-for="p in projects" :key="p.title" v-bind="p" />
    </div>
  </div>
</template>

<style scoped>
/* Use the same CSS as Prototyping/ProblemSolving to keep the grid centered */
.page-container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
.grid-layout { display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; }
.grid-layout > * { flex: 0 1 350px; }
</style>