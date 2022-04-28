import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/index/Index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/Index.vue')
  },
  {
    path: '/study',
    name: 'Study',
    component: () => import('@/views/study/Index.vue')
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('@/views/work/Index.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
