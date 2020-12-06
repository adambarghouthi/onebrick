import { actionTypes } from 'src/actions/changePwdFormActions'

const initialState = {
  currentPassword: '',
  newPassword: '',
  confirmNewPassword: '',
  loading: false,
  success: null,
  error: null,
}

function reducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.CP_FORM_EDIT:
      return {
        ...state,
        ...{
          currentPassword: action.currentPassword,
          newPassword: action.newPassword,
          confirmNewPassword: action.confirmNewPassword
        }
      }

    case actionTypes.CP_FORM_SUBMIT:
      return {
        ...state,
        ...{
          loading: true,
          error: initialState.error,
          success: initialState.success
        }
      }

    case actionTypes.CP_FORM_SUCCESS:
      return {
        ...state,
        ...{
          ...initialState,
          success: action.success
        }
      }

    case actionTypes.CP_FORM_ERROR:
      return {
        ...state,
        ...{
          loading: false,
          error: action.error
        }
      }

    case actionTypes.USER_LOGOUT:
      return { ...initialState }

    default:
      return { ...state }
  }
}

export default reducer
