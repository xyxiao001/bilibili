import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './components/App'
import Dashboard from './view/Dashboard'
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '*', component: Dashboard }
  ]
})

new Vue({
  router,
  ...App
}).$mount('#app')
