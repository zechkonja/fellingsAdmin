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
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <figure class="image is-32x32" style="margin-right:.5em;">
                <img src="../assets/advisor_img.png" />
              </figure>
              mazipan
            </a>

            <div class="navbar-dropdown is-right">
                <a class="navbar-item">
                  <span class="icon is-small">
                    <i class="fa fa-user-o"></i>
                  </span>
                  Profile
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
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
<!-- <header class="hero is-light">
  <div class="hero-head">
    <nav class="nav has-shadow">
      <div class="nav-left">
        <a class="nav-item">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
        </a>
        <a class="nav-item is-tab is-hidden-mobile is-active">Home</a>
        <a class="nav-item is-tab is-hidden-mobile">Features</a>
        <a class="nav-item is-tab is-hidden-mobile">Pricing</a>
        <a class="nav-item is-tab is-hidden-mobile">About</a>
      </div>
      <span class="nav-toggle">
        <span></span>
      <span></span>
      <span></span>
      </span>
      <div class="nav-right nav-menu">
        <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
        <a class="nav-item is-tab is-hidden-tablet">Features</a>
        <a class="nav-item is-tab is-hidden-tablet">Pricing</a>
        <a class="nav-item is-tab is-hidden-tablet">About</a>
        <a class="nav-item is-tab">
          <figure class="image is-16x16" style="margin-right: 8px;">
            <img src="http://bulma.io/images/jgthms.png">
          </figure>
          Profile
        </a>
        <a class="nav-item is-tab">Log out</a>
      </div>
    </nav>
  </div>
</header> -->
</template>

<script>
import firebase from 'firebase';
import router from '../router';
import store from '../store';

export default {
  name: 'app-header',
  data() {
    return {
      activator: false,
    };
  },
  beforeCreate() {
    if (!store.state.isLogged) {
      router.push('/login');
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        store.commit('LOGOUT_USER');
        router.push('login');
      }).catch((error) => {
        // An error happened.
        throw new Error(error);
      });
    },
    makeBurger() {
      this.activator = !this.activator;
      return this.activator;
    },
  },
};
</script>

<style scoped>

</style>
