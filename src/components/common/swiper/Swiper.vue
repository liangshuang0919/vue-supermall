<template>
  <div id="rotation">
    <!-- ant 组件轮播 -->
    <a-carousel autoplay dotsClass="dot">
      <div v-for="(item,index) in bannerData" :key="item.acm">
        <img :src="item.image" alt="">
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  name: 'Rotation',
  props: {
    bannerData: {
      type: Array,
      default: []
    },
  },
}
</script>

<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  overflow: hidden;
}

.ant-carousel img {
  width: 100%;
  height: 100%;
}
</style>
