import { types } from './mutations-types';

export default {
  [types.SCROLLPOSITION](state, position) {
    if (position.y < -630) {
      state.isShowBackTop = true; // 滚动的 y 轴小于 -630 就让回到顶部按钮显示
    } else {
      state.isShowBackTop = false; // 否则让回到顶部按钮隐藏
    }
  }
}
