<template>
  <div id="detail_swiper">
    <swiper>
      <template v-slot:swiper>
        <div id="rotation">
          <!-- ant 组件轮播 -->
          <a-carousel autoplay dotsClass="dot">
            <div v-for="(item,index) in topImages" :key="item.acm">
              <img :src="item" alt="">
            </div>
          </a-carousel>
        </div>
      </template>
    </swiper>
  </div>
</template>

<script>
// 导入公共组件
// 导入轮播图组件
import Swiper from '@/components/common/swiper/Swiper.vue'

export default {
  name: 'DetailSwiper',
  components: {
    Swiper
  },
  props: {
    topImages: {
      type: Array,
      default () {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.ant-carousel >>> .slick-slide {
  position: relative;
  height: 330px;
  text-align: center;
  overflow: hidden;
}

.ant-carousel img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 160%;
}
</style>
