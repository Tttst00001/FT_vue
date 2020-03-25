import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: '/api',
  // baseURL: process.env.BASE_API,
  timeout: 1000 * 30,
  responseType: 'json'
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    return response.data.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
