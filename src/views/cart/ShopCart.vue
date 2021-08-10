<template>
  <div class="shop-cart">
    <!-- 导航组件 -->
    <nav-bar class="home-nav-bar">
      <template v-slot:center>
        <h2>购物车( 商品总数：{{ shopCartSum }} )</h2>
      </template>
    </nav-bar>

    <!-- 滚动组件 -->
    <!-- 详情页的滚动组件 -->
    <scroll class="content" ref="scroll">
      <cart-list />
    </scroll>

    <!-- 底部结算组件 -->
    <cart-bot-bar />
  </div>
</template>

<script>
// 导入公共组件
// 导入顶部标题区域
import NavBar from '@/components/common/navbar/NavBar.vue';
// 导入滚动组件
import Scroll from '@/components/common/scroll/Scroll';

// 导入子组件
// 导入商品列表
import CartList from './childComponents/CartList';
// 导入底部商品结算组件
import CartBotBar from './childComponents/CartBotBar.vue';

// 导入 vuex 相关的东西
import { mapGetters } from 'vuex'; // getters 的辅助函数

export default {
  name: 'ShopCart',
  components: {
    NavBar,
    CartList,
    CartBotBar,
    Scroll
  },
  computed: {
    shopCartSum () {
      return this.$store.getters.shopCartCounter + '个商品';
    },
    // 下面是 getters 的辅助函数
    ...mapGetters({
      shopCartSum: 'shopCartCounter'
    }),
  },
  activated () {
    this.$refs.scroll.refresh();
  },
}
</script>

<style lang="less" scoped>
.shop-cart {
  height: 100vh;

  .home-nav-bar {
    background-color: var(--color-tint);

    h2 {
      color: #fff;
    }
  }

  .content {
    height: calc(100vh - 141px);
    overflow: hidden;
  }
}

</style>
