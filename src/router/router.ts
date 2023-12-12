import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/CardsView.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('../views/CardsView.vue')
    },
    {
      path: '/didattica',
      name: 'didattica',
      component: () => import('../views/DidatticaView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/didattica/dispatcher/:category',
      name: 'didatticaDispatcher',
      component: () => import('../views/DidatticaDispatcherView.vue')
    },
    {
      path: '/blog/dispatcher/:category',
      name: 'blogDispatcher',
      component: () => import('../views/BlogDispatcherView.vue')
    },
    {
      path: '/didattica/:article',
      name: 'didatticaArticle',
      component: () => import('../views/DidatticaArticleView.vue')
    },

    {
      path: '/blog/:article',
      name: 'blogArticle',
      component: () => import('../views/BlogArticleView.vue')
    },
  ]
})

export default router
