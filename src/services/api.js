import axios from "axios"

const apiCodeburger = axios.create({
  // baseURL: "https://codeburger-backend-production-6629.up.railway.app/",
  baseURL: "http://localhost:3001",
})

apiCodeburger.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem("codeburger:userData")
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiCodeburger
