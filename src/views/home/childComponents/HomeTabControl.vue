<template>
  <div id="">
    <!-- 页面内小分区跳转组件 -->
    <tab-control class="tab-control" :tabControlData=tabControlData @click="homeTabControlClick" @tabControlType="homeTabControlType"></tab-control>
  </div>
</template>

<script>
// 导入页面内小分区跳转组件
import TabControl from '@/components/content/tabControl/TabControl';

export default {
  name: 'HomeTabControl',
  components: {
    TabControl
  },
  data () {
    return {
      tabControlData: [
        {
          path: "/home/popular",
          title: "流行"
        },
        {
          path: "/home/newproducts",
          title: "新款"
        },
        {
          path: "/home/selected",
          title: "精选"
        }
      ],
      typeIndex: 0
    }
  },
  methods: {
    // 下面是第一种孙祖健传值给爷爷组件的方法，经过父组件进行一层处理再传值
    homeTabControlType (index) {
      this.typeIndex = index; // 获取子组件传来的当前的 流行、新款、精选 这几个目前哪个被选中的 id
    },
    homeTabControlClick () {
      this.$emit('goodsType', this.typeIndex); // 传给父组件 当前的 流行、新款、精选 这几个目前哪个被选中的 id
    }
  },
}
</script>

<style lang="less" scoped>
</style>
