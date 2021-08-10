<template>
  <div>
    <div class="cart-shop" v-for="item in cartList" :key="item.iid">
      <div class="left">
        <input type="checkbox" v-model="item.checked">
        <img :src="item.image" alt="">
      </div>
      <div class="right">
        <h2 class="shop-title">{{ item.title }}</h2>
        <div class="shop-desc">{{ item.desc }}</div>
        <div class="shop-price">
          <span class="price">￥{{ item.price }}</span>
          <span class="number">x{{ item.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartListItem',
  props: {
    cartList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.cart-shop {
  position: relative;
  height: 18vh;
  border-bottom: 1px solid #aaa;

  .left {
    float: left;
    width: 30%;
    height: 100%;
    padding: 5px;
    text-align: center;

    img {
      height: 100%;
      margin-left: 5px;
    }
  }

  .right {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0,-50%);
    width: 70%;
    height: auto;
    margin-right: 5px;

    .shop-title,
    .shop-desc {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .shop-price {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;

      .price {
        font-size: 18px;
        color: rgb(190, 86, 37);
      }

      .number {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}
</style>
