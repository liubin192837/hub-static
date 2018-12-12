/* eslint-disable */
import global from '../../api/global'
import {MUTATION} from '../../constants'
import router from '../../router'
// initial state
const state = {
    count: 0,
    data6: [],
    current: 1,
    token: null,

}

// getters
const getters = {}

// actions
const actions = {
    async callApi({commit}) {
        commit(MUTATION.GET_USER_SUCCESS, await global.getUserInfo())
    },

    async getMyAllFiles({commit}, pageNumber) {
        if (!pageNumber){
            pageNumber = state.current;
        }
        commit(MUTATION.GET_MY_ALL_FILES_SUCCES, await global.getMyAllFiles(pageNumber))
    },

    async login ({commit}, payload){
        console.log('-------------this.data', name);
        commit(MUTATION.POST_LOGIN_SUCCES, await global.login(payload))
    }
}

// mutations
const mutations = {
    [MUTATION.GET_USER_SUCCESS](state, payload) {
        state.user = payload
    },
    [MUTATION.INCREMENT](state) {
        state.count = state.count + 1
    },

    [MUTATION.GET_MY_ALL_FILES_SUCCES](state, data) {
        state.data6 = data.list
        state.current = data.allNumber
    },
    [MUTATION.POST_LOGIN_SUCCES](state, data) {
        console.log('-------------POST_LOGIN_SUCCES', data);
        if (data.token) {
            console.log('-------------POST_LOGIN_SUCCES token', data.token);
            state.token = data.token;
            router.push({path: '/'});
        }

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
