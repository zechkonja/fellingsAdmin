<template>
<aside id="left-menu" class="column is-2">
  <nav class="menu">
    <div :class="!superPermission ? 'hide' : ''">
      <p class="menu-label">
        Super Admin
      </p>
      <ul class="menu-list">
        <li>
          <router-link class="navbar-item" to="/super-home">Home</router-link>
        </li>
        <li>
          <router-link class="navbar-item" to="/super-users">Users</router-link>
        </li>
      </ul>
    </div>
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li>
        <router-link class="navbar-item" to="/dashboard">Dashboard</router-link>
      </li>
      <li>
        <router-link class="navbar-item" to="/users">Users</router-link>
      </li>
    </ul>
    <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <li><a>Team Settings</a></li>
      <li>
        <a class="">Manage Your Team</a>
        <ul>
          <li><a>Members</a></li>
          <li><a>Plugins</a></li>
          <li><a>Add a member</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</aside>
</template>

<script>
import firebase from 'firebase';
import router from '../router';
import store from '../store';

export default {
  name: 'left-menu',
  props: ['active'],
  computed: {
    permission() {
      return store.state.profile.isPsy;
    },
    superPermission() {
      return store.state.profile.isSuper;
    },
  },
  data() {
    return {
    };
  },
  mounted() {},
  methods: {

  },
};
</script>

<style lang="scss">

a.router-link-active{
  background-color: #7957d5;
  color: white;
}

a:hover.router-link-active{
  background-color: #7957d5;
  color: white;
}

.show {
    display: block;
    visibility: visible;
}

.hide {
    display: none;
}
</style>
