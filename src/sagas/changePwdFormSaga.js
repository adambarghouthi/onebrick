import axios from 'axios'
import { call, put, takeLeading } from 'redux-saga/effects'
import {
  actionTypes,
  handleSuccess,
  handleError
} from 'src/actions/changePwdFormActions'

function* changePwdFormSubmit(action) {
  const { form } = action
  const url = '/api/users/change-password'

  let token

  try {
    token = localStorage.getItem('token')

    const res = yield call(() => axios.put(url, { token, ...form }))

    const { data } = res
    if (data.status === 'error') throw data

    const session = data.data

    yield localStorage.setItem('token', session.token)
    yield put(handleSuccess('change_password_success'))
  } catch (error) {
    yield put(handleError(error.message))
  }
}

export default function* watchChangePwdFormSubmit() {
  yield takeLeading(actionTypes.CP_FORM_SUBMIT, changePwdFormSubmit)
}
