<script setup>
defineProps({
  title: String,
  image: String,
  description: String,
  tech: Array 
});
</script>

<template>
  <div class="evidence-card">
    <div class="image-wrapper">
      <img :src="image" :alt="title" class="project-img" />
    </div>
    
    <div class="content-area">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
      
      <div class="tag-container">
        <span v-for="tag in tech" :key="tag" class="tech-tag">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.evidence-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  height: 500px; 
  width: 100%;
  display: flex;
  flex-direction: column;
}

.content-area {
  padding: 1.25rem;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 200px; 
  justify-content: space-between;
}

.image-wrapper {
  height: 220px; 
  width: 100%;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1; 
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.tech-tag {
  background: #f0fdfa; /* Light Teal */
  color: #0d9488; /* Dark Teal */
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid #ccfbf1;
}
</style>