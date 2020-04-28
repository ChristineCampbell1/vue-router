import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Reverse from '@/views/Reverse.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About 
  },
  {
    path: '/reverse',
    name: 'Reverse',
    component: Reverse 
  }
]

const router = new VueRouter({
  routes
})

export default router
