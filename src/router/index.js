import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    // meta: { requiresAuth: true }
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: () => import('../views/Item.vue'),
    props: true
  },
  {
    path: '/items/create',
    name: 'CreateItem',
    component: () => import('../views/CreateItem.vue')
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('../views/Articles.vue')
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../views/Article.vue'),
    props: true
  },
  {
    path: '/articles/create',
    name: 'CreateArticle',
    component: () => import('../views/CreateArticle.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'history',
  routes
})

export default router

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  const loggedIn = localStorage.getItem('user')

  if(routeTo.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
      next('/')
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})
