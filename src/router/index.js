import Vue from 'vue'
import VueRouter from 'vue-router'
import StoneGrade from '@/views/StoneGrade'
import StonePrediction from '@/views/StonePrediction'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/grade'
  },
  {
    path: '/grade',
    name: 'StoneGrade',
    component: StoneGrade
  },
  {
    path: '/prediction',
    name: 'StonePrediction',
    component: StonePrediction
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
