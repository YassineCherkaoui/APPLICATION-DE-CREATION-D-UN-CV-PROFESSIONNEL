import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CV from "../components/cv.vue";
import Download from "../components/Download.vue";

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
  },
  {
    path: "/download",
    name: "Download",
    component: Download,
  },
];

export default router;
