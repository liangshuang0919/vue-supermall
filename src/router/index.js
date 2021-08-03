import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import("@/views/home/Home");
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
  }
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
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

export default router;
