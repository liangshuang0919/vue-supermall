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
  props: {
    // probeType 是用于设置 scroll 的 peobeType 属性的，设置是否实时监听
    probeType: {
      type: Number,
      default: 0
    },

    // pullUpLoad 适用于设置 scroll 的 pullUpLoad 属性的，设置是否上拉加载更多
    pullUpLoad: {
      typeof: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null, // 为将要创建的 BScroll 对象先设为 null
    }
  },
  mounted () {
    this.initBscroll(); // 调用 better-scroll 的众多方法
  },
  methods: {
    // 1. 为 better-scroll 事件封装
    initBscroll () {
      // 初始化 BScroll 实例
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true, // 允许 scroll 里面的点击元素进行点击
        taps: true,
        ObserveDom: true, // better-scroll2 中设置这个才可以进行滑动
        pullUpLoad: this.pullUpLoad, // 上划加载
        probeType: this.probeType, // 这里不要写死设置为 3，因为有的地方需要实时监听的话，设置了 3，会影响性能
        observeImage: true
      });

      // 注册滑动事件
      this.scroll.on('scroll', (position) => {
        // 谁调用这个函数，将 position 传给谁，用来进行回到顶部按钮的显示和隐藏
        this.$emit('scroll', position);
      });

      // 注册下拉加载更多事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp');
        // this.scroll.finishPullUp(); // 调用再次下拉加载更多
        this.finishPullUp(); // 调用再次下拉加载更多
        // this.scroll.refresh(); // 每次进行下拉加载更多时，对可滚动的的区域进行重新计算，进行刷新
        this.refresh(); // 每次进行下拉加载更多时，对可滚动的的区域进行重新计算，进行刷新
      });
    },

    // 2. 封装滚动到某一个位置的方法
    scrollTo (x, y, time = 600) {
      this.scroll.scrollTo(x, y, time);
    },

    // 3. 封装加载更多事件（因为 pullingUp 只能加载一次）
    // better-scroll 中有一个 finishPullUp 方法
    finishPullUp () {
      this.scroll.finishPullUp();
    },

    // 4. 封装 refresh 重新计算加载的高度
    refresh () {
      this.scroll.refresh();
    },
  },
}
</script>

<style scoped>
.wrapper {
  z-index: -1;
}
</style>
