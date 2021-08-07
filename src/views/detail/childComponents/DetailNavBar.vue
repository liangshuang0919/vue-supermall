<template>
  <div id="detail_nav_bar">
    <nav-bar>
      <template v-slot:left>
        <img src="@/assets/img/common/back.svg" @click="backClick">
      </template>
      <template v-slot:center>
        <div class="title">
          <p v-for="(item, index) in titles" :class="{ active: index === currentIndex }" @click="titleClick(index)">
            {{ item }}
          </p>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
// 导入公共组件
// 导入顶部 navber
import NavBar from '@/components/common/navbar/NavBar';

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick (index) {
      this.currentIndex = index;
    },
    backClick () {
      this.$router.back();
    }
  },
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-around;
}

.active {
  color: var(--color-tint);
}
</style>
