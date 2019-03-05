<template>
  <Loader v-if="showComponent === 'LOADING'" :with-background="false" theme="dark"></Loader>
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
import { mapActions, mapGetters } from 'vuex';
import Loader from '../components/Loader/Loader.vue';

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
        if (this.isLoading) {
          return 'LOADING';
        }

        if (this.error) {
          return 'ERROR';
        }

        return 'CONTENT';
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
};
</script>

<style lang="scss" scoped>
  .error {
    color: red;
  }
</style>
