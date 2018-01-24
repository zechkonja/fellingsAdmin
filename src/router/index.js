import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Home from '@/components/Home';
import NewAccount from '@/components/NewAccount';
import SuperHome from '@/components/super/Home';
import SuperUsers from '@/components/super/SuperUsers';
import Dashboard from '@/components/admin-pages/Dashboard';
import Users from '@/components/admin-pages/Users';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/new-account',
      name: 'NewAccount',
      component: NewAccount,
    },
    {
      path: '/super-home',
      name: 'SuperHome',
      component: SuperHome,
    },
    {
      path: '/super-users',
      name: 'SuperUsers',
      component: SuperUsers,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
  ],
});
