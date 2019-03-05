import Vue from 'vue';
import Vuex from 'vuex';
import { ProjectStore } from "./project";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    projectStore: ProjectStore
  }
})
