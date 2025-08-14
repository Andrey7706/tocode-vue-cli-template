import {createRouter, createWebHistory} from 'vue-router';

const routeHistory = createWebHistory();

import HomePage from './pages/homePage.vue';
import AboutPage from './pages/aboutPage.vue';
import NotFoundPage from './pages/notFound.vue';

const routers = createRouter({
  history: routeHistory,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage,
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: NotFoundPage,
    },
  ],
});

export default routers;