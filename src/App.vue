<template>
  <div id="app">
    <canvas id="noise" class="noise"></canvas>
    <Header>
      <template v-slot:left>
        <Logo />
      </template>
      <template v-slot:right>
        <Navigation :routes="routes" id="app-nav" />
      </template>
    </Header>
    <main class="wrapper app-main">
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import { MockedRoutes } from '@/components/Navigation/NavRoutes';
import Navigation from '@/components/Navigation/Navigation.vue';
import Header from '@/components/Header/Header.vue';
import Logo from '@/components/Logo/Logo.vue';
import noiseCanvas from './utils/noiseCanvas';

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
  },
  mounted() {
    noiseCanvas();
  }
};
</script>

<style lang="scss">
@import 'App';
</style>
