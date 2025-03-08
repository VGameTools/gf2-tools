import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/gf2-tools"),
  routes: [
    {
      path: "/",
      redirect: "/level",
    },
    {
      path: "/level",
      component: () => import("../views/level/Level.vue"),
      meta: {
        title: "晋升需求",
      },
    },
    {
      path: "/avatar",
      component: () => import("../views/avatar/AvatarList.vue"),
      meta: {
        title: "主题头像",
      },
    },
  ],
});

export default router;
