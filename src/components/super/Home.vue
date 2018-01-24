<template>
<div id="super-home" class="section">
  <div class="columns">
    <LeftMenu />
    <main class="column">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <div class="title">Super Admin Home</div>
          </div>
        </div>
      </div>

      <div class="columns is-multiline">
        <div class="column">
          jsfgklfdgskl
        </div>
      </div>

      <!-- <div class="columns is-multiline">
        <div class="column is-6">
          <div class="panel">
            <p class="panel-heading">
              Expenses: Daily - $700
            </p>
            <div class="panel-block">
              <figure class="image is-16x9">
                <img src="https://placehold.it/1280x720">
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="panel">
            <p class="panel-heading">
              Refunds: Daily - $200
            </p>
            <div class="panel-block">
              <figure class="image is-16x9">
                <img src="https://placehold.it/1280x720">
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="panel">
            <p class="panel-heading">
              Something
            </p>
            <div class="panel-block">
              <figure class="image is-16x9">
                <img src="https://placehold.it/1280x720">
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="panel">
            <p class="panel-heading">
              Something Else
            </p>
            <div class="panel-block">
              <figure class="image is-16x9">
                <img src="https://placehold.it/1280x720">
              </figure>
            </div>
          </div>
        </div>
      </div> -->
    </main>
  </div>
</div>
</template>

<script>
import LeftMenu from '../LeftMenu';

export default {
  name: 'super-home',
  components: {
    LeftMenu,
  },
  props: {
    show: Boolean,
  },
  data() {
    return {
      isReady: false,
    };
  },
  mounted() {},
  methods: {

  },
};
</script>

<style lang="scss">

</style>
