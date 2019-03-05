<template>
  <div class="loader" :class="loaderClasses">
    <div class="loader__element">
      <div v-if="withBackground" class="loader__text">
        LOADING
      </div>
      <div class="loader__lines">
        <span v-for="num in times"
              :class="[ 'loader__line', `loader__line--${num}` ]"
              :key="`loader__line--${num}`"
        >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      theme: {
        type: String,
        default: 'light'
      },
      withBackground: {
        type: Boolean,
        default: true
      },
      withText: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      loaderClasses: {
        get() {
          return {
            loader: true,
            'loader--dark': this.theme === 'dark',
            'loader--with-bkg': this.withBackground
          }
        }
      }
    },
    data() {
      return {
        times: 9
      }
    }
  }
</script>

<style scoped lang="scss">
@import 'Loader';
</style>
