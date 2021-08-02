import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // {
  //   path: '',
  //   redirect: ''
  // },
  // {}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

export default router;
