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
    /* eslint-disable */
    const noise = () => {
      let canvas, ctx;

      let wWidth, wHeight;

      let noiseData = [];
      let frame = 0;

      let loopTimeout;


      // Create Noise
      const createNoise = () => {
        const idata = ctx.createImageData(wWidth, wHeight);
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
          if (Math.random() < 0.5) {
            buffer32[i] = 0xff000000;
          }
        }

        noiseData.push(idata);
      };


      // Play Noise
      const paintNoise = () => {
        if (frame === 9) {
          frame = 0;
        } else {
          frame++;
        }

        ctx.putImageData(noiseData[frame], 0, 0);
      };


      // Loop
      const loop = () => {
        paintNoise(frame);

        loopTimeout = window.setTimeout(() => {
          window.requestAnimationFrame(loop);
        }, (1000 / 25));
      };


      // Setup
      const setup = () => {
        wWidth = window.innerWidth;
        wHeight = window.innerHeight;

        canvas.width = wWidth;
        canvas.height = wHeight;

        for (let i = 0; i < 10; i++) {
          createNoise();
        }

        loop();
      };


      // Reset
      let resizeThrottle;
      const reset = () => {
        window.addEventListener('resize', () => {
          window.clearTimeout(resizeThrottle);

          resizeThrottle = window.setTimeout(() => {
            window.clearTimeout(loopTimeout);
            setup();
          }, 200);
        }, false);
      };


      // Init
      const init = (() => {
        canvas = document.getElementById('noise');
        ctx = canvas.getContext('2d');

        setup();
      })();
    };

    noise();
    /* eslint-enable */
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
    height: 100vh;
    max-width: 100%;
    width: 100vw;
    background: linear-gradient(rgba(0,0,0,.9),rgba(0,0,0,.1)), url('./assets/images/main-bkg.jpg') no-repeat;
    background-size: cover;
    z-index: 0;
  }

  .app-main {
    color: white;
  }

  .noise {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    pointer-events: none;
    opacity: .1;
  }
</style>
