import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/search',
    component: () => import('@/views/Search.vue'),
  },
  {
    path: '/cart',
    component: () => import('@/views/Cart.vue'),
  },
  {
    path: '/user',
    component: () => import('@/views/User.vue'),
  },
]

export default createRouter({
  history:createWebHistory(),
  routes
})