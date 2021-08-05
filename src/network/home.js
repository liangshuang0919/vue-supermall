// 封装所有对首页的请求
import { oldRequest } from './request'; // 导入封装好的旧的网络请求
import { newRequest } from './request'; // 导入封装好的新的网络请求

// 导出首页要发送的请求
export function getHomeMultidata() {
  return oldRequest({
    url: '/home/multidata',
  });
};

// 导出首页商品的数据
export function getHomeGoods(type, page) {
  return newRequest({
    url: '/home/data',
    params: {
      type,
      page
    }
  });
};
