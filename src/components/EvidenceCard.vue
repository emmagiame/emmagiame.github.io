<script setup>
import Card from 'primevue/card'; // Use the official component
import Button from 'primevue/button';
import { useRouter } from 'vue-router';

const props = defineProps({
  title: String,
  image: String,
  description: String,
  tech: Array,
  link: String,
  buttonLabel: {
    type: String,
    default: 'View Evidence'
  }
});

const router = useRouter();
const navigate = () => {
  if (!props.link) return;

  // Check if the link is external (starts with http or https)
  if (props.link.startsWith('http')) {
    // '_blank' opens it in a new tab so they don't leave your portfolio
    window.open(props.link, '_blank', 'noopener,noreferrer');
  } else {
    // Otherwise, use the internal router
    router.push(props.link);
  }
};
</script>

<template>
  <Card class="evidence-card shadow-lg h-full flex flex-col overflow-hidden">
    <template #header v-if="image">
      <div class="image-wrapper">
        <img :src="image" :alt="title" class="project-img" />
      </div>
    </template>

    <template #title>
      <div class="text-center text-lg font-bold">{{ title }}</div>
    </template>

    <template #content>
      <p class="text-center text-gray-700 leading-relaxed">{{ description }}</p>
    </template>

    <template #footer>
      <div class="flex flex-col items-center">
        <Button 
          :label="buttonLabel" 
          icon="pi pi-arrow-right" 
          link 
          @click="navigate" 
          class="mb-4"
        /><br>
        <br>
        <div class="tag-container">
          <span v-for="tag in tech" :key="tag" class="tech-tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
/* Inherit PrimeVue padding, but keep your image & tag specifics */
.image-wrapper {
  height: 200px;
  width: 100%;
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tech-tag {
  background: #f0fdfa;
  color: #0d9488;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid #ccfbf1;
  margin: 0.2rem;
  display: inline-block;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 0; /* Vertical breathing room inside the bottom-hugging zone */
  border-top: 1px solid #f3f4f6;
  width: 100%;
}

/* 2. Tell PrimeVue's internal body to take up all available space */
:deep(.p-card-body) {
  display: flex;
  flex-direction: column;
  flex: 1; /* This is the 'engine' that pushes the footer down */
  padding: 1.5rem;
}

/* 3. Tell the content (description) area to grow */
:deep(.p-card-content) {
  flex: 1;
}

/* 4. The Footer is now naturally at the bottom, but we can remove 
      extra padding to make it truly 'hug' the edge */
:deep(.p-card-footer) {
  padding-bottom: 0;
  margin-top: auto; /* The final 'shove' to the bottom */
}

/* Force the Card to be a specific height if you want perfect rows */
.evidence-card {
  height: auto; /* Or whatever fixed height you prefer */
  display: flex;
  flex-direction: column;
  border-bottom: 5px solid #52aebb;
}
</style>