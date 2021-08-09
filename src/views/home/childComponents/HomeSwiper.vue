<template>
  <div id="home_swiper" class="home-swiper">
    <swiper>
      <template v-slot:swiper>
        <div id="rotation">
          <!-- ant 组件轮播 -->
          <a-carousel autoplay dotsClass="dot">
            <div v-for="(item,index) in swiperData" :key="item.acm">
              <img :src="item.image" alt="">
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
import Swiper from '@/components/common/swiper/Swiper'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper
  },
  props: {
    swiperData: {
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
  text-align: center;
  overflow: hidden;
}

.ant-carousel img {
  width: 100%;
  height: 100%;
}
</style>
