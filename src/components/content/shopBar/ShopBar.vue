<template>
  <div id="shop_bar" class="shop-bar">
    <div class="shop-bar-left">
      <!-- 客服 -->
      <div class="customer-service">
        <div class="pic"></div>
        <p>客服</p>
      </div>
      <!-- 店铺 -->
      <div class="shop">
        <div class="pic"></div>
        <p>店铺</p>
      </div>
      <!-- 收藏 -->
      <div class="collection" @click="collectClick">
        <div class="pic" v-show="isCollect"></div>
        <div class="collected" v-show="!isCollect"></div>
        <p>收藏</p>
      </div>
    </div>
    <div class="shop-bar-right">
      <div class="add-shop-cart">加入购物车</div>
      <div class="purchase">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopBar',
  data () {
    return {
      isCollect: false
    }
  },
  methods: {
    collectClick () {
      this.isCollect = !this.isCollect;
    }
  },
}
</script>

<style scoped>
.shop-bar {
  width: 100%;
  height: 55px;
}

.shop-bar .shop-bar-left {
  float: left;
  display: flex;
  justify-content: space-around;
  width: 55%;
  height: 100%;
  padding-top: 6px;
  text-align: center;
  background-color: #f6f6f6;
}

.shop-bar .shop-bar-left .pic ,
.shop-bar .shop-bar-left .collected{
  width: 28px;
  height: 28px;
}

.shop-bar .shop-bar-left .customer-service .pic {
  background: url(../../../assets/img/detail/detail_bottom.png) no-repeat center center;
  background-position: 0 -68px;
  background-size: 28px;
}

.shop-bar .shop-bar-left .shop .pic {
  background: url(../../../assets/img/detail/detail_bottom.png) no-repeat center center;
  background-position: 0 -126px;
  background-size: 28px;
}

.shop-bar .shop-bar-left .collection .pic {
  background: url(../../../assets/img/detail/detail_bottom.png) no-repeat center center;
  background-position: 0 0px;
  background-size: 28px;
}

.shop-bar .shop-bar-left .collection .collected {
  background: url(../../../assets/img/detail/detail_bottom.png) no-repeat center center;
  background-position: 0 -36px;
  background-size: 28px;
}

.shop-bar .shop-bar-left p {
  font-size: 14px;
}

.shop-bar .shop-bar-right {
  float: left;
  display: flex;
  justify-content: center;
  width: 45%;
  height: 100%;
  line-height: 55px;
}

.shop-bar .shop-bar-right div {
  width: 50%;
  text-align: center;
  font-size: 16px;
}

.shop-bar .shop-bar-right .add-shop-cart {
  background-color: rgb(228, 205, 78);
  color: #000;
}

.shop-bar .shop-bar-right .purchase {
  background-color: rgb(236, 86, 48);
  color: #fff;
}
</style>
