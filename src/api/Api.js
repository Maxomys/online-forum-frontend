import axios from 'axios'
import TokenUtils from '../utils/TokenUtils'

const API_BASE_URL = process.env.REACT_APP_API_URL
const REFRESH_TOKEN_URL = '/tokenRefresh'

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

//set authorization header for each request
instance.interceptors.request.use(
  (config) => {
    const token = TokenUtils.getAccessToken()

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }

    return config
  }, (error) => {
    return Promise.reject(error)
  }
)

//refresh the token
instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalConfig = error.config

    const errorMessage = error.response?.body?.error

    //refresh token only for a specific message
    if (errorMessage !== 'jwt expired' || originalConfig._retry) {
      return Promise.reject(error)
    }

    originalConfig._retry = true

    try {
      const refreshToken = TokenUtils.getRefreshToken()
      const res = await axios.get(API_BASE_URL + REFRESH_TOKEN_URL, {
        headers: {
          'Authorization': `Bearer ${refreshToken}`,
          'Content-Type': 'application/json'
        }
      })

      const freshAccessToken = res.data.token
      const freshRefreshToken = res.data.refreshToken

      TokenUtils.setAccessToken(freshAccessToken)
      TokenUtils.setRefreshToken(freshRefreshToken)

      return instance(originalConfig)
    } catch (_error) {
      return Promise.reject(_error)
    }
  }
)

export default instance
