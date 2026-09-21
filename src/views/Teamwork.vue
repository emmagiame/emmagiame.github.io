<script setup>
import EvidenceCard from '../components/EvidenceCard.vue';
import Button from 'primevue/button';

const projects = [
  {
    title: 'Client Management Web Application',
    description: 'Collaborated in an agile engineering team to architect and deliver a full-stack client portal for Cosmos Data Technologies. Coordinated API contracts, managed sprint deliverables, and integrated Vue3 frontend modules with an ASP.NET and Azure backend.',
    tech: ['Agile / Scrum', 'Vue3', 'ASP.NET', 'Azure Cloud', 'SQL'],
    buttonLabel: 'View GitHub Repo',
    link: 'https://github.com/Cosmos-DataTechCapStone/Cosmos'
  },
  {
    title: 'D-III Ultimate Frisbee National Championship',
    description: 'Competed on the University of Portland’s national title-winning team. Contributed through intense training regimens, tactical adjustments under pressure, and transparent team-wide on-field communication to secure the national championship.',
    tech: ['Competitive Leadership', 'Strategic Execution', 'Team Dynamics'],
    buttonLabel: 'View Championship Article',
    link: 'https://ww1.up.edu/news/2024/05/uproar-ncaa-champions.html'
  },
  {
    title: 'Multiplayer 2D Game Architecture',
    description: 'Partnered with peers to build an interactive 2D digital version of Uno. Engineered deterministic game state logic, turn rotation, event-driven player interactions, and responsive UI components.',
    tech: ['Object-Oriented Design', 'State Management', 'UI/UX Design', 'Git Collaboration'],
    buttonLabel: 'View GitHub Repo',
    link: 'https://github.com/emmagiame/UnoGame'
  }
];
</script>

<template>
  <div class="page-container">
    <header class="text-center mb-12">
      <Button label="Back to Home" icon="pi pi-arrow-left" text @click="$router.push('/')" class="mb-4" />
      <h1 class="text-4xl font-bold text-gray-800">Collaborative Teammate</h1>
      <p class="text-gray-600 mt-2 text-lg">
        Driving results and executing complex goals through cross-functional teamwork and communication.
      </p>
    </header>

    <div class="grid-layout">
      <EvidenceCard v-for="p in projects" :key="p.title" v-bind="p" />
    </div>
  </div>
</template>

<style scoped>
.page-container { 
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 4rem 2rem; 
}

.grid-layout { 
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 2rem; 
}

.grid-layout > * { 
  flex: 0 1 350px; 
  display: flex;
  flex-direction: column;
}
</style>