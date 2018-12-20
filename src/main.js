import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import './plugins/iview.js'

Vue.config.productionTip = false

axios.interceptors.response.use((data) => {
  console.log('------------------response',data)
  if (data.status = "401"){
    store.state.isLogin=null;
    store.state.isRoot = null;
    router.push({ path: '/login' });
  }
  return data
}, (error) => {
    console.log('------------------response error',error)
  alert(error)
  return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
