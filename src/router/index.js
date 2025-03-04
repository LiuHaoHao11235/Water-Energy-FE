import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Input from '../views/Input.vue';
import Analyze from '../views/Analyze.vue';
import LoginPage from '../views/LoginPage.vue';
const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: 'input', component: Input },
      { path: 'analyze', component: Analyze },
      { path: '', redirect: 'input' },
    ],
  },
  {
    path: '/login',
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;