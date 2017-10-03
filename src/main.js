// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// tell vue to use the router
Vue.use(VueRouter)

import Home from './components/home'
import Logo from './components/logo'
import Typography from './components/typography'
import Language from './components/language'
import Icons from './components/icons'
import Utility from './components/utility'
import Links from './components/links'
import Buttons from './components/buttons'
import Grid from './components/grid'
import Colours from './components/colours'
import Borders from './components/borders'
import Panels from './components/panels'
import Navigation from './components/navigation'
import Forms from './components/forms'

const routes = [
  { path: '/', component: Home },
  { path: '/logo', component: Logo },
  { path: '/typography', component: Typography },
  { path: '/language', component: Language },
  { path: '/icons', component: Icons },
  { path: '/utility', component: Utility },
  { path: '/links', component: Links },
  { path: '/buttons', component: Buttons },
  { path: '/grid', component: Grid },
  { path: '/colours', component: Colours },
  { path: '/borders', component: Borders },
  { path: '/panels', component: Panels },
  { path: '/navigation', component: Navigation },
  { path: '/forms', component: Forms }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
