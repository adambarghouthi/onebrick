import axios from 'axios'
import { call, put, takeLeading } from 'redux-saga/effects'

import {
  actionTypes,
  handleSuccess,
  handleError,
  handlePopulate
} from 'src/actions/subActions'

function* subFetch(action) {
  const { subId } = action
  const url = '/api/stripe/subscriptions'

  let token

  try {
    token = localStorage.getItem('token')

    const res = yield call(() => axios.get(url, {
      params: {
        token: token,
        subscriptionId: subId
      }
    }))

    const { data } = res
    if (data.status === 'error') throw data

    const sub = data.data

    yield put(handlePopulate(sub))
    yield put(handleSuccess('fetch_sub_success'))
  } catch (error) {
    yield put(handleError(error.message))
  }
}

function* subEdit(action) {
  const { params } = action
  const { subId, ...rest } = params
  const url = '/api/stripe/subscriptions'

  let token

  try {
    token = localStorage.getItem('token')

    const res = yield call(() => axios.put(url, {
      token: token,
      subscriptionId: subId,
      ...rest
    }))

    const { data } = res
    if (data.status === 'error') throw data

    const sub = data.data

    yield put(handlePopulate(sub))
    yield put(handleSuccess('edit_sub_success'))
  } catch (error) {
    yield put(handleError(error.message))
  }
}

export function* watchSubFetch() {
  yield takeLeading(actionTypes.SUB_FETCH, subFetch)
}

export function* watchSubEdit() {
  yield takeLeading(actionTypes.SUB_EDIT, subEdit)
}
