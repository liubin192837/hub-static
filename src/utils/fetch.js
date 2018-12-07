/* eslint-disable */
import axios from 'axios'
import { queryString } from './util'

export default {
  get(url, query) {
    return axios.get(formatUrl(url, query), {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'content-Type': 'application/json'
      },
      withCredentials: true,
    }).then((res) => {
      return res.data;
    })
  },
  post(url,query,params) {
    return axios.post(formatUrl(url, query), params, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'content-Type': 'application/json'
      },
      withCredentials: true,
    }).then((res) => {
      return res.data;
    })
  }
}

function formatUrl(url, query) {
  return query ? `${url}?${queryString(query)}` : url
}