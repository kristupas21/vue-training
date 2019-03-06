<template>
  <div>
    <h1 class="view-heading">
      PROJECTS
    </h1>
    <Content :show-component="showComponent" :error="error" :posts="posts"/>
    <Form @onFormSubmit="createPost"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Content from './Content/Content.vue';
import Form from './Form/Form.vue';

export default {
  components: {
    Content,
    Form
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
      'getPosts',
      'createPost'
    ])
  },
  mounted() {
    this.getPosts({ id: [100, 101, 102, 103] });
  }
};
</script>

<style lang="scss" scoped>
  .error {
    color: red;
  }
</style>
