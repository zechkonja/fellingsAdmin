<template>
<div id="new-emotion-content">
  <aside class="menu">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><a>Dashboard</a></li>
      <li><a>Customers</a></li>
    </ul>
    <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <li><a>Team Settings</a></li>
      <li>
        <a class="is-active">Manage Your Team</a>
        <ul>
          <li><a>Members</a></li>
          <li><a>Plugins</a></li>
          <li><a>Add a member</a></li>
        </ul>
      </li>
      <li><a>Invitations</a></li>
      <li><a>Cloud Storage Environment Settings</a></li>
      <li><a>Authentication</a></li>
    </ul>
    <p class="menu-label">
      Transactions
    </p>
    <ul class="menu-list">
      <li><a>Payments</a></li>
      <li><a>Transfers</a></li>
      <li><a>Balance</a></li>
    </ul>
  </aside>
</div>
</template>

<script>
import router from '../router';
import store from '../store';

export default {
  name: 'new-emotion-content',
  computed: {
    emotion() {
      return store.state.emotion;
    },
  },
  beforeCreate() {
    if (!store.state.isLogged) {
      router.push('/login');
    }
  },
};
</script>

<style scoped>

</style>
