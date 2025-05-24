import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'
import AboutMePageView from "../views/AboutMePageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePageView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMePageView
    }
  ],
})

export default router
