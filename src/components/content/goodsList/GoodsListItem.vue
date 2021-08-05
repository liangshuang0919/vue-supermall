<template>
  <div id="goods_list_item" class="goods-list-item">
    <div class="items">
      <!-- 商品图片 -->
      <img :src="popGoodsDataItem.show.img" alt="">
      <div class="text">
        <!-- 商品描述 -->
        <p>{{ popGoodsDataItem.title }}</p>
        <!-- 商品价格 -->
        <span class="price">{{ popGoodsDataItem.price }}</span>
        <!-- 商品收藏数 -->
        <span class="cfav">{{ popGoodsDataItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    popGoodsDataItem: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  width: 47%;
  margin: .5rem 0;
  text-align: center;
}

/* 商品图片样式 */
.items img {
  width: 100%;
  border-radius: 10px;
}

/* 商品描述样式 */
.items .text p {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.items .text span {
  margin: 0 10px;
}

/* 商品价格样式 */
.items .text .price {
  font-size: 14px;
  color: var(--color-tint);
}

/* 商品收藏样式 */
.items .text .cfav {
  position: relative;
}

.items .text .cfav::before {
  display: block;
  content: "";
  position: absolute;
  left: -15px;
  top: 1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
