import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'
import Login from '../login'
import App1 from '../App1.vue'
import App2 from '../App2.vue'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/parent',
    component: Layout,
    children: [
      {
        path: 'app1',
        component: App1
      },
      {
        path: 'app2',
        component: App2
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/app1',
    component: App1
  },
  {
    path: '/app2',
    component: App2
  }
]

export default new Router({
  routes: constantRouterMap
})
