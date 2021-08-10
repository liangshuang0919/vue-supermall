<template>
  <div id="popular">
    <!-- 商品展示组件 -->
    <goods-list :goodsData="goodsData['pop'].list" />
  </div>
</template>

<script>
// 导入商品展示的组件
import GoodsList from '@/components/content/goodsList/GoodsList'

export default {
  name: 'Popular',
  props: {
    goodsData: {
      typs: Object,
      default () {
        return {}
      },
    }
  },
  components: {
    GoodsList
  },
}
</script>

<style lang="less" scoped>
</style>
