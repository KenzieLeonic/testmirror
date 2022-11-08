import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {useAuth} from '@/stores/auth.js'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:id',
      name: 'products.show',
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
router.beforeEach(async (to, from) => {
  const store = useAuth()
  if (
      // make sure the user is authenticated
      !store.isAuthen && // CHANGE
      // ❗️ Avoid an infinite redirect
      to.name !== 'login'
  ) {
    // redirect the user to the login page
    return { name: 'login' }
  }
})

export default router
