import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CV from "../components/cv.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cv",
    name: "cv",
    component: CV,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
