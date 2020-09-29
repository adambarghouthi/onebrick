import { actionTypes } from 'actions/changePwdFormActions'

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
          currentPassword: action.current_password,
          newPassword: action.new_password,
          confirmNewPassword: action.confirm_new_password
        }
      }

    case actionTypes.CP_FORM_SUBMIT:
      return {
        ...state,
        ...{
          loading: true,
          error: initialState.error
        }
      }

    case actionTypes.CP_FORM_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
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

    default:
      return { ...state }
  }
}

export default reducer
