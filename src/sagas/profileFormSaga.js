import axios from 'axios'
import { call, put, takeLeading } from 'redux-saga/effects'

import {
  actionTypes,
  handleSuccess,
  handleError,
  handleChange
} from 'src/actions/profileFormActions'

import { handleEdit } from 'src/actions/userActions'

function* profileFormSubmit(action) {
  const { form } = action
  const url = '/api/users'

  let token

  try {
    token = localStorage.getItem('token')

    const res = yield call(() => axios.put(url, { token, ...form }))

    const { data } = res
    if (data.status === 'error') throw data

    const session = data.data

    yield localStorage.setItem('token', session.token)
    yield put(handleEdit(session.user))
    yield put(handleSuccess('edit_profile_success'))
  } catch (error) {
    yield put(handleError(error.message))
  }
}

export default function* watchProfileFormSubmit() {
  yield takeLeading(actionTypes.PROFILE_FORM_SUBMIT, profileFormSubmit)
}
