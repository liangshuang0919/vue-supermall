<template>
  <div id='main_tab_bar' class="main-tab-bar">
    <tab-bar>
      <tab-bar-item :key="item" v-for="(item,index) in tabBarItems" :path="item.path" :textActive="textActive">
        <template v-slot:tab-icon>
          <img :src="item.iconSrc" :alt="item.iconAlt">
        </template>
        <template v-slot:tab-icon-active>
          <img :src="item.iconSrcActive" :alt="item.iconAlt">
        </template>
        <template v-slot:tab-text>
          <p>{{ item.text }}</p>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar.vue';
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue';

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      tabBarItems: [
        {
          path: '/home',
          iconSrc: require("@/assets/img/tabbar/home.svg"),
          iconSrcActive: require("@/assets/img/tabbar/home_active.svg"),
          iconAlt: "首页",
          text: "首页"
        },
        {
          path: '/category',
          iconSrc: require("@/assets/img/tabbar/category.svg"),
          iconSrcActive: require("@/assets/img/tabbar/category_active.svg"),
          iconAlt: "分类",
          text: "分类"
        },
        {
          path: '/shopcart',
          iconSrc: require("@/assets/img/tabbar/shopcart.svg"),
          iconSrcActive: require("@/assets/img/tabbar/shopcart_active.svg"),
          iconAlt: "购物车",
          text: "购物车"
        },
        {
          path: '/profile',
          iconSrc: require("@/assets/img/tabbar/profile.svg"),
          iconSrcActive: require("@/assets/img/tabbar/profile_active.svg"),
          iconAlt: "我的",
          text: "我的"
        }
      ],
      textActive: "deeppink"
    }
  },
}
</script>

<style scoped>
.main-tab-bar {
  height: 100%;
  text-align: center;
}

.main-tab-bar img{
  width: 24px;
  margin-top: 6px;
}

.main-tab-bar p {
  font-size: 12px;
}
</style>
