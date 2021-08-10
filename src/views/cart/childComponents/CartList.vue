<template>
  <div class="cart-list">
    <cart-list-item :cartList="cartList" />
  </div>
</template>

<script>
// 导入子组件
// 导入商品列表的信息组件
import CartListItem from './CartListItem';

// 导入 vuex 相关
import { mapGetters } from 'vuex'; // getters 的辅助函数

export default {
  name: 'CartList',
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters({
      cartList: 'cartList'
    })
  },
}
</script>

<style lang="less" scoped>
</style>
