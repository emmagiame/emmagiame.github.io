<script setup>
import EvidenceCard from '../components/EvidenceCard.vue';
import Button from 'primevue/button';

const projects = [
  {
    title: 'Unix-like Shell Implementation',
    description: 'Developed a custom shell in C, implementing process management, I/O redirection, and signal handling.',
    tech: ['C', 'Systems Programming', 'Linux'],
    buttonLabel: 'View Github Repo',
    link:'https://github.com/emmagiame/basicShell_cs334'
  },
  {
    title: 'Salesforce to Airtable Integration',
    description: 'Showed how to connect Salesforce and Airtable using Zapier, in order to use Salesforce as a data management tool and Airtable as a lightweight project and workflow management tool.',
    tech: ['Salesforce', 'API', 'Logic Design'],
    buttonLabel: 'View Company', 
    link: 'https://www.intraxinc.com/'
  },
  {
    title: 'Created Prototypes for custom container design',
    description: 'Designed and iterated on prototypes for a custom container, focusing on thread engagement and fitment using SolidWorks.',
    tech: ['SolidWorks', 'Technical Drawing'],
    buttonLabel: 'View Project', 
    link: '/projects/prototyping'
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