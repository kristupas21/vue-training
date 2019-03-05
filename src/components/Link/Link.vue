<template>
    <a v-if="type === 'external'" :href="to" target="_blank" :class="className" rel="noopener noreferrer">
        <slot></slot>
    </a>
    <router-link v-else :to="to" :class="className" @click.native="onClick(to)">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: 'nav'
    },
    to: {
      type: String,
      default: undefined
    },
    type: {
      type: String,
      default: 'internal'
    }
  },
  methods: {
    onClick(to) {
      this.$emit('clickCallback', to);
    }
  }
};
</script>

<style scoped lang="scss"></style>
