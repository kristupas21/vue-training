import PostsRepository from '../repositories/PostsRepository';

export default {
  namespaced: true,
  state: {
    isLoading: false,
    posts: [],
    errors: null
  },
  actions: {
    getPosts({ commit }, { id }) {
      commit('setLoadingStatus', true);

      setTimeout(() => {
        this.dispatch('projectStore/getFakePosts', { id });
      }, 2000);
    },
    createPost({ commit }, data) {
      commit('setLoadingStatus', true);
      this.dispatch('projectStore/createFakePost', data);
    },
    async getFakePosts({ commit }, { id }) {
      try {
        const { data: posts } = await PostsRepository.getPost(id);
        commit('updateFakePosts', { posts });
      } catch (e) {
        commit('setError', e);
      }
    },
    async createFakePost({ commit }, data) {
      try {
        await PostsRepository.createPost(data);
        commit('setLoadingStatus', false);
      } catch (e) {
        commit('setError', e);
      }
    }
  },
  mutations: {
    updateFakePosts(state, { posts }) {
      state.posts = posts;
      state.isLoading = false;
    },
    setLoadingStatus(state, status) {
      state.isLoading = status;
    },
    setError(state, error) {
      state.error = error;
      state.isLoading = false;
    }
  },
  getters: {
    posts(state) {
      return state.posts;
    },
    isLoading(state) {
      return state.isLoading;
    },
    error(state) {
      return state.error;
    }
  }
};
