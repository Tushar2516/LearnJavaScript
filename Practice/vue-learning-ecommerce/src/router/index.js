import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShoppingCartPage from '../views/ShoppingCartPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'ShoppingCartPage',
    component: ShoppingCartPage
  },
  {
    path: '/products/:productId',
    name: 'ProductDetailPage',
    component: () => import('../views/ProductDetailPage.vue')
  },
  {
    path: '/products',
    name: 'ProductsPage',
    component: () => import('../views/ProductsPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
