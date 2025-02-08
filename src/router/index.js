import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Input from '../views/Input.vue';
import Analyze from '../views/Analyze.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/input', component: Input },
  { path: '/analyze', component: Analyze },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;