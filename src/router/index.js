import { createRouter, createWebHistory } from 'vue-router';

// 首页路由
const Home = () => import("@/views/home/Home");
// 首页内的路由
const Popular = () => import('@/views/home/views/Popular'); // 流行
const NewProducts = () => import('@/views/home/views/NewProducts'); // 新款
const Selected = () => import('@/views/home/views/Selected'); // 精选

const Category = () => import("../views/category/Category");
const ShopCart = () => import("../views/cart/ShopCart");
const Profile = () => import("../views/profile/Profile");

const routes = [
{
  path: "",
  redirect: "/home" // 路由重定向
},
{
  path: "/home",
  name: "Home",
  component: Home,
  meta: {
    title: "首页",
  },
  children: [
  {
    path: "",
    redirect: "/home/popular"
  },
  {
    path: "/home/popular",
    name: "Popular",
    component: Popular,
    meta: {
      title: "首页-流行",
    }
  },
  {
    path: "/home/newproducts",
    name: "NewProducts",
    component: NewProducts,
    meta: {
      title: "首页-新款",
    }
  },
  {
    path: "/home/selected",
    name: "Selected",
    component: Selected,
    meta: {
      title: "首页-精选",
    }
  }, ]
},
{
  path: "/category",
  name: "Category",
  component: Category,
  meta: {
    title: "分类"
  }
},
{
  path: "/shopcart",
  name: "ShopCart",
  component: ShopCart,
  meta: {
    title: "购物车"
  }
},
{
  path: "/profile",
  name: "Profile",
  component: Profile,
  meta: {
    title: "个人中心"
  }
}];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = '购物街-' + to.meta.title;
  next();
})

export default router;
