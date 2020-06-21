// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from "./router/index"
import store from './store'
import {post, put, get, patch} from './axios/index'

Vue.prototype.$post=post;
Vue.prototype.$put=put;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>'
})
