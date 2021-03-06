// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from './router';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS);

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
/*
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history'
})
*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: VueRouter
}).$mount('#app');
