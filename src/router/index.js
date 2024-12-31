import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      //默认路径
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
    {
      path: "/:catchAll(.*)", // 匹配所有没有定义的路由
      name: "NotFound",
      component: () => import("@/views/notFound.vue"),
    },
  ],
});
export default router;
