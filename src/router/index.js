import Vue from 'vue'
import VueRouter from 'vue-router'
import MyTrades from '@/components/MyTrades'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MyTrades
    }
  ]
})

export default router
