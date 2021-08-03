<template>
  <div id='home'>
    <!-- 导航组件 -->
    <nav-bar class="home-nav-bar">
      <template v-slot:center>
        <h2>购物街</h2>
      </template>
    </nav-bar>

    <!-- 轮播图组件 -->
    <rotation-chart :bannerData="bannerData" />
  </div>
</template>

<script>
// 导入首页导航的组件
import NavBar from '@/components/common/navbar/NavBar.vue';
import RotationChart from '@/components/common/rotationchart/RotationChart'
// 导入轮播图组件

// 导入请求
import { getHomeMultidata } from '@/network/home';

export default {
  name: 'Home',
  components: {
    NavBar,
    RotationChart
  },
  data () {
    return {
      bannerData: [],
      recommendData: [],
    }
  },
  created () {
    // 1. 请求多个数据
    getHomeMultidata()
      .then(res => {
        this.bannerData = res.data.banner.list;
        this.recommendData = res.data.recommend.list;
        console.log(res.data);
      })
      .catch(err => { });
  }
}
</script>

<style scoped>
.home-nav-bar {
  background-color: var(--color-tint);
}

.home-nav-bar h2{
  color: #fff;
}
</style>
