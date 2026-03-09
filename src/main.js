import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import router from './router'; // Import the router
import App from './App.vue';
import 'primeicons/primeicons.css';
import './style.css'; 

const app = createApp(App);
app.use(PrimeVue, { theme: { preset: Aura } });
app.use(router); // Enable the router
app.mount('#app');
