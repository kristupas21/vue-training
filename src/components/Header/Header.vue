<template>
  <header class="app-header" :class="{'app-header--active': active}" @mouseenter="setActive(true)"
          @mouseleave="setActive(false)">
    <div class="wrapper app-header__wrapper">
      <div class="app-header__left">
        <slot name="left"></slot>
      </div>
      <div class="app-header__right">
        <slot name="right"></slot>
      </div>
    </div>
  </header>
</template>

<script>
import activeMixin from '../../mixins/activeMixin';

export default {
  mixins: [activeMixin]
};
</script>

<style scoped lang="scss">
  @import '../../styles/source/colors';

  .app-header {
    // background: $retro-violet-dark;
    width: 100%;
    height: 110px;
    transition: background .2s ease;

    &__wrapper {
      display: flex;
      align-items: center;
      height: 100%;
    }

    &--active {
      // background: darken($retro-violet-dark, 10);
    }

    &__left {
      flex: 0 0 200px;
      height: 100%;
    }

    &__right {
      flex: 1 1 auto;
      height: 100%;
    }
  }
</style>
