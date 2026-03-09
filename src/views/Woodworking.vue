<script setup>
import EvidenceCard from '../components/EvidenceCard.vue';
import Button from 'primevue/button';
import ComplexLattice from '../assets/images/complexLattice.png';
import StainedLattice from '../assets/images/stainedLattice.png';
import Spoon from '../assets/images/spoon.png';

const projects = [
  {
    title: 'Intricate Lattice Systems',
    image: ComplexLattice, 
    description: 'Designed and constructed complex wooden lattice frameworks, focusing on geometric symmetry and structural integrity.',
    tech: ['Lattice Design', 'Joinery', 'Precision Cutting']
  },
  {
    title: 'Custom Wooden Frameworks',
    image: StainedLattice, 
    description: 'Developed high-end structural frames using traditional woodworking techniques combined with modern CAD planning.',
    tech: ['Frameworks', 'CAD', 'Traditional Joinery']
  },
  {
    title: 'Functional Wood Art',
    image: Spoon,
    description: 'Exploring the intersection of function and form through custom-built furniture and structural art pieces.',
    tech: ['Furniture Design', 'Finishing', 'Material Science']
  }
];
</script>

<template>
  <div class="page-container">
    <header class="text-center mb-12">
      <Button label="Back to Home" icon="pi pi-arrow-left" text @click="$router.push('/')" class="mb-4" />
      
      <h1 class="text-4xl font-bold text-gray-800">Woodworking & Lattice Structures</h1>
      <p class="text-gray-600 mt-2 max-w-2xl mx-auto">
        Merging mechanical precision with organic materials to create intricate structural systems.
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
/* Exact CSS Mirror from Prototyping.vue to ensure a perfect match */
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

/* This is the secret to centering the 'orphaned' bottom cards */
.grid-layout > * {
  flex: 0 1 350px; 
}
</style>