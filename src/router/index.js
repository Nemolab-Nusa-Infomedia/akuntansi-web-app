import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import BlogView from "../views/BlogView.vue";
import HargaView from "@/views/HargaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { noNavbarFooter: true },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
      meta: { noNavbarFooter: true },
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/harga",
      name: "harga",
      component: HargaView,
    },
  ],
});

export default router;
