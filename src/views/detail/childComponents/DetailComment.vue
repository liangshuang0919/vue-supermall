<template>
  <div id="detail_comment" class="detail-comment">
    <div class="comment-top">
      <h3>用户评论</h3>
      <a href="javascript:;">更多</a>
    </div>
    <div class="user" :key="item" v-for="(item, index) in userComment" v-if="getComment">
      <div class="user-info">
        <img :src="item.user.avatar" alt="">
        <p>{{ item.user.uname }}</p>
      </div>
      <div class="user-comment">
        {{ item.content }}
      </div>
      <div class="orther-data">
        <div class="time">{{ showDate(item.created) }}</div>
        <div class="shop-info">{{ item.style }}</div>
      </div>
      <div class="flex">
        <div class="comment-info-images" v-for="item in item.images">
          <img :src="item" alt="">
        </div>
      </div>
    </div>
    <div v-else>
      <h3>暂无用户评论...</h3>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/common/untils.js'

export default {
  name: 'DetailComment',
  props: {
    userComment: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  computed: {
    getComment () {
      return this.userComment.length > 0 ? true : false;
    },
    showDate () {
      return function (value) {
        //将时间戳转换成date对象
        const date = new Date(value * 1000);
        //将date进行格式化
        return formatDate(date, 'yyyy-MM-dd');
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail-comment {
  width: 90%;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #ddd;
}

.comment-top {
  display:  flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 44px;
  line-height: 44px;
  border-bottom: 3px solid #ddd;
}

.user  {
  .user-info{
  height: 50px;
  line-height: 50px;

    img {
      display: inline-block;
      width: 40px;
      height: 40px;
      margin-left: 5px;
      border-radius: 50%;
      background-color: burlywood;
      vertical-align: center;
    }

    p {
      display: inline-block;
      margin-left: 20px;
      font-size: 17px;
    }
  }

  .user-comment {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    /* 上面是文本溢出隐藏 */
    padding-left: 6px;
  }

  .orther-data {
    height: 25px;
    padding-left: 5px;
    line-height: 25px;
    color: #aaa;

    div {
      display: inline-block;
      margin-right: 8px;
    }
  }
}

.flex {
  display: flex;

  .comment-info-images {

  img {
  	width: 60px;
  	height: 60px;
  	margin-right: 6px;
  }
}
}


</style>
