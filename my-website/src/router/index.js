import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";

// eslint-disable-next-line no-unused-vars
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  router,
});

export default router;
