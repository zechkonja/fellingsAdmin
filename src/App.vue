<template>
<div id="main-app">
  <app-header></app-header>
  <router-view/>
  <app-footer></app-footer>
</div>
</template>

<script>
import router from './router';
import store from './store';
import appHeader from './components/Header';
import appFooter from './components/Footer';

export default {
  name: 'main-app',
  components: {
    'app-header': appHeader,
    'app-footer': appFooter,
  },
  beforeCreate() {
    if (!store.state.isLogged) {
      router.push('/login');
    }
  },
};
</script>

<style>
#main-app {

}
</style>
