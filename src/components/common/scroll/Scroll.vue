<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 导入一些用到的框架
// 导入滚动框架 Better-Scroll
import BScroll from 'better-scroll';

export default {
  name: 'Scroll',
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      taps: true,
      ObserveDom: true
    })
  },
}
</script>

<style scoped>
.wrapper {
  z-index: -1;
}
</style>
