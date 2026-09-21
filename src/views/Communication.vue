<script setup>
import EvidenceCard from '../components/EvidenceCard.vue';
import Button from 'primevue/button';

const projects = [
  {
    title: 'Consultative IT Help Desk Support',
    description: 'Diagnosing hardware, software, and networking issues for university faculty and students. Translating complex system behavior into clear, user-friendly solutions while maintaining comprehensive documentation and data confidentiality.',
    tech: ['Consultative Support', 'Technical Documentation', 'Customer Advocacy', 'Triage'],
    buttonLabel: 'Learn More',
    link: 'https://www.up.edu/information-services/' // Or route to your internal experience view
  },
  {
    title: 'Enterprise Workflow Automation — Intrax Inc.',
    description: 'Partnered with business teams to analyze manual data bottlenecks and identify workflow requirements. Architected an automated sync between Salesforce and Airtable, directly bridging the gap between sales operations and engineering records.',
    tech: ['Stakeholder Discovery', 'Salesforce CRM', 'Airtable', 'Process Automation'],
    buttonLabel: 'View Internship Details',
    link: 'https://www.intraxinc.com/' // Or direct to an internal writeup/modal
  },
  {
    title: 'Client Management Web App — Cosmos Data Tech',
    description: 'Collaborated directly with client stakeholders and engineering peers to replace legacy systems with a modern full-stack web portal. Led requirements discovery, sprint retrospectives, and cross-functional API integrations.',
    tech: ['Client Requirements', 'Vue3', 'ASP.NET', 'Azure Cloud', 'Agile Delivery'],
    buttonLabel: 'View GitHub Repo',
    link: 'https://github.com/Cosmos-DataTechCapStone/Cosmos'
  }
];
</script>

<template>
  <div class="page-container">
    <header class="text-center mb-12">
      <Button label="Back to Home" icon="pi pi-arrow-left" text @click="$router.push('/')" class="mb-4" />
      <h1 class="text-4xl font-bold text-gray-800">Technical Communicator</h1>
      <p class="text-gray-600 mt-2 text-lg">
        Bridging the gap between technical architecture, end users, and business stakeholders.
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