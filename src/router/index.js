/**
 * Created by zhangran on 17/3/8.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Badge',
    component: resolve => require(['../../examples/Badge'], resolve)
  },
  {
    path: '/Button',
    component: resolve => require(['../../examples/Button'], resolve)
  },
  {
    path: '/Icon',
    component: resolve => require(['../../examples/Icon'], resolve)
  },
  { path: '*', redirect: `/Button` }
]

export default new VueRouter({
  mode: 'history',
  routes
})
