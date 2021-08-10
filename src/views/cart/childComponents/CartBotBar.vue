<template>
  <div class="cart-bot-bar">
    <div class="checkBox">
      <input type="checkbox" id="check">&ensp;<label for="check">全部</label>
    </div>
    <div class="totalPrice">合计：{{ totalPrice }}</div>
    <div class="toResult">去结算{{ checkLength }}</div>
  </div>
</template>

<script>
export default {
  name: 'CartBotBar',
  computed: {
    totalPrice () {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength () {
      return '(' + this.$store.state.cartList.filter(item => item.checked).length + ')';
    }
  }
}
</script>

<style lang="less" scoped>
.cart-bot-bar {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 49px;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  font-size: 18px;

  .checkBox {
    width: 25%;
    background-color: #e6e6e6;
  }

  .totalPrice {
    width: 50%;
    background-color: #e6e6e6;
    font-weight: bold;
  }

  .toResult {
    width: 25%;
    background-color: rgba(255, 0, 0, .75);
    color: #fff;
  }
}
</style>
