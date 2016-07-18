import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'

import Dashboard from './view/Dashboard'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  linkActiveClass: 'active'
})

router.map({
  '/': {
    name: Dashboard,
    component: Dashboard
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
