import { types } from './mutations-types'

export default {
  addCart(context, payload) {
    // 判断新添加的商品在状态的 cartList 里面是否存在
    let hasProduct = context.state.cartList.find(item => item.iid === payload.iid);

    // 如果新添加的商品已经存在，只需让其数量加一即可；不存在的话，就将新的商品添加进去
    if (hasProduct) {
      // hasProduct.count += 1;
      context.commit(types.ADDCOUNT, hasProduct);
    } else {
      payload.count = 1;
      context.commit(types.ADDCART, payload); // 将添加至购物车里面的商品先暂时存入状态里面的 cartList 中进行存储
    }
  }
}
