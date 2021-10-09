import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product/:id',
    props: true,
    name: 'Product',
    component: () => import('../views/Product.vue' )
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('../views/Chart.vue' )
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue' )
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue' )
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('../views/Success.vue' )
  },
  {
    path: '/dataorder',
    name: 'dataorder',
    component: () => import('../views/DataOrder.vue' )
  },
  {
    path: '/DataOrder/DataOrder',
    name: 'DataOrder',
    component: () => import('../views/DataOrder/DataOrder.vue' )
  },
  {
    path: '/DataOrder/AddOrder',
    name: 'AddOrder',
    component: () => import('../views/DataOrder/AddOrder.vue' )
  },
  {
    path: '/DataOrder/DetailOrder/:id',
    name: 'DetailOrder',
    component: () => import('../views/DataOrder/DetailOrder.vue' )
  },
  {
    path: '/DataOrder/EditOrder/:id',
    name: 'EditOrder',
    component: () => import('../views/DataOrder/EditOrder.vue' )
  },
  {
    path: '/DataTransaction/DataTransaction',
    name: 'DataTransaction',
    component: () => import('../views/DataTransaction/DataTransaction.vue' )
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
