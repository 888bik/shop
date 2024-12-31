import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/home/Home.vue"),
    },
    {
      path: "/home",
      component: () => import("@/views/home/Home.vue"),
    },
    {
      path: "/category",
      component: () => import("@/views/category/Category.vue"),
    },
    {
      path: "/shopCart",
      component: () => import("@/views/shopCart/ShopCart.vue"),
    },
    {
      path: "/login",
      component: () => import("@/views/login/Login.vue"),
    },
  ],
});
export default router;
