<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';

const hireReasons = [
  {
    title: 'Systems Integration Expert',
    desc: 'Experience connecting platforms like Salesforce and Airtable using Zapier and custom APIs.',
    link: '/projects/integration',
    icon: 'pi-sync'
  },
  {
    title: 'Full-Stack Developer',
    desc: 'Building OData backends and Vue3 frontends hosted on Azure cloud infrastructure.',
    link: '/projects/webapp',
    icon: 'pi-code'
  },
  {
    title: 'Mechanical Design & Prototyping',
    desc: 'Advanced SolidWorks modeling from initial thread design to 3D-printed physical testing.',
    link: '/projects/prototyping',
    icon: 'pi-cog'
  }
];
</script>

<template>
  <div class="portfolio-container p-6">
    <header class="text-center mb-8">
      <h1 class="text-4xl font-bold mb-4">Emma Giamello</h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Computer Science student at the University of Portland specializing in systems programming and web integrations.
      </p>
    </header>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6 text-center">Why Hire Me?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card v-for="reason in hireReasons" :key="reason.title" class="hire-card shadow-lg">
          <template #title>
            <i :class="['pi', reason.icon, 'text-teal-500 mr-2']"></i>
            {{ reason.title }}
          </template>
          <template #content>
            <p class="m-0 text-gray-700 leading-relaxed">{{ reason.desc }}</p>
          </template>
          <template #footer>
            <Button label="View Evidence" icon="pi pi-arrow-right" link @click="$router.push(reason.link)" />
          </template>
        </Card>
      </div>
    </section>
  </div>
</template>

<style scoped>
.portfolio-container { max-width: 1200px; margin: 0 auto; }
.hire-card { transition: transform 0.3s ease; border-top: 4px solid #14b8a6; }
.hire-card:hover { transform: translateY(-8px); }
</style>