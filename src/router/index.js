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
    },
    {
      path: "/category",
      component: () => import("@/views/category/Category.vue"),
    },
    {
      path: "/shopCart",
      component: () => import("@/views/shopcart/Shopcart.vue"),
    },
    {
      path: "/detail/:id",
      component: () => import("@/views/detail/Detail.vue"),
      props: true,
    },
    {
      path: "/login",
      name:"login",
      component: () => import("@/views/login/Login.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("@/views/profile/Profile.vue"),
    },
    {
      path:"/my",
      name:"my",
      component:()=>import("@/views/my/My.vue")
    },
    {
      path:"/register",
      name:"register",
      component:()=>import("@/views/login/Register.vue")
    }
  ]
})
//路由守卫
router.beforeEach((to, from, next) => {
  next();
  document.title = to.name;
});
export default router;
