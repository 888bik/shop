import { createRouter, createWebHistory } from "vue-router";
const base = import.meta.VITE_BASE_URL || "/";
const router = createRouter({
  history: createWebHistory(base),
  routes: [
    {
      //默认路径
      path: "/",
      component: () => import("@/views/home/Home.vue"),
    },
    {
      path: "/home",
      component: () => import("@/views/home/Home.vue"),
      name: "主页",
    },
    {
      path: "/message",
      component: () => import("@/views/message/Message.vue"),
      name: "消息",
    },
    {
      path: "/shopCart",
      component: () => import("@/views/shopcart/Shopcart.vue"),
      name: "购物车",
    },
    {
      path: "/detail/:id",
      component: () => import("@/views/detail/Detail.vue"),
      props: true,
    },
    {
      path: "/login",
      name: "登录",
      component: () => import("@/views/login/Login.vue"),
    },
    {
      path: "/profile",
      name: "个人",
      component: () => import("@/views/profile/Profile.vue"),
    },
    {
      path: "/my",
      name: "我的",
      component: () => import("../views/my/My.vue"),
    },
    {
      path: "/register",
      name: "注册",
      component: () => import("../views/login/Register.vue"),
    },
  ],
});
//路由守卫
router.beforeEach((to, from, next) => {
  next();
  document.title = to.name;
});
export default router;
