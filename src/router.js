import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Prototyping from './views/Prototyping.vue';
import ProblemSolving from './views/ProblemSolving.vue';
import Communication from './views/Communication.vue';
import Woodworking from './views/Woodworking.vue';
import CustomBuilds from './views/CustomBuilds.vue';
import WebApp from './views/WebApp.vue'; 
import CarBuild from './views/builds/CarBuild.vue';
import BikeBuild from './views/builds/BikeBuild.vue';
import KeyboardBuild from './views/builds/KeyboardBuild.vue';
import PCBuild from './views/builds/PCBuild.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects/problem-solving', component: ProblemSolving },
  { path: '/projects/webapp', component: WebApp },
  { path: '/projects/communication', component: Communication },
  { path: '/projects/prototyping', component: Prototyping },
  { path: '/projects/woodworking', component: Woodworking },
  { path: '/projects/custombuilds', component: CustomBuilds },
  { path: '/projects/custombuilds/car', component: CarBuild },
  { path: '/projects/custombuilds/bike', component: BikeBuild },
  { path: '/projects/custombuilds/keyboard', component: KeyboardBuild },
  { path: '/projects/custombuilds/pc', component: PCBuild },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If the user hits the "Back" button, return them to where they were
    if (savedPosition) {
      return savedPosition;
    } else {
      // For all other navs, reset to the top of the page
      return { top: 0, behavior: 'smooth' }; // 'smooth' makes it slide nicely
    }
  },
});

export default router;