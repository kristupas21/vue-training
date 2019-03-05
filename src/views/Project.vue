<template>
  <Loader v-if="showComponent === 'LOADING'"></Loader>
  <div v-else-if="showComponent === 'CONTENT'">
    <div v-for="post of posts" :key="post.id">
      <strong>{{ post.id }}. </strong>
      <span>{{ post.title }}</span>
    </div>
  </div>
  <div v-else class="error">
    {{ error }}
  </div>
</template>

<script>
import Loader from '../components/Loader/Loader.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    Loader
  },
  computed: {
    ...mapGetters('projectStore', [
      'isLoading',
      'posts',
      'error'
    ]),
    showComponent: {
      get() {
        return (this.isLoading)
          ? 'LOADING'
          : (!!this.error)
            ? 'ERROR'
            : 'CONTENT';
      }
    }
  },
  methods: {
    ...mapActions('projectStore', [
      'getPosts'
    ])
  },
  mounted() {
    this.getPosts({ id: [15, 16, 18] });
  }
}
</script>

<style lang="scss" scoped>
  .error {
    color: red;
  }
</style>
