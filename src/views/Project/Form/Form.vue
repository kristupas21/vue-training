<template>
  <form class="post-form" v-on:submit.prevent="submitPost(form)">
    <div class="post-form__field">
      <label class="post-form__label" for="userId">User ID</label>
      <input class="post-form__input" id="userId" type="text" placeholder="Enter User ID" v-model="form.userId">
    </div>
    <div class="post-form__field">
      <label class="post-form__label" for="postTitle">Title</label>
      <input class="post-form__input" id="postTitle" type="text" placeholder="Enter Title" v-model="form.title">
    </div>
    <div class="post-form__field">
      <label class="post-form__label" for="postBody">Body</label>
      <textarea class="post-form__textarea" id="postBody" placeholder="Enter Body" v-model="form.body"></textarea>
    </div>
    <div class="post-form__submit">
      <button class="post-form__button" type="submit">
        SUBMIT
      </button>
    </div>
  </form>
</template>

<script>

export default {
  data() {
    return {
      form: {
        userId: '',
        title: '',
        body: ''
      }
    };
  },
  methods: {
    submitPost({ userId, title, body }) {
      this.$emit('onFormSubmit', { userId, title, body });
    }
  }
};
</script>

<style scoped lang="scss">
@import './Form';
</style>
