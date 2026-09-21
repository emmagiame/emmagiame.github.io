<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';

const hireReasons = [
  {
    title: 'Adaptive Problem Solver',
    desc: 'Deconstructing technical hurdles across full-stack systems, enterprise workflows, and embedded hardware to build reliable, optimized solutions.',
    link: '/projects/problem-solving', 
    icon: 'pi-lightbulb'
  },
  {
    title: 'Technical Communicator',
    desc: 'Translating complex system architectures into user-focused solutions, refined through consultative IT support and client-facing delivery.',
    link: '/projects/communication',
    icon: 'pi-comments'
  },
  {
    title: 'Collaborative Teammate',
    desc: 'Bringing the discipline, communication, and resilience forged as a D-III National Champion athlete to cross-functional engineering teams.',
    link: '/projects/teamwork',
    icon: 'pi-users'
  }
];

const additionalInterests = [
  {
    title: 'Mechanical Design & Prototyping',
    desc: 'Advanced SolidWorks modeling from initial thread design to 3D-printed physical tolerance testing.',
    link: '/projects/prototyping',
    icon: 'pi-cog'
  },
  {
    title: 'Woodworking & Precision Structures',
    desc: 'Designing and manufacturing custom architectural wooden frameworks, maintaining tight tolerances and quality assurance.',
    link: '/projects/woodworking',
    icon: 'pi-table'
  }, 
  {
    title: 'Custom Builds & Engineering',
    desc: 'Hands-on hardware builds and mods—from standalone embedded e-paper readers to automotive electrical and bicycle drivetrain tuning.',
    link: '/projects/custombuilds',
    icon: 'pi-wrench'
  }
];
</script>

<template>
  <div class="portfolio-container p-6">
    <header class="text-center mb-8">
      <h1 class="text-4xl font-bold mb-4">Emma Giamello</h1> 
      <p class="hero-description text-gray-600 max-w-3xl mx-auto">
        Technologist and graduate student bridging software systems, embedded hardware, and operational strategy. Combining a B.S. in Computer Science with an M.S. in Operations and Technology Management to translate complex technology into real-world impact.
      </p>
      <br>
    </header>

    <!-- Why Hire Me Section -->
    <section class="section-container mb-20">
      <h2 class="section-title">Why Hire Me?</h2>
      <div class="cards-grid">
        <Card v-for="reason in hireReasons" :key="reason.title" class="custom-card shadow-md flex flex-col h-full">
          <template #title>
            <div class="flex items-center justify-center mb-3">
              <i :class="['pi', reason.icon, 'text-teal-600 text-3xl']"></i>
            </div>
            <div class="text-center text-lg font-bold text-gray-800">{{ reason.title }}</div>
          </template>

          <template #content>
            <p class="text-center text-gray-600 leading-relaxed card-text">{{ reason.desc }}</p>
          </template>

          <template #footer>
            <div class="flex justify-center mt-auto pt-4">
              <Button label="See Evidence" icon="pi pi-arrow-right" link @click="$router.push(reason.link)" />
            </div>
          </template>
        </Card>
      </div>
    </section>

    <!-- Additional Interests Section -->
    <section class="section-container mb-16">
      <h3 class="section-title">Additional Interests & Engineering</h3>
      <div class="cards-grid">
        <Card v-for="interest in additionalInterests" :key="interest.title" class="custom-card shadow-md flex flex-col h-full">
          <template #title>
            <div class="flex items-center justify-center mb-3">
              <i :class="['pi', interest.icon, 'text-teal-600 text-3xl']"></i>
            </div>
            <div class="text-center text-lg font-bold text-gray-800">{{ interest.title }}</div>
          </template>

          <template #content>
            <p class="text-center text-gray-600 leading-relaxed card-text">{{ interest.desc }}</p>
          </template>

          <template #footer>
            <div class="flex justify-center mt-auto pt-4">
              <Button label="View Projects" icon="pi pi-arrow-right" link @click="$router.push(interest.link)" />
            </div>
          </template>
        </Card>
      </div>
    </section>
  </div>
</template>

<style scoped>
.portfolio-container { 
  max-width: 1200px; 
  margin: 0 auto; 
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.7;
}

.section-title {
  font-size: 2.25rem; 
  font-weight: 800;
  text-align: center;
  color: #1f2937;
  margin-bottom: 2.5rem;
}

.cards-grid {
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: stretch;
  gap: 1.5rem;
  width: 100%;
}

.custom-card {
  flex: 1;
  min-width: 260px; 
  display: flex;
  flex-direction: column;
  border-bottom: 4px solid #0d9488;
  border-radius: 8px;
  background: #ffffff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.custom-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 20px -5px rgba(0, 0, 0, 0.1);
}

.card-text {
  font-size: 1rem;
  line-height: 1.6;
}

:deep(.p-card-body) {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 1.5rem;
}

:deep(.p-card-content) {
  flex-grow: 1;
}

@media (max-width: 768px) {
  .cards-grid {
    flex-direction: column;
    align-items: center;
  }
  .custom-card {
    width: 100%;
    max-width: 420px;
  }
}
</style>