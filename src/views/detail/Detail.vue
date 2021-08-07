<template>
  <div id="detail">
    <detail-nav-bar />
  </div>
</template>

<script>
// 导入子组件
// 导入顶部 detail-nav-ber
import DetailNavBar from './childComponents/DetailNavBar.vue'

// 导入接口
// 导入商品详情接口
import { getDetail } from '@/network/detail'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
  },
  data () {
    return {
      iid: null
    }
  },
  created () {
    // 1. 保存传来的 iid
    this.iid = this.$route.params.iid;

    // 2. 根据 iid 请求详细的数据
    getDetail(this.iid)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  },
}
</script>

<style scoped>
</style>
