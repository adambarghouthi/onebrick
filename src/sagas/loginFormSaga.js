import axios from 'axios'
import { call, put, takeLeading } from 'redux-saga/effects'
import {
  actionTypes,
  handleSuccess,
  handleError
} from 'src/actions/loginFormActions'
import { handleLogin } from 'src/actions/userActions'

function* loginFormSubmit(action) {
  const { form } = action
  const url = '/api/auth'

  try {
    const res = yield call(() => axios.post(url, form))

    const { data } = res
    if (data.status === 'error') throw data

    const session = data.data

    yield localStorage.setItem('token', session.token)
    yield put(handleLogin({ ...session.user }))
    yield put(handleSuccess('login_user_success'))
  } catch (error) {
    yield put(handleError(error.message))
  }
}

export default function* watchSignupFormSubmit() {
  yield takeLeading(actionTypes.LOGIN_FORM_SUBMIT, loginFormSubmit)
}
