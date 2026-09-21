<script setup>
import Button from 'primevue/button';
import EvidenceCard from '../components/EvidenceCard.vue';
import bottleProtoTest from '../assets/images/Test_BottleProto.png';
import bottleProtoV1 from '../assets/images/V1_BottleProto.png';
import bottleProtoV2 from '../assets/images/V2_BottleProto.png';
import bottleProtoV3 from '../assets/images/V3_BottleProto.png';
import bottleProtoDiffCap from '../assets/images/DiffCap_BottleProto.png';

const projects = [
  {
    title: 'Stage 0: Clearance & Tolerance Testing',
    image: bottleProtoTest,
    tech: ['Tolerance Analysis', 'Fitment Verification', 'SolidWorks'],
    description: 'Conducted clearance evaluations to validate mating tolerances. Modeled stepped cylindrical baselines (2.48 in and 2.53 in diameters) to determine thread clearance and material shrinkage allowances.'
  },
  {
    title: 'V1: Baseline Functional Geometry',
    image: bottleProtoV1,
    tech: ['Parametric CAD', 'SolidWorks', 'Rapid Prototyping'],
    description: 'Transitioned verified thread geometry into an initial container form factor. Maintained pitch diameter constraints while establishing baseline internal fluid volume and wall thickness.'
  },
  {
    title: 'V2: Ergonomic & Contour Redesign',
    image: bottleProtoV2,
    tech: ['Ergonomics', 'Surfacing', 'Design Iteration'],
    description: 'Re-engineered the outer profile for improved grip ergonomics and weight distribution. Preserved the standardized neck profile while introducing tapered gripping zones.'
  },
  {
    title: 'V3: Production-Ready Refinement',
    image: bottleProtoV3,
    tech: ['DFM Principles', 'Curvature Continuity', 'SolidWorks'],
    description: 'Refined exterior fillets, surface transitions, and draft angles for potential mold release and high-fidelity 3D print validation, ensuring zero thread deviation from baseline.'
  },
  {
    title: 'Cap Exploration: Grip & Mechanical Engagement',
    image: bottleProtoDiffCap,
    tech: ['Thread Engagement', 'Texture / Knurling', 'Component Design'],
    description: 'Explored alternative closure geometries focusing on tactile torque application, thread engagement smoothness, and positive seal closure.'
  }
];
</script>

<template>
  <div class="page-container">
    <header class="header-section text-center mb-12">
      <Button label="Back to Home" icon="pi pi-arrow-left" text @click="$router.push('/')" class="mb-4" />
      <h1 class="text-4xl font-bold text-gray-800">Mechanical Prototyping & CAD Iteration</h1>
      <p class="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
        Iterative SolidWorks container development focusing on parametric thread engagement, clearance tolerances, and ergonomic refinement.
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
  width: 100%;
  box-sizing: border-box;
}

.grid-layout {
  display: flex;
  flex-wrap: wrap;       
  justify-content: center;  
  gap: 2rem;              
  width: 100%;
  margin: 0 auto;
  align-items: stretch;
}

.grid-layout > * {
  flex: 0 1 350px;
  display: flex;
  flex-direction: column;
}
</style>