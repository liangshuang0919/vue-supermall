<template>
  <div id="detail" class="detail">
    <!-- 详情页顶部导航组件 -->
    <detail-nav-bar class="detail-nav" />

    <!-- 详情页的滚动组件 -->
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="scrollPosition">
      <!-- 详情页的轮播组件 -->
      <detail-swiper :top-images="topImages" />

      <!-- 详情页的商品基本信息组件 -->
      <detail-base-info :goods="goods" />

      <!-- 详情页的商家基本信息组件 -->
      <detail-shop-info :shop="shop" />

      <!-- 详情页的商品箱详细信息组件 -->
      <detail-goods-info :detail-info="detailInfo" ref="goodsInfo" />

      <!-- 详情页的商品参数信息组件 -->
      <detail-param-info :param-info="paramInfo" />

      <!-- 详情页用户评论组件 -->
      <detail-comment :user-comment="userComment" />

      <!-- 详情页商品推荐，组件复用 -->
      <goods-list :goodsData="goodsRecommend" />
    </scroll>

    <!-- 回到顶部组件 -->
    <back-top @click="backTopClick" v-show="$store.state.isDetailBackTop" />

    <!-- 底部购物栏 -->
    <shop-bar class="shop-bar" />
  </div>
</template>

<script>
// 导入公共组件
// 导入滚动组件
import Scroll from '@/components/common/scroll/Scroll';
// 导入回到顶部组件
import BackTop from '@/components/common/backtop/BackTop';
// 导入商品推荐的组件
import GoodsList from '@/components/content/goodsList/GoodsList';
// 导入底部购物栏
import ShopBar from '@/components/content/shopBar/ShopBar'

// 导入子组件
// 导入顶部 detail-nav-ber
import DetailNavBar from './childComponents/DetailNavBar';
// 导入轮播图组件
import DetailSwiper from './childComponents/DetailSwiper';
// 导入商品基本信息组件
import DetailBaseInfo from './childComponents/DetailBaseInfo';
// 导入商家基本信息组件
import DetailShopInfo from './childComponents/DetailShopInfo';
// 导入商品详细信息组件
import DetailGoodsInfo from './childComponents/DetailGoodsInfo';
// 导入商品参数信息组件
import DetailParamInfo from './childComponents/DetailParamInfo';
// 导入评论组件
import DetailComment from './childComponents/DetailComment'

// 导入 vuex 的方法
import { types } from '@/store/mutations-types'

// 导入接口
// 导入商品详情接口
import { getDetail, getRecommend } from '@/network/detail';
// 导入接口中的类，这个类是将商品的各种杂乱的信息进行了整合成一个类
import { Goods, Shop, GoodsParam } from '@/network/detail';

export default {
  name: 'Detail',
  components: {
    Scroll, // 滚动组件
    BackTop, // 回到顶部组件
    GoodsList, // 商品推荐组件
    ShopBar, // 底部购物栏组件
    DetailNavBar, // 详情页顶部导航
    DetailSwiper, // 详情页轮播图
    DetailBaseInfo, // 详情页商品基本信息
    DetailShopInfo, // 详情页商家基本信息
    DetailGoodsInfo, // 详情页商品详细信息
    DetailParamInfo, // 详情页商品参数信息
    DetailComment // 详情页用户评论
  },
  data () {
    return {
      iid: null, // 发送请求的商品 id 号
      topImages: [], // 轮播图的数据
      goods: {}, // 商品基本信息
      shop: {}, // 商家基本信息
      detailInfo: {}, // 商品详细介绍
      paramInfo: {}, // 商品参数信息
      userComment: {}, // 用户评论
      goodsRecommend: [] // 商品推荐
    }
  },
  methods: {
    // 1. 监听回到顶部的事件
    backTopClick () {
      // 下面调用了 scroll 组件中封装的 scrollTo 方法
      this.$refs.scroll.scrollTo(0, 0);
    },

    // 2. 监听滚动页面的事件（用这个事件来控制回到顶部按钮的显示和隐藏）
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
      this.$store.commit(types.DETAILBACKTOP, position);
    },

    // 3. 页面加载出来的时候，需要隐藏和显示回到顶部按钮，所需要显示隐藏时候顶部的距离，进行自动获取
    setOffsetTop () {
      this.$store.commit(types.DETAILPOSITION, this.$refs.goodsInfo.$el.offsetTop);
    }
  },
  created () {
    // 1. 保存传来的 iid
    this.iid = this.$route.params.iid;

    // 2. 根据 iid 请求详细的数据
    getDetail(this.iid)
      .then(res => {
        const data = res.result;

        // 2.1 获取顶部轮播图的数据
        this.topImages = data.itemInfo.topImages;

        // 2.2 获取商品基本信息（通过类中获取）
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

        // 2.3 获取商家基本信息（通过类中获取）
        this.shop = new Shop(data.shopInfo);

        // 2.4 获取商品详细信息
        this.detailInfo = data.detailInfo;

        // 2.5 获取商品参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

        // 2.6 获取用户评论
        this.userComment = data.rate.list;
      })
      .catch(err => {
        console.log(err);
      });

    // 3. 商品推荐接口
    getRecommend()
      .then(res => {
        this.goodsRecommend = res.data.list;
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted () {
    // 1. 图片加载完成的事件监听，获取 tabControl 的 offsetTop
    setTimeout(() => {
      this.setOffsetTop();
    }, 500);
  },
}
</script>

<style scoped>
.detail {
  position: relative;
  height: 100vh;
  background-color: #fff;
  z-index: 9;
}

.detail-nav {
  position: relative;
  background-color: #fff;
  z-index: 9;
}

.content {
  height: calc(100% - 99px);
}

.shop-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
