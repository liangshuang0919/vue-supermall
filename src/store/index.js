import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  isShowBackTop: false
};

const store = createStore({
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: {}
});

export default store;
