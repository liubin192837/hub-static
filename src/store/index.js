import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'
import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    global
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})


// modules中可以定义多个模块