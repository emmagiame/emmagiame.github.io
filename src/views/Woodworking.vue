<script setup>
import EvidenceCard from '../components/EvidenceCard.vue';
import Button from 'primevue/button';
import ComplexLattice from '../assets/images/complexLattice.png';
import StainedLattice from '../assets/images/stainedLattice.png';
import Spoon from '../assets/images/spoon.png';

const projects = [
  {
    title: 'Intricate Architectural Lattice Systems',
    image: ComplexLattice, 
    description: 'Engineered complex geometric lattice frameworks with tight repetitive tolerances. Applied precise half-lap joinery and dimensional indexing to ensure long-term structural integrity and symmetry.',
    tech: ['Precision Machining', 'Half-Lap Joinery', 'Tolerance Control', 'Lattice Design']
  },
  {
    title: 'Custom Exterior Frameworks & Joinery',
    image: StainedLattice, 
    description: 'Built high-durability wooden frameworks incorporating CAD dimensioning and traditional joinery. Evaluated wood grain orientation, natural expansion tolerances, and multi-stage protective finishing.',
    tech: ['CAD Layout', 'Grain Selection', 'Exterior Finishing', 'Structural Framing']
  },
  {
    title: 'Hand-Carved Functional Utensils',
    image: Spoon,
    description: 'Explored ergonomic carving and grain flow through functional wooden utensils. Focused on grain strength, smooth tactile transitions, and food-safe oil/wax finishes.',
    tech: ['Hand Tooling', 'Ergonomic Carving', 'Grain Flow Analysis', 'Food-Safe Finishing']
  }
];
</script>

<template>
  <div class="page-container">
    <header class="text-center mb-12">
      <Button label="Back to Home" icon="pi pi-arrow-left" text @click="$router.push('/')" class="mb-4" />
      
      <h1 class="text-4xl font-bold text-gray-800">Woodworking & Precision Structures</h1>
      <p class="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
        Merging mechanical precision, tight tolerances, and craftsmanship across custom architectural frameworks and functional hand builds.
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