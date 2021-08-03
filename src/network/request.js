import axios from 'axios';

// 导出封装好的网络请求
// 这是旧的接口
export function oldRequest(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/", // 旧的接口地址
    timeout: 5000 // 请求超时
  });

  // 拦截器
  // 请求拦截
  instance.interceptors.request.use(res => {
    return res;
  }, err => {
    console.log(err);
  });

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log(err);
  });

  return instance(config);
}

// -------------------------------------------------------------------------------------------------------

// 这是新的接口
export function newRequest(config) {
  // 创建啊 axios 实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5", // 新的接口地址
    timeout: 5000 // 请求超时
  });

  // 拦截器
  // 请求拦截
  instance.interceptors.request.use(res => {
    return res;
  }, err => {
    console.log(err);
  });

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log(err);
  });

  // 返回请求到的数据
  return instance(config);
}
