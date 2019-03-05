<template>
  <div id="app">
    <Header>
      <template v-slot:left>
        <Logo />
      </template>
      <template v-slot:right>
        <Navigation :routes="routes" id="app-nav" />
      </template>
    </Header>
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
import Header from '@/components/Header/Header.vue';
import Logo from '@/components/Logo/Logo.vue';

export default {
  components: {
    Navigation,
    Header,
    Logo
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
