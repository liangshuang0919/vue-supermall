<template>
  <div id="goods_list" class="goods-list">
    <goods-list-item v-for="item in goodsData" :popGoodsDataItem="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goodsData: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
