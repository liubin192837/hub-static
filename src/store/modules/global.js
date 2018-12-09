 /* eslint-disable */
import global from '../../api/global'
import { MUTATION } from '../../constants'
// initial state
const state = {
  count: 0,
  data6: [],
  current:1
}

// getters
const getters = {
  
}

// actions
const actions = {
  async callApi({commit}){
    commit(MUTATION.GET_USER_SUCCESS, await global.getUserInfo())
  },
  async getMyAllFiles({ commit }){
    commit(MUTATION.GET_MY_ALL_FILES_SUCCES, await global.getMyAllFiles())
  },
  async changePage({ commit },){

  }
}

// mutations
const mutations = {
  [MUTATION.GET_USER_SUCCESS] (state, payload) {
    state.user = payload
  },
  [MUTATION.INCREMENT](state) {
    state.count = state.count + 1 
  },
  [MUTATION.GET_MY_ALL_FILES_SUCCES](state, payload){
    state.data6 = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

// 1. getter example 
// cartProducts: (state, getters, rootState) => {
//   return state.items.map(({ id, quantity }) => {
//      ...
//   })
// }
// 2. action example
// getName({commit, state}, payload) {
//   异步操作
//   commit('...')
// }
// 3. mutations example
// test(state, paylod) {
//   state.id = payload
// }
