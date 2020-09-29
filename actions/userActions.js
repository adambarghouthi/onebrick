export const actionTypes = {
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
  USER_FETCH: 'USER_FETCH'
}

export const handleFetch = token => ({
  type: actionTypes.USER_FETCH,
  token: token
})

export const handleLogin = user => ({
  type: actionTypes.USER_LOGIN,
  ...user
})

export const handleLogout = () => ({
  type: actionTypes.USER_LOGOUT,
})
