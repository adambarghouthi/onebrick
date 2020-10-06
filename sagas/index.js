import { all, fork } from 'redux-saga/effects'
import signupFormSaga from './signupFormSaga'
import loginFormSaga from './loginFormSaga'
import profileFormSaga from './profileFormSaga'
import changePwdFormSaga from './changePwdFormSaga'
import { watchUserFetch, watchUserLogout } from './userSaga'
import { watchMemListFetch } from './memListSaga'
import { watchPmFormSubscribe } from './pmFormSaga'
import { watchSubFetch } from './subSaga'
import { watchPmListFetch } from './pmListSaga'

function* rootSaga() {
  yield all([
    fork(signupFormSaga),
    fork(loginFormSaga),
    fork(profileFormSaga),
    fork(changePwdFormSaga),
    fork(watchPmFormSubscribe),
    fork(watchUserFetch),
    fork(watchUserLogout),
    fork(watchMemListFetch),
    fork(watchSubFetch),
    fork(watchPmListFetch)
  ])
}

export default rootSaga
