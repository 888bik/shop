import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/home/Home.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "404",
      component: () => import("../views/404.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views//login/Login.vue"),
    },
    {
      path: "/category",
      name: "Category",
      component: () => import("../views/category/Category.vue"),
    },
    {
      path:"/detail",
      name:"Detail",
      component:()=>import("../views/detail/Detail.vue")
    },
    {
      path:"/shopcart",
      name:"Shopcart",
      component:()=>import("../views/shopcart/Shopcart.vue")
    },
    {
      path:"/profile",
      name:"Profile",
      component:()=>import("../views/profile/Profile.vue")
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routers.routes,
  });
export default router;