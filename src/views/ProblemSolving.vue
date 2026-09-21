<script setup>
import EvidenceCard from '../components/EvidenceCard.vue';
import Button from 'primevue/button';

const projects = [
  {
    title: 'Unix-like Shell Implementation',
    description: 'Engineered a custom POSIX-compliant shell in C, implementing process creation and execution (fork/exec), background process handling, I/O redirection, and custom POSIX signal handling.',
    tech: ['C', 'Systems Programming', 'Linux Kernel API', 'Process Management'],
    buttonLabel: 'View GitHub Repo',
    link: 'https://github.com/emmagiame/basicShell_cs334'
  },
  {
    title: 'Enterprise CRM & Workflow Automation',
    description: 'Designed and deployed an automated integration pipeline syncing active records between Salesforce and Airtable. Resolved operational bottlenecks by eliminating manual data entry and dynamically linking files to tasks.',
    tech: ['Salesforce CRM', 'API Automation', 'Airtable', 'Workflow Logic'],
    buttonLabel: 'View Company Overview', 
    link: 'https://www.intraxinc.com/'
  },
  {
    title: 'Custom Container Design & Prototyping',
    description: 'Designed, modeled, and iterated custom mechanical containers in SolidWorks. Conducted tolerance analysis, thread engagement optimization, and physical fitment validation via 3D print testing.',
    tech: ['SolidWorks', 'Rapid Prototyping', 'Tolerance Analysis', 'CAD Modeling'],
    buttonLabel: 'View Project Details', 
    link: '/projects/prototyping'
  }
];
</script>

<template>
  <div class="page-container">
    <header class="text-center mb-12">
      <Button label="Back to Home" icon="pi pi-arrow-left" text @click="$router.push('/')" class="mb-4" />
      <h1 class="text-4xl font-bold text-gray-800">Adaptive Problem Solver</h1>
      <p class="text-gray-600 mt-2 text-lg">
        Demonstrated technical problem-solving across systems programming, workflow automation, and mechanical iteration.
      </p>
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
  flex: 0 1 350px;
  display: flex;
  flex-direction: column;
}
</style>