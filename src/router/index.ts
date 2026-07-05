import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      component: () => import("../pages/login/index.vue")
    },
    {
      path: "/app",
      component: () => import("../layouts/TabLayout.vue"),
      children: [
        {
          path: "",
          redirect: "/app/index"
        },
        {
          path: "index",
          component: () => import("../pages/index/index.vue")
        },
        {
          path: "order",
          component: () => import("../pages/order/index.vue")
        },
        {
          path: "message",
          component: () => import("../pages/message/index.vue")
        },
        {
          path: "mine",
          component: () => import("../pages/mine/index.vue")
        }
      ]
    }
  ]
});

export default router;