export const actionTypes = {
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
  USER_FETCH: 'USER_FETCH',
  USER_EDIT: 'USER_EDIT'
}

export const handleFetch = () => ({
  type: actionTypes.USER_FETCH
})

export const handleLogin = user => ({
  type: actionTypes.USER_LOGIN,
  ...user
})

export const handleEdit = user => ({
  type: actionTypes.USER_EDIT,
  ...user
})

export const handleLogout = () => ({
  type: actionTypes.USER_LOGOUT,
})
