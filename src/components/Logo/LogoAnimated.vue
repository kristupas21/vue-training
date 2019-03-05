<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 507.84 507.9" height="100%">
    <defs>
      <linearGradient id="linear-gradient" x1="299.97" y1="537.59" x2="299.97" y2="31.46" gradientTransform="matrix(1, 0, 0, -1, 0, 602)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#ece956"/>
        <stop offset="1" stop-color="#ef3f6b"/>
      </linearGradient>
      <linearGradient id="linear-gradient-3" x1="300" y1="537.59" x2="300" y2="31.46" xlink:href="#linear-gradient"/>
    </defs>
    <g id="SUN">
      <path id="p1" class="cls-2 cl" :class="{ show: isActive(1)}" d="M553.92,296.93C552.29,158.09,439.2,46.1,300,46.1S47.77,158.14,46.08,296.93Z" transform="translate(-46.08 -46.1)"/>
      <path id="p2" class="cls-1 cl" :class="{ show: isActive(2)}" d="M46.08,303.11A257.74,257.74,0,0,0,49,338.88H551a248.82,248.82,0,0,0,2.91-35.77Z" transform="translate(-46.08 -46.1)"/>
      <path id="p3" class="cls-1 cl" :class="{ show: isActive(3)}" d="M50.57,347.86a257.39,257.39,0,0,0,8.62,33H540.75a249.45,249.45,0,0,0,8.63-33Z" transform="translate(-46.08 -46.1)"/>
      <path id="p4" class="cls-1 cl" :class="{ show: isActive(4)}" d="M63.44,392.6a256.73,256.73,0,0,0,14.22,30.3H522.28a252.32,252.32,0,0,0,14.22-30.3Z" transform="translate(-46.08 -46.1)"/>
      <path id="p5" class="cls-1 cl" :class="{ show: isActive(5)}" d="M86.34,437.29a262.47,262.47,0,0,0,20.45,27.51H493.15a254.3,254.3,0,0,0,20.45-27.51Z" transform="translate(-46.08 -46.1)"/>
      <path id="p6" class="cls-2 cl" :class="{ show: isActive(6)}" d="M447.41,506.81A262,262,0,0,0,477.07,482H122.93a251.82,251.82,0,0,0,29.66,24.77Z" transform="translate(-46.08 -46.1)"/>
      <path id="p7" class="cls-2 cl" :class="{ show: isActive(7)}" d="M185.57,526.79a254.22,254.22,0,0,0,228.86,0Z" transform="translate(-46.08 -46.1)"/>
    </g>
  </svg>
</template>

<script>
  export default {
    data() {
      return {
        activeLines: [],
        interval: undefined
      };
    },
    methods: {
      isActive(num) {
        return this.activeLines.includes(num);
      }
    },
    mounted() {
      let num = 0;

      function add() {
        if (num === 8) {
          clearInterval(this.interval);
        } else {
          this.activeLines.push(num);
          num += 1;
        }
      }

      this.interval = setInterval(add.bind(this), 50);
    }
  };
</script>

<style lang="scss">
  .cls-1 {
    fill: url(#linear-gradient);
  }

  .cls-2 {
    fill: url(#linear-gradient-3);
  }

  .cl {
    opacity: 0;
    transition: opacity .2s ease;

    &.show {
      opacity: 1;
    }
  }
</style>
