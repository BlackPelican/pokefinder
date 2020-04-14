import Vue from 'vue'
import App from './App.vue'
import AsyncComputed from 'vue-async-computed'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(AsyncComputed)
Vue.use(VueLazyload, {
  lazyComponent: true
})

new Vue({
  render: h => h(App),
}).$mount('#app')
