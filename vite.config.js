// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Changing this to '/' tells the browser to look at the ROOT 
  // of emmagiamello.com for your JS and Images.
  base: '/', 
})