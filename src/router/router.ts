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
      path: '/didattica/dispatcher/:category',
      name: 'dispatcher',
      component: () => import('../views/DispatcherView.vue')
    },
    {
      path: '/didattica/:article',
      name: 'didatticaArticle',
      component: () => import('../views/DidatticaArticleView.vue')
    },
  ]
})

export default router
