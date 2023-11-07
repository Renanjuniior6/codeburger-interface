import axios from 'axios'

const apiCodeburger = axios.create({
  baseURL: 'https://codeburger-backend-production-12f3.up.railway.app/'
})

apiCodeburger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiCodeburger
