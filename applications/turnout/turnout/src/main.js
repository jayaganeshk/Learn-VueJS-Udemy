import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import DashBoard from './components/Dashboard.vue'
import SignIn from './components/signin.vue'

const router = new VueRouter({
  mode: 'History',
  routes: [
    { path: '/dashboard', component: DashBoard },
    { path: '/signin', component: SignIn },
    ],
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),

})
