import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Filters from '../views/Filters.vue'
import DynamicViews from '../views/DynamicViews.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/filters',
    name: 'Filters',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Filters
  },
  {
    path: '/:folder/:id',
    component: DynamicViews
  }
]

const router = new VueRouter({
  routes
})

export default router
