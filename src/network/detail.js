// 商品详情页的接口

import { newRequest } from "./request"

// 商品的详情接口
export function getDetail(iid) {
  return newRequest({
    url: "/detail",
    params: {
      iid
    }
  });
}

// 推荐商品的接口
export function getRecommend() {
  return newRequest({
    url: "/recommend",
  });
}

// ES6 中定义 class，为了将一些杂乱的数据进行整合
// 商品描述的信息
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

// 商家描述的信息
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

// 商品参数信息
export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
