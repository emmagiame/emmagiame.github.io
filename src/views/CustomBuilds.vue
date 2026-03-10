<script setup>
import EvidenceCard from '../components/EvidenceCard.vue';
import Button from 'primevue/button';

const buildCategories = [
  {
    title: 'Automotive Modding',
    image: null, // Placeholder for future car mod images 
    description: 'Custom performance and aesthetic modifications to my car, focusing on mechanical reliability and clean integration.',
    tech: ['Mechanical', 'Electrical', 'Hardware'],
    link: '/projects/custombuilds/car'
  },
  {
    title: 'Bicycle Engineering',
    image: null, // Placeholder for future bike mod images
    description: 'Customizing and maintaining my bike for optimal performance, reflecting my interest in mechanical systems and biking.',
    tech: ['Mechanical', 'Drivetrain', 'Biking'],
    link: '/projects/custombuilds/bike'
  },
  {
    title: 'Custom Keyboards',
    image: null, // Placeholder for future keyboard images
    description: 'Designing and building custom mechanical keyboards, including soldering, switch lubing, and firmware flashing.',
    tech: ['Soldering', 'Firmware', 'Electronics'],
    link: '/projects/custombuilds/keyboard'
  },
  {
    title: 'PC Architecture',
    image: null, // Placeholder for future PC build images
    description: 'Designing and assembling high-performance PC systems with a focus on cable management and airflow optimization.',
    tech: ['Hardware', 'Cable Mgmt', 'Thermal Design'],
    link: '/projects/custombuilds/pc'
  }
];
</script>

<template>
  <div class="page-container">
    <header class="text-center mb-12">
      <Button label="Back to Home" icon="pi pi-arrow-left" text @click="$router.push('/')" class="mb-4" />
      <h1 class="text-4xl font-bold text-gray-800">Custom Builds & Modding</h1>
      <p class="text-gray-600 mt-2">Exploring the intersection of form, function, and mechanical hardware.</p>
    </header>

    <div class="grid-layout">
        <div v-for="category in buildCategories" :key="category.title" class="card-wrapper">
            <EvidenceCard v-bind="category" />
        
        </div>
    </div>
  </div>
</template>

<style scoped>
.page-container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
.grid-layout { display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; }
.card-wrapper { flex: 0 1 350px; display: flex; flex-direction: column; }
</style>