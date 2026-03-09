<script setup>
import EvidenceCard from '../components/EvidenceCard.vue';
import Button from 'primevue/button';

const projects = [
  {
    title: 'Unix-like Shell Implementation',
    // Replace with your actual project screenshot
    description: 'Developed a custom shell in C, implementing process management, I/O redirection, and signal handling.',
    tech: ['C', 'Systems Programming', 'Linux'],
    buttonLabel: 'View Github Repo',
    link:'https://github.com/emmagiame/basicShell_cs334'
  },
  {
    title: 'Salesforce API Optimizer',
    // Replace with your actual project screenshot
    description: 'Solved a synchronization bottleneck between Salesforce and Airtable by implementing a custom buffer logic.',
    tech: ['Salesforce', 'API', 'Logic Design'],
    buttonLabel: 'View Project'
  }
];
</script>

<template>
  <div class="page-container">
    <header class="text-center mb-12">
      <Button label="Back to Home" icon="pi pi-arrow-left" text @click="$router.push('/')" class="mb-4" />
      <h1 class="text-4xl font-bold text-gray-800">Adaptive Problem Solver</h1>
      <p class="text-gray-600 mt-2">Technical evidence of complex hurdle navigation.</p>
    </header>

    <div class="grid-layout">
      <EvidenceCard 
        v-for="p in projects" 
        :key="p.title"
        v-bind="p"
      />
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
  flex: 0 1 350px; /* This ensures the bottom cards center correctly! */
}
</style>