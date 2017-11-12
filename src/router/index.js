import Vue from 'vue';
import Router from 'vue-router';
import LoginView from '@/components/login-view';
import HomeView from '@/components/home-view';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
    },
  ],
});
