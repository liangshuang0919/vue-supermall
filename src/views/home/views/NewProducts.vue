<template>
  <div id="new_products">
    <!-- 商品展示组件 -->
    <goods-list :goodsData="goodsData['new'].list" />
  </div>
</template>

<script>
// 导入商品展示的组件
import GoodsList from '@/components/content/goodsList/GoodsList'

export default {
  name: 'NewProducts',
  components: {
    GoodsList
  },
  props: {
    goodsData: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
