import axios from 'axios'
import router from '../router'
import storage from '../storage'
axios.defaults.baseURL = 'http://127.0.0.1:8080'
axios.interceptors.request.use(
  config => {
    config.headers['token'] = storage.getItem('issuer') + ' ' + storage.getItem('token')
    return config
  }, function (error) {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  response => {
    if (response.data.code !== 200) {
      if (response.data.code === 4000) {
        router.push({path: '/login'})
      }
    }
    return response
  },

  error => {
    return Promise.reject(error)
  }
)

function get (url, params) {
  return axios.get(url, {params: params}).then((d) => {
    return d.data
  }).then((v) => {
    return v
  })
}

function post (url, params) {
  return axios.post(url, params).then((d) => {
    return d.data
  }).then((v) => {
    return v
  })
}

const Api = {
  login: function (userName, password) {
    return post('/mobile/v1/login', {'userName': userName, 'password': password})
  },
  index: function () {
    return get('/mobile/v1/index')
  }
}
export default Api
