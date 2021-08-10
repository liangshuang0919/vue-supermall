<template>
  <div id="detail_nav_bar">
    <nav-bar>
      <template v-slot:left>
        <img src="@/assets/img/common/back.svg" @click="backClick">
      </template>
      <template v-slot:center>
        <div class="title">
          <p v-for="(item, index) in titles" :class="{ active: index === currentIndex }" @click="titlesClick(index)">
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
  props: {
    currentIndex: { // 父组件传过来的当前具体位置应该让哪一个标题的样式为活跃状态
      type: Number,
      default: 0
    }
  },
  components: {
    NavBar
  },
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      nowIndex: this.currentIndex
    }
  },
  methods: {
    titlesClick (index) {
      // this.nowIndex = index;
      // console.log(this.currentIndex);
      this.$emit('titleClick', index);
    },
    backClick () {
      this.$store.state.isShowBackTop = false;
      this.$router.back();
    }
  },
}
</script>

<style lang="less" scoped>
.title {
  display: flex;
  justify-content: space-around;
}

.active {
  color: var(--color-tint);
}
</style>
