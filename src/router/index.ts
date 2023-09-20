import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/graphics'
    },
    {
      path: '/graphics',
      name: 'Graphics',
      component: () => import('../components/GraphicsView.vue'),
      meta: {
        name: '绘制各种图形和线段'
      }
    },
    {
      path: '/assetsView',
      name: 'AssetsView',
      component: () => import('../components/AssetsView.vue'),
      meta: {
        name: '加载多个资源'
      }
    },
  ]
})

export default router
