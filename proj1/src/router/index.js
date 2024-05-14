import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Profile from "../views/Profile.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/profile",
    name: "Profile",
    ccomponents: Profile,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  router,
});

export default router;
