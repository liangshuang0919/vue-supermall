<template>
  <div id="rotation">
    <!-- ant 组件轮播 -->
    <a-carousel autoplay>
      <div ::key="item" v-for="(item,index) in bannerData">
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
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  overflow: hidden;
}

.ant-carousel img {
  width: 100%;
  height: 100%;
}
</style>
