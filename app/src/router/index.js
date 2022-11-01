import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/show',
      name: 'home.show',
      component:() => import('../views/ShowItemView.vue')
    },
    {
      path: '/inbound',
      name: 'inbound',
      component: () => import('../views/InboundView.vue')
    },
    {
      path: '/outbound',
      name: 'outbound',
      component: () => import('../views/OutboundView.vue')
    },
    {
      path:'/login',
      name:'login',
      component: () =>  import('../views/LoginView.vue')
    },
    {
      path:'/history',
      name:'history',
      component:()=>import('../views/history/HistoryAllView.vue')
    },
    {
      path:'/test',
      name:'test',
      component: () =>  import('../views/TestView.vue')
    },
  ]
});
export default router
