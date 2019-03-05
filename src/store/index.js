import Vue from 'vue';
import Vuex from 'vuex';
import projectStore from "./project";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    projectStore
  }
})
