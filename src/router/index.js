import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { noNavbarFooter: true }, // Tambahkan meta
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
      meta: { noNavbarFooter: true }, // Tambahkan meta
    },
  ],
});

export default router;
