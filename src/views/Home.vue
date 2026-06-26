<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';

const hireReasons = [
  {
    title: 'Adaptive Problem Solver',
    desc: 'Leveraging systems programming in Python and Java to deconstruct complex technical hurdles and build optimized solutions.',
    link: '/projects/problem-solving', 
    icon: 'pi-lightbulb'
  },
  {
    title: 'Technical Communicator',
    desc: 'Bridging the gap between complex IT infrastructure and user needs, refined through experience as an IT Help Desk Assistant.',
    link: '/projects/communication',
    icon: 'pi-comments'
  },
  {
    title: 'Collaborative Teammate',
    desc: 'Bringing the same discipline and communication found in D-III National Championship Ultimate Frisbee to cross-functional dev teams.',
    link: '/projects/teamwork',
    icon: 'pi-users'
  }
];

const additionalInterests = [
  {
    title: 'Mechanical Design & Prototyping',
    desc: 'Advanced SolidWorks modeling from initial thread design to 3D-printed physical testing.',
    link: '/projects/prototyping',
    icon: 'pi-cog'
  },
  {
    title: 'Woodworking & Lattice Structures',
    desc: 'Designing and constructing intricate wooden frameworks and lattice systems.',
    link: '/projects/woodworking',
    icon: 'pi-table'
  }, 
  {
    title: 'Custom Builds & Modding',
    desc: 'Planning out custom modifications and builds in all forms and functions. From modding my car and bike to building custom keyboards and electronic projects.',
    link: '/projects/custombuilds',
    icon: 'pi-wrench'
  }
];
</script>

<template>
  <div class="portfolio-container p-6">
    <header class="text-center mb-8">
      <h1 class="text-4xl font-bold mb-4">Emma Giamello</h1> 
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Software Engineer dedicated to designing seamless full-stack applications and data integrations. Currently expanding my expertise in technical leadership and scalable systems through an M.S. in Operations and Technology Management.
      </p>
      <br>
    </header>

    <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-6 text-center">Why Hire Me?</h2>
        
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div class="hire-reasons-container">
        <Card v-for="reason in hireReasons" :key="reason.title" class="hire-card shadow-lg flex flex-col h-full">
            <template #title>
              <div class="flex items-center justify-center mb-2">
                <i :class="['pi', reason.icon, 'text-teal-500 text-2xl']"></i>
              </div>
              <div class="text-center text-lg font-bold">{{ reason.title }}</div>
            </template>

            <template #content>
              <p class="text-center text-gray-700 leading-relaxed">{{ reason.desc }}</p>
            </template>

            <template #footer>
              <div class="flex justify-center mt-auto">
                <Button label="See Evidence" icon="pi pi-arrow-right" link @click="$router.push(reason.link)" />
              </div>
            </template>
        </Card>
      </div>
    </div>
    <br>
    </section>

    <section class="mb-12">
      <br>
      <br>
    <h3 class="text-2xl font-semibold mb-6 text-center">Additional Interests</h3>
        
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div class="additional-interests-container">
        <Card v-for="interest in additionalInterests" :key="interest.title" class="interest-card shadow-lg flex flex-col h-full">
            <template #title>
              <div class="flex items-center justify-center mb-2">
                <i :class="['pi', interest.icon, 'text-teal-500 text-2xl']"></i>
              </div>
              <div class="text-center text-lg font-bold">{{ interest.title }}</div>
            </template>

            <template #content>
              <p class="text-center text-gray-700 leading-relaxed">{{ interest.desc }}</p>
            </template>

            <template #footer>
              <div class="flex justify-center mt-auto">
                <Button label="View" icon="pi pi-arrow-right" link @click="$router.push(interest.link)" />
              </div>
            </template>
        </Card>
      </div>
    </div><br><br><br>
    </section>
  </div>
</template>

<style scoped>
.portfolio-container { 
    max-width: 2000px; margin: 0 auto; 
}

h2 {
  font-size: 2.5rem; 
  font-weight: 800;
}

h3 {
  font-size: 2.0rem; 
  font-weight: 800;
}

p {
  font-size: 1.25rem;
  line-height: 1.6;
}

.hire-reasons-container {
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.hire-card {
  flex: 1;
  min-width: 250px; 
  display: flex;
  flex-direction: column;
  border-bottom: 5px solid #52aebb;
}

@media (max-width: 768px) {
  .hire-reasons-container {
    flex-direction: column;
    align-items: center;
  }
  .hire-card {
    width: 100%;
    max-width: 400px;
  }
  .additional-interests-container {
    flex-direction: column;
    align-items: center;
  }
  .interest-card {
    width: 100%;
    max-width: 400px;
  }
}

.hire-card:hover {
  transform: translateY(-10px);
}

:deep(.p-card-body) {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}

:deep(.p-card-content) {
  flex-grow: 1;
}

.additional-interests-container {
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.interest-card {
  flex: 1;
  min-width: 250px; 
  display: flex;
  flex-direction: column;
  border-bottom: 5px solid #52aebb;
}



.interest-card:hover {
  transform: translateY(-10px);
}
</style>