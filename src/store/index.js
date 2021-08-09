import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  currentIndex: 0, // tabControl 上目前是哪一个的下标
  isShowBackTop: false, // 是否显示回到顶部按钮
  tabControlOffsetTop: 0, // tabControl 的 offsetTop 值，来实现吸顶效果
  isDetailBackTop: false, // 详情页的回到顶部按钮是否显示隐藏
  detailOffsetTop: 0, // tabControl 的 offsetTop 值，来实现吸顶效果
};

const store = createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: {}
});

export default store;
