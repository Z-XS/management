import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/login')
    },
    {
      path: '/manage',
      component: () => import('@/views/manage'),
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
        }
      ]
    }
  ]
})
