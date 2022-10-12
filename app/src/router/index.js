import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/homepage/HomePage.vue'
import CoinDeskView from '@/views/CoinDeskView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/coin-desk',
      name: 'coin-desk',
      component: CoinDeskView
    },
    {
      path: '/reward',
      name: 'rewards',
      component: () => import('../views/reward/AllRewardView.vue')
    },
    {
      path: '/reward/:id',
      name: 'reward.show',
      component: () => import('../views/reward/ShowView.vue')
    },
    {
      path: '/reward/create',
      name: 'reward.create',
      component: () => import('../views/reward/CreateView.vue')
    }
  ]
})

export default router
