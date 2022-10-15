function getAccessToken() {
  return localStorage.getItem('accessToken')
}

function setAccessToken(token) {
  localStorage.setItem('accessToken', token)
  localStorage.setItem('username', getUserDataFromToken(token).name)
}

function getRefreshToken() {
  return localStorage.getItem('refreshToken')
}

function setRefreshToken(token) {
  localStorage.setItem('refreshToken', token)
}

function removeTokens() {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  localStorage.removeItem('username')
}

function getUserDataFromToken(token) {
  let base64 = token.split('.')[1]
  let jsonString = decodeURIComponent(atob(base64))
  return JSON.parse(jsonString)
}


const TokenUtils = {
  getAccessToken,
  setAccessToken,
  getRefreshToken,
  setRefreshToken,
  removeTokens,
  getUserDataFromToken
}

export default TokenUtils
