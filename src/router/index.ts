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
    {
      path: '/textView',
      name: 'TextView',
      component: () => import('../components/TextView.vue'),
      meta: {
        name: '文字和遮罩层'
      }
    },
    {
      path: '/filterView',
      name: 'FilterView',
      component: () => import('../components/FilterView.vue'),
      meta: {
        name: '滤镜效果'
      }
    },
  ]
})

export default router
