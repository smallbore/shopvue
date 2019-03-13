import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueWechatTitle from 'vue-wechat-title'
import Loading from '@/components/loading'
Vue.use(Loading)
import Toast from '@/components/toast'
Vue.use(Toast)
Vue.use(VueWechatTitle)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
