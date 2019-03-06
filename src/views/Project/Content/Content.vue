<template>
  <div style="position: relative; min-height: 80px">
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
  </div>
</template>

<script>
import Loader from '@/components/Loader/Loader.vue';

export default {
  components: {
    Loader
  },
  props: {
    showComponent: String,
    posts: Array,
    error: String
  }
};
</script>

<style scoped lang="scss"></style>
