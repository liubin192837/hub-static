import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import './plugins/iview.js'

Vue.config.productionTip = false

axios.interceptors.response.use((data) => {// 响应成功关闭loading
  console.log('------------------response',data)
  if (data.status = "401"){
    store.state.isLogin=null;
    store.state.isRoot = null;
/*     console.log('------------------response', data.data.token + " ///" + (data.data.token!=null)); */
    router.push({ path: '/login' });
  }
  return data
}, (error) => {
  alert('加载失败')
  return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
