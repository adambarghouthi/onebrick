import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'

import {
  actionTypes,
  handleSuccess,
  handleError,
  handleFetch,
  handlePopulate
} from 'src/actions/pmListActions'

import { handleFetch as subFetch } from 'src/actions/subActions'

function* pmListFetch(action) {
  const { cusId } = action
  const url = '/api/stripe/payment-methods'

  let token

  try {
    token = localStorage.getItem('token')

    const res = yield call(() => axios.get(url, {
      params: {
        token: token,
        customerId: cusId
      }
    }))

    const { data } = res
    if (data.status === 'error') throw data

    const pms = data.data

    yield put(handleSuccess(null))
    yield put(handlePopulate(pms))
  } catch (error) {
    yield put(handleError(error.message))
  }
}

function* pmListMakeDefault(action) {
  const { pmId, subId } = action
  const url = '/api/stripe/payment-methods/make-default'

  let token

  try {
    token = localStorage.getItem('token')

    const res = yield call(() => axios.put(url, {
      token: token,
      paymentMethodId: pmId
    }))

    const { data } = res
    if (data.status === 'error') throw data

    const pms = data.data

    yield put(handleSuccess('make_default_pm_success'))
  } catch (error) {
    yield put(handleError(error.message))
  }
}

function* pmListRemove(action) {
  const { pmId } = action
  const url = '/api/stripe/payment-methods'

  let token

  try {
    token = localStorage.getItem('token')

    const res = yield call(() => axios.delete(url, {
      params: {
        token: token,
        paymentMethodId: pmId
      }
    }))

    const { data } = res
    if (data.status === 'error') throw data

    const pm = data.data

    yield put(handleSuccess('remove_pm_success'))
  } catch (error) {
    yield put(handleError(error.message))
  }
}

export function* watchPmListRemove() {
  yield takeLatest(actionTypes.PMLIST_REMOVE, pmListRemove)
}

export function* watchPmListMakeDefault() {
  yield takeLatest(actionTypes.PMLIST_MAKE_DEFAULT, pmListMakeDefault)
}

export function* watchPmListFetch() {
  yield takeLatest(actionTypes.PMLIST_FETCH, pmListFetch)
}
