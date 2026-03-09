import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Prototyping from './views/Prototyping.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects/prototyping', component: Prototyping },
  // We can add Cycling and Woodworking here next!
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;