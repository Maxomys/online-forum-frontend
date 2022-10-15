import axios from 'axios'
import TokenUtils from '../utils/TokenUtils'

const API_BASE_URL = process.env.REACT_APP_API_URL
const LOGIN_URL = API_BASE_URL + '/login'
const NEW_USER_URL = API_BASE_URL + '/users'

async function login(credentials) {

  try {
    const response = await axios.post(API_BASE_URL + LOGIN_URL, credentials)

    if (response.data.accessToken && response.data.refreshToken) {
      TokenUtils.setAccessToken(response.data.accessToken)
      TokenUtils.setRefreshToken(response.data.refreshToken)
    }

  } catch (error) {
    return error
  }
}

async function register(credentials) {
  try {
    const response = await axios.post(API_BASE_URL + NEW_USER_URL, credentials)
    if (response.status !== 201) {
      return response.data
    }
  } catch (error) {
    return error
  }
}

function logout() {
  TokenUtils.removeTokens()
}

const AuthService = {
  login,
  logout,
  register
}

export default AuthService
