import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/BarView.vue'
import AboutView from '../views/RadarView.vue'
import PolarView from '../views/PolarView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },    
    {
      path: '/polar',
      name: 'polar',
      component: PolarView
    },
  ]
})

export default router
