 /* eslint-disable */
import global from '../../api/global'
import { MUTATION } from '../../constants'
// initial state
const state = {
  count: 0
}

// getters
const getters = {
  
}

// actions
const actions = {
  async callApi({commit}){
    commit(MUTATION.GET_USER_SUCCESS, await global.getUserInfo())
  }
}

// mutations
const mutations = {
  [MUTATION.GET_USER_SUCCESS] (state, payload) {
    state.user = payload
  },
  [MUTATION.INCREMENT](state) {
    state.count = state.count + 1 
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
