<template>
  <footer class="footer-container">
    <div class="social-links">
      <a href="https://www.linkedin.com/in/emmagiame/" target="_blank" rel="noopener" class="social-icon">
        <i class="pi pi-linkedin"></i>
      </a>
      
      <a href="https://github.com/emmagiame" target="_blank" rel="noopener" class="social-icon">
        <i class="pi pi-github"></i>
      </a>
      
      <a :href="resumePdf" target="_blank" class="resume-btn">
        <i class="pi pi-file-pdf mr-2"></i>
        Download Resume
      </a>
    </div>
    
    <p class="copyright">
      Emma Giamello
    </p>
  </footer>
</template>

<script>
import resumePdf from '@/src/docs/Emma_Giamello_Resume.pdf';
</script>

<style scoped>
/* src/components/Footer.vue */
.footer-container {
    margin-top: 15rem; /* Adjust this value to your liking */
    padding-top: 2rem;
    border-top: 1px solid #eee; /* Optional: adds a subtle separator line */
    width:100%;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem; /* Tighter gap */
  margin-bottom: 0.75rem;
}

.social-icon i {
  font-size: 1.2rem; /* Smaller icons */
  color: #6b7280;
}

.resume-btn {
  font-size: 0.85rem; /* Smaller text */
  padding: 0.4rem 0.8rem;
  background: #0d9488;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
}

.copyright {
  font-size: 0.75rem; /* Fine print size */
  color: #9ca3af;
  margin: 0;
}
</style>