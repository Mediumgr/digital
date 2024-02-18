import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";

const routes = [{ path: "/", name: "Home", component: MainPage }];

const categories = [
  "frontend",
  "java",
  "analytic",
  "qa",
  "net",
  "opensource",
  "postgree",
  "devops",
  "engineerQA",
];

categories.forEach((category) => {
  let name = category.charAt(0).toUpperCase() + category.slice(1);
  routes.push({
    path: `/${category}`,
    name: `${name}`,
    component: () =>
      import(
        /*webpackChunkName:"Vacancy"*/ "@/views/HiringVacancy.vue"
      ),
  });
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to) {
      return {
        top: 0,
      };
    }
  },
});

const getTitle = (routeName) => {
  return {
    Home: "ПСБ цифровая лаборатория",
    Frontend: "Вакансия Frontend-разработчик",
    Java: "Вакансия Java-разработчик",
    Analytic: "Вакансия Системный аналитик",
    Net: "Вакансия Net",
    Qa: "Вакансия Старший инженер по тестированию",
    Opensource: "Вакансия Администратор OpenSource",
    Postgree: "Вакансия Администратор PostgreSQL",
    Devops: "Вакансия Devops",
    EngineerQA: "Вакансия Инженер по нагрузочному тестированию",
  }[routeName];
};

router.afterEach((to) => {
  document.title = getTitle(to.name);
});

export default router;
