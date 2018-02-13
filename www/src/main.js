// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import './assets/style.scss'
import App from './App'

import Spinner from 'vue-simple-spinner'
import Icon from 'vue-awesome'
import ProgressLog from '@/components/ProgressLog'
import SwapSizeSelect from '@/components/SwapSizeSelect'
import Axios from 'axios'
import VModal from 'vue-js-modal'

Vue.component('spinner', Spinner)
Vue.component('icon', Icon)
Vue.component('progress-log', ProgressLog)
Vue.component('swap-size-select', SwapSizeSelect)

Vue.config.productionTip = false

Vue.use(VModal, {dialog: true})
Vue.use((Vue) => {
  Vue.prototype.$client = Axios.create({
    baseURL: process.env.API_URI,
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
})
