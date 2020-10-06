import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  actionTypes,
  handleSuccess,
  handleError,
  handlePopulate
} from 'actions/pmListActions'

function* pmListFetch(action) {
  const { product } = action
  const url = '/api/payment-methods'

  let token

  try {
    token = localStorage.getItem('token')

    const { data } = res
    if (data.status === 'error') throw data

    const pms = data.data

    yield put(handleSuccess())
    yield put(handlePopulate(pms))
  } catch (error) {
    yield put(handleError(error.message))
  }
}

export function* watchPmListFetch() {
  yield takeLatest(actionTypes.PMLIST_FETCH, pmListFetch)
}
