<template>
<header class="hero is-light">
  <div class="hero-head">
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">

        <a class="navbar-item is--brand">
            <img class="navbar-brand-logo" src="../assets/logo-heart.png" alt="Home Logo">
          </a>
        <a class="navbar-item is-tab is-hidden-mobile is-active"><span class="icon is-medium"><i class="fa fa-home"></i></span>Home</a>
        <a class="navbar-item is-tab is-hidden-mobile">Features</a>
        <a class="navbar-item is-tab is-hidden-mobile">Pricing</a>
        <a class="navbar-item is-tab is-hidden-mobile">About</a>

        <button class="button navbar-burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
      </div>

      <div class="navbar-menu navbar-end" id="navMenu">
        <a class="navbar-item is-tab is-hidden-tablet is-active">Home</a>
        <a class="navbar-item is-tab is-hidden-tablet">Features</a>
        <a class="navbar-item is-tab is-hidden-tablet">Pricing</a>
        <a class="navbar-item is-tab is-hidden-tablet">About</a>
        <a class="navbar-item nav-tag">
            <span class="icon is-small">
              <i class="fa fa-envelope-o"></i>
            </span>
            <span class="tag is-primary tag-notif">6</span>
          </a>
        <div class="navbar-item has-dropdown" :class="!showHide ? 'is-hoverable' : ''">
          <a class="navbar-link">
            <figure class="image is-32x32" style="margin-right:.5em;">
              <img src="../assets/advisor_img.png" />
            </figure>
            nemanja
          </a>

          <div class="navbar-dropdown is-right">
            <a class="navbar-item">
                  <span class="icon is-small">
                    <i class="fa fa-user-o"></i>
                  </span>
                  Profile
                </a>
            <hr class="navbar-divider">
            <a class="navbar-item" @click="logout">
                  <span class="icon is-small">
                    <i class="fa fa-power-off"></i>
                  </span>
                  Logout
                </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>
</template>

<script>
import firebase from 'firebase';
import router from '../router';
import store from '../store';

export default {
  name: 'app-header',
  data() {
    return {
      showHide: false,
    };
  },
  beforeCreate() {
    if (!store.state.isLogged) {
      router.push('/login');
    }
  },
  methods: {
    logout() {
      this.showHide = !this.showHide;
      firebase.auth().signOut().then(() => {
        store.commit('LOGOUT_USER');
        router.push('login');
      }).catch((error) => {
        // An error happened.
        throw new Error(error);
      });
    },
  },
};
</script>

<style scoped>
.show {
  display: block;
  visibility: visible;
}

.hide {
  display: none;
}
</style>
