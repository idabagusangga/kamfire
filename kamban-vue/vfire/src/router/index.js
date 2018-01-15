import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Kamban from '@/components/ComponentKamban'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Hello
    },
    {
      path: '/kamban',
      name: 'Kamban',
      component: Kamban
    }
  ]
})
