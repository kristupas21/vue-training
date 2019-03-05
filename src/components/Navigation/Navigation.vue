<template>
    <nav :id="id"
         class="nav"
         :class="{ 'nav--active': active }"
         @mouseenter="setActive(true)"
         @mouseleave="setActive(false)"
    >
        <AppLink v-for="route in routes"
                 :to="route.to"
                 :key="route.id"
                 className="nav__link"
                 :name="route.name"
                 @clickCallback="callback"
        >
          <span class="nav__text">
            {{ route.title }}
          </span>
        </AppLink>
    </nav>
</template>

<script>
import AppLink from '../Link/Link.vue';

export default {
  components: {
    AppLink
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    routes: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    setActive(value) {
      this.active = value;
    },
    callback(to) {
      console.log(to);
    }
  }
};

</script>

<style scoped lang="scss">
@import "Navigation";
</style>
