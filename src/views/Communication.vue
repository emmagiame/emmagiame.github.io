<script setup>
import { button } from '@primeuix/themes/aura/inputnumber';
import EvidenceCard from '../components/EvidenceCard.vue';
import Button from 'primevue/button';

const projects = [
  {
    title: 'IT Help Desk Assistant',
    description: 'Providing technical support at the University of Portland, translating complex system issues into actionable user solutions.',
    tech: ['User Support', 'Problem Solving', 'Documentation'],
    buttonLabel: 'View Experience'
  },
  {
    title: 'Final Project: Client Management Web App',
    description: 'As my final project, my team and I built a full-stack application. While building this project not only was the code important but how we communicated and collaborated was just as critical. We had to work together to divide up the work, communicate our progress, and integrate our code together.',
    tech: ['Collaboration', 'Vue3', 'ASP.NET', 'Azure', 'SQL'],
    buttonLabel: 'View Github Repo',
    link: 'https://github.com/Cosmos-DataTechCapStone/Cosmos'
  },

 
];
</script>

<template>
  <div class="page-container">
    <header class="text-center mb-12">
      <Button label="Back to Home" icon="pi pi-arrow-left" text @click="$router.push('/')" class="mb-4" />
      <h1 class="text-4xl font-bold text-gray-800">Technical Communicator</h1>
      <p class="text-gray-600 mt-2">Bridging the gap between computers and human users.</p>
    </header>

    <div class="grid-layout">
      <EvidenceCard v-for="p in projects" :key="p.title" v-bind="p" />
    </div>
  </div>
</template>

<style scoped>
.page-container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
.grid-layout { display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; }
.grid-layout > * { flex: 0 1 350px; }
</style>