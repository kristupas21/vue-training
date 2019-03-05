<template>
  <div id="app">
    <Navigation :routes="routes" id="app-nav" />
    <div class="wrapper">
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import { MockedRoutes } from '@/components/Navigation/NavRoutes';
import Navigation from '@/components/Navigation/Navigation.vue';

export default {
  components: {
    Navigation
  },
  data() {
    return {
      routes: MockedRoutes
    };
  }
};
</script>

<style lang="scss">
  @import './styles/index';

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #app {
    max-width: 100%;
  }

</style>
