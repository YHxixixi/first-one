import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/paihang',
    name: 'paihang',
    component: () => import(/* webpackChunkName: "home" */ '../views/PaiHang.vue')
  },
  {
    path: '/shujia',
    name: 'shujia',
    component: () => import(/* webpackChunkName: "home" */ '../views/BookJia.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
