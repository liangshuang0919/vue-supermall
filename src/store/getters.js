export default {
  shopCartCounter(state) {
    // 计算购物车中所有商品的个数
    return state.cartList.reduce((total, item) => {
      return total += item.count;
    }, 0);
  },
  cartList(state) {
    // 将商品列表返回
    return state.cartList;
  }
}
