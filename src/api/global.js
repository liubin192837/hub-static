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
    console.log(params);
      return Axios.get(API.POST_LOGIN, params)
  }
}
