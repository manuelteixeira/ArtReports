import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import LoginView from '@/components/login-view';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView,
    },
  ],
});
