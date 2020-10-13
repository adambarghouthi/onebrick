import { all, fork } from 'redux-saga/effects'
import signupFormSaga from './signupFormSaga'
import loginFormSaga from './loginFormSaga'
import profileFormSaga from './profileFormSaga'
import changePwdFormSaga from './changePwdFormSaga'
import memListSaga from './memListSaga'
import {
  watchSubFetch,
  watchSubEdit
} from './subSaga'
import {
  watchUserFetch,
  watchUserLogout
} from './userSaga'
import {
  watchPmFormSubscribe,
  watchPmFormSubmit
} from './pmFormSaga'
import {
  watchPmListFetch,
  watchPmListMakeDefault,
  watchPmListRemove
} from './pmListSaga'

function* rootSaga() {
  yield all([
    fork(signupFormSaga),
    fork(loginFormSaga),
    fork(profileFormSaga),
    fork(changePwdFormSaga),
    fork(memListSaga),
    fork(watchUserFetch),
    fork(watchUserLogout),
    fork(watchSubFetch),
    fork(watchSubEdit),
    fork(watchPmFormSubscribe),
    fork(watchPmFormSubmit),
    fork(watchPmListFetch),
    fork(watchPmListMakeDefault),
    fork(watchPmListRemove)
  ])
}

export default rootSaga
