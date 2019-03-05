import ApiService from '../services/api';

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
    async getFakePosts({ commit }, { id }) {
      const $fakeUrl = 'https://jsonplaceholder.typicode.com/posts';

      try {
        const response = await ApiService.GET($fakeUrl, { id });
        commit('updateFakePosts', { posts: response.data });
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
