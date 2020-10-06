import axios from 'axios'
import { call, put, takeLeading } from 'redux-saga/effects'
import {
  actionTypes,
  handleSuccess,
  handleError
} from 'actions/signupFormActions'
import { handleLogin } from 'actions/userActions'

function* signupFormSubmit(action) {
  const { form } = action
  const url = '/api/users'

  try {
    const res = yield call(() => axios.post(url, form))

    const { data } = res
    if (data.status === 'error') throw data

    const session = data.data

    yield localStorage.setItem('token', session.token)
    yield put(handleLogin({ ...session.user }))
    yield put(handleSuccess('signup_user_success'))
  } catch (error) {
    yield put(handleError(error.message))
  }
}

export default function* watchSignupFormSubmit() {
  yield takeLeading(actionTypes.SIGNUP_FORM_SUBMIT, signupFormSubmit)
}
