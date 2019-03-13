import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.(当路线被访问时，它被延迟加载)
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About,
      meta: {
        title: '关于我们'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录页'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: '注册页'
      }
    }
  ]
})
