import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const layout = () => import('@/layout/Layout.vue')
const routes:RouteRecordRaw[] = [
  {
    path: "/",
    component: layout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/Home.vue')
      },
    ],
  },
  {
    path: "/",
    component: layout,
    children: [
      {
        path: 'search',
        component: () => import('@/views/Search.vue')
      },
    ],
  },
  {
    path: "/",
    component: layout,
    children: [
      {
        path: 'cart',
        component: () => import('@/views/Cart.vue')
      },
    ],
  },
  {
    path: "/",
    component: layout,
    children: [
      {
        path: 'user',
        component: () => import('@/views/User.vue')
      },
    ],
  },

  /* {
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
  }, */
]

export default createRouter({
  history:createWebHistory(),
  routes
})