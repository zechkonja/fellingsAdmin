<template>
<div id="footer">
  FOOTER
</div>
</template>

<script>
import router from '../router';
import store from '../store';

export default {
  name: 'app-content',
  data() {
    return {
    };
  },
  beforeCreate() {
    if (!store.state.isLogged) {
      router.push('/login');
    }
  },
  beforeUpdate() {
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style scoped>
#footer {
  margin: auto;
  padding: 10px;
}
</style>
