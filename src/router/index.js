import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
Vue.use(Router)


const router =  new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/login')
    },
    {
      path: '/manage',
      component: () => import('@/views/manage'),
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/',
          component: () => import('@/views/home')
        },
        {
          path: '/userList',
          component: () => import('@/views/userList')
        },
        {
          path: '/foodList',
          component: () => import('@/views/foodList')
        },
        {
          path: '/addGoods',
          component: () => import('@/views/addGoods')
        },
        {
          path: '/addShop',
          component: () => import('@/views/addShop')
        },
        {
          path: '/vmap',
          component: () => import('@/views/vmap')
        }
      ]
    }
  ]
})

router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.requireAuth)) {
    //应该找cookie的
    if(store.state.adminInfo == '') {
      next({path:'/'})
    }else{
      next()
    }
  }else {
    next()
  }
})

export default router