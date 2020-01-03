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
    component: () => import(/* webpackChunkName: "home" */ '../views/PaiHang.vue'),
    meta:{
      requireAuth:true
    }
    
  },
  {
    path: '/shujia',
    name: 'shujia',
    component: () => import(/* webpackChunkName: "home" */ '../views/BookJia.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "home" */ '../views/login.vue')
 
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          path: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})
export default router
