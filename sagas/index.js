import { all, fork } from 'redux-saga/effects'
import signupFormSaga from './signupFormSaga'
import loginFormSaga from './loginFormSaga'
import { watchUserFetch, watchUserLogout } from './userSaga'
import { watchMemListFetch } from './memListSaga'
import { watchPmFormSubscribe } from './pmFormSaga'

function* rootSaga() {
  yield all([
    fork(signupFormSaga),
    fork(loginFormSaga),
    fork(watchPmFormSubscribe),
    fork(watchUserFetch),
    fork(watchUserLogout),
    fork(watchMemListFetch),
  ])
}

export default rootSaga
