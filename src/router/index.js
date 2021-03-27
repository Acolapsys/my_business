import Vue from "vue";
import VueRouter from "vue-router";

import store from "@/store";

import auth from "@/router/middleware/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../views/HomePage.vue"),
    meta: {
      title: "Мой бизнес",
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      title: "Личный кабинет",
      middleware: [auth],
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue"),
    meta: {
      title: "Авторизация",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next,
    store,
  };
  return middleware[0]({
    ...context,
  });
});
export default router;
