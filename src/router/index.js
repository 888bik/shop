import { createRouter, createWebHistory } from "vue-router";
<<<<<<< HEAD
import Home from "../views/home/Home.vue";
const base = import.meta.VITE_BASE_URL || '/';
const router = createRouter({
  history: createWebHistory(base),
=======

const router = createRouter({
  history: createWebHistory(),
>>>>>>> d84359cda07c3dd936483fdb29b48052ed021a00
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
<<<<<<< HEAD
      path:"/profile",
      name:"Profile",
      component:()=>import("../views/profile/Profile.vue")
    }
  ]
})
//路由守卫
  router.beforeEach((to,from,next)=>{
    next();
    document.title = to.name;
  })
export default router;
=======
      path: "/:catchAll(.*)", // 匹配所有没有定义的路由
      name: "NotFound",
      component: () => import("@/views/notFound.vue"),
    },
  ],
});
export default router;
>>>>>>> d84359cda07c3dd936483fdb29b48052ed021a00
