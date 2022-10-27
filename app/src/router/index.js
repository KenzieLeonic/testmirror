import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/inbound',
      name: 'inbound',
      component: () => import('@/views/InboundView.vue')
    },
    {
      path: '/outbound',
      name: 'outbound',
      component: () => import('../views/OutboundView.vue')
    },
      {
          path: '/login',
          name: 'login',
          component: () => Login
      }
      ]
});

// router.beforeEach(async (to) =>{
//   const publicPages = ['/login'];
//   const authRequired = !publicPages.includes(to.path);
//   const auth = useAuthStore();

//   if (authRequired && !auth.user){
//     auth.returnUrl = to.fullPath;
//     return '/login';
//   }
// });
export default router
