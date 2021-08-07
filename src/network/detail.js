// 商品详情页的接口

import { newRequest } from "./request"

export function getDetail(iid) {
  return newRequest({
    url: "/detail",
    params: {
      iid
    }
  });
}
