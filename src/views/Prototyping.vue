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
    title: 'Test: Fitment Analysis',
    image: bottleProtoTest,
    tech: ['SolidWorks', 'Technical Drawing'],
    description: 'Conducted detailed fitment analysis to ensure proper assembly and functionality. Created a cylinder with 2.48in and 2.53in diameters to test fitment.'
  },{
    title: 'V1: Initial Prototype',
    image: bottleProtoV1,
    tech: ['SolidWorks', 'Technical Drawing'],
    description: 'Focus was on transitioning from test version to a basic bottle design while maintaining the same thread dimensions for consistency in testing.'
  },
  {
    title: 'V2: Redesigned Container',
    image: bottleProtoV2,
    tech: ['SolidWorks', 'Technical Drawing'],
    description: 'Redesigned the container to be more ergonomic and visually appealing while maintaining the same thread design for consistency in testing.'
  },
  {
    title: 'V3: Refined Aesthetics',
    image: bottleProtoV3,
    tech: ['SolidWorks', 'Technical Drawing'],
    description: 'Finalized the design with smoother curves and a more polished look, while ensuring the thread dimensions remained unchanged for accurate testing of fitment and functionality.'
  },
  {
    title: 'Different Cap Design',
    image: bottleProtoDiffCap,
    tech: ['SolidWorks', 'Technical Drawing'],
    description: 'Designed a different cap to explore alternative aesthetics while maintaining functionality.'
  }
];
</script>

<template>
  <div class="page-container">
    <div class="header-section">
      <Button label="Back" icon="pi pi-arrow-left" text @click="$router.push('/')" />
      <h1>Mechanical Prototyping</h1>
      <p>Iterative SolidWorks design for thread engagement and fitment.</p>
    </div>

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
.grid-layout {
  display: flex;
  flex-wrap: wrap;       
  justify-content: center;  
  gap: 2rem;              
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: stretch;
}

.grid-layout > * {
  flex: 0 1 350px;     
}

.page-container {
  max-width: 2000px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%; 
  box-sizing: border-box;
}
</style>