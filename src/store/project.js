import ApiService from '../services/api';

export const ProjectStore = {
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
        }, 2000)
    },
    async getFakePosts({ commit }, { id }) {
      const _fakeUrl = 'https://jsonplaceholder.typicode.com/posts';

      try {
        const get = await ApiService.GET(_fakeUrl, { id });
        commit('updateFakePosts', { posts: get.data });
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
