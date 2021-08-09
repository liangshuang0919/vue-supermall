<template>
  <div id="goods_list">
    <div class="goods-list content">
      <goods-list-item v-for="item in goodsData" :goodsDataItem="item" />
    </div>
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
  },
}
</script>

<style scoped>
.goods-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
