import { createStore } from 'vuex';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

const state = {};

const store = createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: {}
});

export default store;
