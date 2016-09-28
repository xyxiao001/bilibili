import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import Store from './vuex/store'

import Dashboard from './view/Dashboard'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '*', component: Dashboard }
  ]
})

new Vue({
  Store,
  router,
  ...App
}).$mount('#app')
