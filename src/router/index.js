import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
import Login from '@/views/Login'
import Page1 from '@/views/Page1.vue'
import Page2 from '@/views/Page2.vue'
import TodoList from '@/views/TodoList'
import ElementUIDemo from '@/views/ElementUIDemo'
import PromiseDemo from '@/views/PromiseDemo'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: Layout
  },
  {
    path: '/parent',
    component: Layout,
    children: [
      {
        path: 'page1',
        component: Page1
      },
      {
        path: 'page2',
        component: Page2
      },
      {
        path: 'todo-list',
        component: TodoList
      },
      {
        path: 'element-ui-demo',
        component: ElementUIDemo
      },
      {
        path: 'promise-demo',
        component: PromiseDemo
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/page1',
    component: Page1
  },
  {
    path: '/page2',
    component: Page2
  }
]

export default new Router({
  routes: constantRouterMap
})
