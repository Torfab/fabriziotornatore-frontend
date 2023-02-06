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
      path: '/didattica/:article',
      name: 'didatticaArticle',
      component: () => import('../views/DidatticaArticleView.vue')
    },
  ]
})

export default router
