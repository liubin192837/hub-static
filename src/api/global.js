/**
 * Mocking client-server processing
 */
import Axios from '../utils/fetch'
import { API, CONSTANT } from '../constants'

export default {
  getUserInfo() {
    return Axios.get(API.GET_USER, {name: CONSTANT.USER_NAME})
  },
  getMyAllFiles(){
    return Axios.get(API.GET_MY_ALL_FILES)
  }
}
