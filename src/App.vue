<template>
  <div id='app'>
    <main-tab-bar />
  </div>

  <router-view v-slot="{ Component }">
    <keep-alive include="Home,Category,ShopCart" exclude="Profile">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
import MainTabBar from '@/components/content/maintabbar/MainTabBar';

export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style scoped>
  @import url("assets/css/base.css");
</style>
