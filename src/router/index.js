import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";

const routes = [
  { path: "/", name: "home", component: MainPage },
  {
    path: "/frontend",
    name: "frontend",
    component: () =>
      import(
        /*webpackChunkName:"frontend"*/ "@/views/vacancies/FrontendVacancy.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
