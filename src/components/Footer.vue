<template>
  <footer class="footer-container">
    <div class="social-links">

      <!-- LinkedIn -->
      <a href="https://www.linkedin.com/in/emmagiame/" target="_blank" rel="noopener" class="social-icon">
        <i class="pi pi-linkedin"></i>
      </a>

      <!-- GitHub -->
      <a href="https://github.com/emmagiame" target="_blank" rel="noopener" class="social-icon">
        <i class="pi pi-github"></i>
      </a>

      <!-- Email -->
      <a 
        href="mailto:emmagiame@gmail.com" 
        aria-label="Send Email" 
        class="social-icon"
      >
        <i class="pi pi-envelope"></i>
      </a>

      <!-- Resume Download -->
      <a 
        href="/Emma_Giamello_Resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        download="Emma_Giamello_Resume.pdf"
        class="resume-btn"
      >
        <i class="pi pi-file-pdf mr-2"></i>
        Download Resume
      </a>
    </div>
    
    <p class="copyright">
      &copy; {{ currentYear }} Emma Giamello. All rights reserved.
    </p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer-container {
  margin-top: 6rem; /* Reduced from 15rem for better responsive spacing */
  padding: 2.5rem 1rem;
  border-top: 1px solid #e5e7eb;
  width: 100%;
  text-align: center;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1rem;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: color 0.2s ease;
}

.social-icon i {
  font-size: 1.25rem;
  color: #6b7280;
}

.social-icon:hover i {
  color: #111827; /* Darker hover effect */
}

.resume-btn {
  display: inline-flex;
  align-items: center;
  font-size: 0.85rem;
  padding: 0.45rem 0.9rem;
  background: #0d9488;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.resume-btn:hover {
  background: #0f766e; /* Subtle hover state */
}

.copyright {
  font-size: 0.75rem;
  color: #9ca3af;
  margin: 0;
}
</style>