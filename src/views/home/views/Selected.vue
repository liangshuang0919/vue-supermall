<template>
  <div id="">
    <!-- 商品展示组件 -->
    <goods-list :goodsData="goodsData['sell'].list" />
  </div>
</template>

<script>
// 导入商品展示的组件
import GoodsList from '@/components/content/goodsList/GoodsList'

export default {
  name: 'Selected',
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

<style scoped>
</style>
