<script setup>
import EvidenceCard from '../components/EvidenceCard.vue';
import Button from 'primevue/button';

const projects = [
  {
    title: 'Client Management Web App',
    description: 'As my final project, my team and I built a full-stack application built with Vue3, PrimeVue and ASP.NET, providing a streamlined interface for managing client data.',
    tech: ['Collaboration', 'Vue3', 'ASP.NET', 'Azure', 'SQL'],
    buttonLabel: 'View Github Repo',
    link: 'https://github.com/Cosmos-DataTechCapStone/Cosmos'
  },
  {
    title: 'DIII Ultimate Frisbee National Championship',
    description: 'Contributed to the University of Portland’s DIII National Championship-winning Ultimate Frisbee team, demonstrating teamwork, strategy, and leadership on a national stage.',
    tech: ['Teamwork', 'Strategy', 'Leadership'],
    buttonLabel: 'View School Shoutout',
    link: 'https://ww1.up.edu/news/2024/05/uproar-ncaa-champions.html'
  },
  {
    title: 'Coding up a Game',
    description: 'Built a 2d Version of Uno with a team, implementing game logic, user interface, and multiplayer functionality to create an engaging gaming experience.',
    tech: ['Collaboration', 'Game Development', 'User Interface'],
    buttonLabel: 'View Github Repo',
    link: 'https://github.com/emmagiame/UnoGame'
  },
 
];
</script>

<template>
  <div class="page-container">
    <header class="text-center mb-12">
      <Button label="Back to Home" icon="pi pi-arrow-left" text @click="$router.push('/')" class="mb-4" />
      <h1 class="text-4xl font-bold text-gray-800">Team Player</h1>
      <p class="text-gray-600 mt-2">Building and reaching goals through collaboration.</p>
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