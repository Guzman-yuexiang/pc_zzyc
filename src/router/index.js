import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../view/home/index.vue')
    },
    {
      path: '/news',
      component: () => import('../view/news/index.vue'),
    },
    {
      path: '/tobacco',
      component: () => import('../view/news/tobacco.vue')
    },
    {
      path: '/rural',
      component: () => import('../view/news/rural.vue')
    },
    {
      path: '/management',
      component: () => import('../view/news/management.vue')
    },
    {
      path: '/digital',
      component: () => import('../view/news/digital.vue')
    },
    {
      path: '/training',
      component: () => import('../view/news/training.vue')
    },
    {
      path: '/statistics',
      component: () => import('../view/news/statistics.vue')
    },
    {
      path: '/government',
      component: () => import('../view/news/government.vue')
    },
    {
      path: '/planning',
      component: () => import('../view/news/planning.vue')
    },

    {
      path: '/about',
      component: () => import('../view/about/index.vue')
    },
    {
      path: '/channel',
      component: () => import('../view/channel/index.vue')
    },
    
  ]
})

export default router
