export const types = {
  CHANGEINDEX: 'changeIndex', // 页面改变时 tabControl 当前活跃的 index
  HOMEOFFSETTOP: 'homeOffsetTop', // 记录页面从多少的 offsetTop 开始让 tabControl 实现吸顶效果（主页的）
  SCROLLPOSITION: 'scrollPosition', // 记录页面滚动到的位置（主页的）
  DETAILBACKTOP: 'detailBackTop', // 控制详情页的回到顶部的显示隐藏（详情页）
  DETAILPOSITION: 'detailPosition', // 记录详情页到哪个位置让回到顶部按钮进行显示隐藏（详情页的）
  ADDCOUNT: 'addCounter', // 当商品添加进购物车后，每次添加进来进行数量 +1 操作
  ADDCART: 'addCart', // 当点击添加商品的时候，如果一开始没有该商品的话，就将该商品添加进 state 里面的 cartList
}
