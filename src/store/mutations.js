import { types } from './mutations-types';

export default {
  [types.CHANGEINDEX](state, index) {
    state.currentIndex = index; // 修改 tabControl 的活跃的 index
  },
  [types.HOMEOFFSETTOP](state, offsetTop) {
    state.tabControlOffsetTop = offsetTop;
  },
  [types.SCROLLPOSITION](state, position) {
    if (position.y < -state.tabControlOffsetTop) {
      state.isShowBackTop = true; // 滚动的 y 轴小于 offsetTop 就让回到顶部按钮显示
    } else {
      state.isShowBackTop = false; // 否则让回到顶部按钮隐藏
    }
  },
  [types.DETAILPOSITION](state, offsetTop) {
    state.detailOffsetTop = offsetTop;
  },
  [types.DETAILBACKTOP](state, position) {
    if (position.y < -state.tabControlOffsetTop) {
      state.isDetailBackTop = true; // 滚动的 y 轴小于 offsetTop 就让回到顶部按钮显示
    } else {
      state.isDetailBackTop = false; // 否则让回到顶部按钮隐藏
    }
  },
}
