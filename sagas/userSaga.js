import axios from 'axios'
import { call, put, takeLeading } from 'redux-saga/effects'
import {
  actionTypes,
  handleLogin,
  handleLogout
} from 'actions/userActions'

function* userFetch(action) {
  const { token } = action
  const url = '/api/users'

  try {
    const res = yield call(() => axios.get(url, {
      params: { token: token }
    }))

    const { data } = res
    if (data.status === 'error') throw data

    const session = data.data

    if (session) {
      yield localStorage.setItem('token', session.token)
      yield put(handleLogin(session.user))
    } else {
      throw new Error()
    }
  } catch (error) {
    yield put(handleLogout())
  }
}

function* userLogout(action) {
  yield localStorage.removeItem('token')
}

export function* watchUserFetch() {
  yield takeLeading(actionTypes.USER_FETCH, userFetch)
}

export function* watchUserLogout() {
  yield takeLeading(actionTypes.USER_LOGOUT, userLogout)
}
