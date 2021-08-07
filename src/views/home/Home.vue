<template>
  <div id='home' class="home">
    <!-- 导航组件 -->
    <nav-bar class="home-nav-bar">
      <template v-slot:center>
        <h2>购物街</h2>
      </template>
    </nav-bar>

    <!-- 下面这个为了实现吸顶效果，就像障眼法 -->
    <home-tab-control @tabControlType="homeGoodsType" ref="tabControl1" v-show="$store.state.isShowBackTop" class="tabFixed" />

    <!-- 滚动组件 -->
    <!-- 这里注意 :propbe-type 和 :pull-up-load 给 scroll 传值过去，因为 scroll 中是驼峰命名法，这里就要用 - 分割 -->
    <!-- 还要注意 :probe-type 和 :pull-up-load 前面要加 : ,否则传过去的是一个字符串，要进行实时监听 -->
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="scrollPosition" @pullingUp="loadMore">
      <!-- 轮播图组件 -->
      <swiper :bannerData="bannerData" />

      <!-- 推荐信息组件 -->
      <home-recommend :recommendData="recommendData" />

      <!-- 本周流行组件 -->
      <home-feature />

      <!-- 首页页面内跳转组件 -->
      <!-- 下面是第一中接受孙子组件传值的方法，孙组件先传给儿子，儿子再传给我 -->
      <!-- <home-tab-control class="tab-control" @goodsType="homeGoodsType" /> -->
      <!-- 下面是第二种接收孙子组件传值的方法，直接传给爷爷组件 -->
      <home-tab-control @tabControlType="homeGoodsType" ref="tabControl2" />

      <!-- 三个页面的路由 -->
      <router-view v-slot="{ Component }" class="routerView" :goodsData="goodsData">
        <keep-alive include="Popular,NewProducts,Selected">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </scroll>

    <!-- 回到顶部组件 -->
    <back-top @click="backTopClick" v-show="$store.state.isShowBackTop" />
  </div>

</template>

<script>
// 导入公共组件
// 导入首页导航的组件
import NavBar from '@/components/common/navbar/NavBar';
// 导入轮播图组件
import Swiper from '@/components/common/swiper/Swiper';
// 导入滚动组件
import Scroll from '@/components/common/scroll/Scroll';
// 导入回到首页组件
import BackTop from '@/components/common/backtop/BackTop';

// 导入子组件
// 导入推荐信息组件
import HomeRecommend from './childComponents/HomeRecommend';
// 导入本周流行组件
import HomeFeature from './childComponents/HomeFeature';
// 导入首页页面内跳转组件
import HomeTabControl from './childComponents/HomeTabControl';

// 导入 vuex 的方法
import { types } from '@/store/mutations-types'

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
    Scroll,
    BackTop
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
      // isShowBackTop: false, // 回到顶部按钮的显示或隐藏绑定的 v-show 的变量
      goodsDataTypes: ['pop', 'new', 'sell'], // 获取当前哪个被选中了，需要获取当前选中的参数，在进行下拉加载更多的时候，相应的获取数据
      goodsType: 'pop',
      scrollTop: 0
    }
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
          this.goodsData[type].page += 1;
          // this.$refs.scroll.finishPullUp()
          // this.$refs.scroll.refresh()
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 3. 获取当前被选中的哪个商品类型
    homeGoodsType (index) {
      // 获取当前页面的商品类型，只有 流行、新品、精选 三类
      // 为了在下拉加载更多的时候，对应的获取相应的模块的数据
      this.goodsType = this.goodsDataTypes[index];


      // 改变 tabControl 三个按钮的状态，这里用到 vuex
      this.$store.commit(types.CHANGEINDEX, index);

      // 下面这个是为了切换三个模块的时候，让页面滚动到 tabControl 附近
      this.$refs.scroll.scrollTo(0, -this.$refs.tabControl2.$el.offsetTop);
    },

    // 4. 监听回到顶部的事件
    backTopClick () {
      // 下面调用了 scroll 组件中封装的 scrollTo 方法
      this.$refs.scroll.scrollTo(0, 0);
    },

    // 5. 监听滚动页面的事件（用这个事件来控制回到顶部按钮的显示和隐藏）
    // scrollPosition (position) {
    //   if (position.y < -630) {
    //     this.isShowBackTop = true; // 滚动的 y 轴小于 -630 就让回到顶部按钮显示
    //   } else {
    //     this.isShowBackTop = false; // 否则让回到顶部按钮隐藏
    //   }
    // }
    // 下面用的是 vuex 状态管理的 mutations
    // 因为在商品详情页我也会用到处理回到顶部按钮的显示和隐藏
    scrollPosition (position) {
      // 这里我用到了 vuex 状态管理
      this.$store.commit(types.SCROLLPOSITION, position);

      this.isFixed = this.$store.state.isFixed;
    },

    // 6. 监听上拉加载更多事件
    loadMore () {
      // 因为主页有三个模块，需要对应的模块进行上拉加载更多，加载属于自己的商品信息
      // 调用我们获取商品信息的接口，传给它当前页面的是哪个模块
      // 接口需要的参数只有三个： pop  new  sell
      this.homeGoods(this.goodsType);
    },
  },
  created () {
    // 1. 请求轮播和本周流行的方法
    this.homeMultidata();

    // 2. 请求商品方法
    this.homeGoods('pop');
    this.homeGoods('new');
    this.homeGoods('sell');
  },
  mounted () {
    // 1. 图片加载完成的事件监听，获取 tabControl 的 offsetTop
    setTimeout(() => {
      this.$store.state.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }, 500);
  },

  // 下面这两个方法，是用来控制当离开首页路由的时候，切换到别的路由，返回的界面为上一次浏览的界面
  activated () {
    this.$router.push(this.path);
    // this.$refs.scroll.scrollTo(0, this.scrollTop, 0);
  },
  //在页面离开时记录滚动位置
  beforeRouteLeave (to, from, next) {
    this.scrollTop = this.$refs.scroll.scroll.y;
    this.path = from.path;
    next();
  }
}
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}

.home-nav-bar {
  position: sticky;
  top: 0;
  background-color: var(--color-tint);
  z-index: 1;
}

.home-nav-bar h2{
  color: #fff;
}

.tabFixed {
  position: fixed;
  top: 36px;
  width: 100%;
  z-index: 10;
}

.content{
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>
