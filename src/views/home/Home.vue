<template>
  <div id='home'>
    <!-- 导航组件 -->
    <nav-bar class="home-nav-bar">
      <template v-slot:center>
        <h2>购物街</h2>
      </template>
    </nav-bar>

    <!-- 轮播图组件 -->
    <swiper :bannerData="bannerData" />

    <!-- 推荐信息组件 -->
    <home-recommend :recommendData="recommendData" />

    <!-- 本周流行组件 -->
    <home-feature />

    <!-- 首页页面内跳转组件 -->
    <home-tab-control class="tab-control" />
  </div>

  <router-view v-slot="{ Component }" class="routerView" :goodsData="goodsData">
    <keep-alive include="Popular,NewProducts,Selected">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
// 导入公共组件
// 导入首页导航的组件
import NavBar from '@/components/common/navbar/NavBar';
// 导入轮播图组件
import Swiper from '@/components/common/swiper/Swiper';

// 导入子组件
// 导入推荐信息组件
import HomeRecommend from './childComponents/HomeRecommend';
// 导入本周流行组件
import HomeFeature from './childComponents/HomeFeature'
// 导入首页页面内跳转组件
import HomeTabControl from './childComponents/HomeTabControl.vue'

// 导入请求
import { getHomeMultidata, getHomeGoods } from '@/network/home';

export default {
  name: 'Home',
  components: {
    NavBar,
    Swiper,
    HomeRecommend,
    HomeFeature,
    HomeTabControl,
  },
  data () {
    return {
      path: "",
      bannerData: [], // 轮播图的数据
      recommendData: [], // 本周流行的数据
      goodsData: { // 商品数据
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      tabOffsetTop: 0,
    }
  },
  created () {
    // 1. 请求轮播和本周流行的方法
    this.homeMultidata();

    // 2. 请求商品方法
    this.homeGoods('pop');
    this.homeGoods('new');
    this.homeGoods('sell');
  },
  methods: {
    // 1. 请求轮播和本周流行的数据
    homeMultidata () {
      getHomeMultidata()
        .then(res => {
          this.bannerData = res.data.banner.list;
          this.recommendData = res.data.recommend.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 2. 请求商品数据
    homeGoods (type) {
      const page = this.goodsData[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          this.goodsData[type].list.push(...res.data.list);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  activated () {
    this.$router.push(this.path)
  },
  beforeRouteLeave (to, from, next) {
    this.path = from.path;
    next();
  }
}
</script>

<style scoped>
.home-nav-bar {
  position: sticky;
  top: 0;
  background-color: var(--color-tint);
  z-index: 1;
}

.home-nav-bar h2{
  color: #fff;
}

.tab-control {
  position: sticky;
  top: 40px;
}
/*
.routerView {
  bottom:  200px;
} */
</style>
