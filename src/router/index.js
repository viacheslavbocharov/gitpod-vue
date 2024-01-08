import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomePage.vue'; // Import your Home component
import About from '@/views/AboutPage.vue'; // Import your About component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;