/**
 * Mocking client-server processing
 */
import Axios from '../utils/fetch'
import { API, CONSTANT } from '../constants'

export default {
  getUserInfo() {
    return Axios.get(API.GET_USER, {name: CONSTANT.USER_NAME})
  },

  getMyAllFiles(pageNumber){
    return Axios.get(API.GET_MY_ALL_FILES, { pageNumber })
  },

  login(params){
      return Axios.post(API.POST_LOGIN, params)
  },

  checkLogin(){
    return Axios.post(API.CHECK_LOGIN)
  },
  
  logout(){
    return Axios.get(API.GET_LOGOUT)
  },

  addUser(params){
    return Axios.post(API.ADD_USER, params)
  }
}
