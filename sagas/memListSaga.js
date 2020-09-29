import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  actionTypes,
  handleSuccess,
  handleError,
  handlePopulate
} from 'actions/memListActions'

function* memListFetch(action) {
  const { product } = action
  const url = '/api/memberships'

  try {
    const res = yield call(() => axios.get(url, {
      params: { product: product }
    }))

    const { data } = res
    if (data.status === 'error') throw data

    // sort memberships alphabetically by interval
    // i.e. monthly before yearly
    const mems = data.data.sort((a,b) => {
      if (a.recurring.interval < b.recurring.interval) return -1
      if (a.recurring.interval > b.recurring.interval) return 1
      return 0
    })

    yield put(handleSuccess())
    yield put(handlePopulate(mems))
  } catch (error) {
    yield put(handleError(error.message))
  }
}

export function* watchMemListFetch() {
  yield takeLatest(actionTypes.MEMLIST_FETCH, memListFetch)
}
