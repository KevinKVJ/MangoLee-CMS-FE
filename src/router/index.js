import { createRouter, createWebHashHistory } from 'vue-router'
import Account from '../views/Account.vue'

import Login from '@/components/signin_signup/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Account',
    component: Account,
    children: [
      {
        path: '',
        component: Login,
      },
      {
        path: 'cna',
        component: () => import('@/components/signin_signup/CreateNewAccount.vue')
      }
    ]
  }
  // ,{
  //   path: '/about',
  //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  // ,{
  //   path: '/cna',
  //   name: 'Account',
  //   // component: () => import('../views/CreateNewAccount.vue')
  //   component: CNA
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
