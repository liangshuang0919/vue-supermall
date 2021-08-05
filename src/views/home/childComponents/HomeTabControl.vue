<template>
  <div id="">
    <!-- 页面内小分区跳转组件 -->
    <tab-control class="tab-control" :tabControlData=tabControlData></tab-control>
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
    }
  },
}
</script>

<style scoped>
</style>
