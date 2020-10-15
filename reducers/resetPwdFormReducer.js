import { actionTypes } from 'actions/signupFormActions'

const initialState = {}

function reducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.SIGNUP_FORM_EDIT:
      return {
        ...state,
        ...{
          email: action.email,
          password: action.password,
          current_password: action.current_password
        }
      }

    case actionTypes.SIGNUP_FORM_SUBMIT:
      return {
        ...state,
        ...{
          loading: true,
          error: initialState.error
        }
      }

    case actionTypes.SIGNUP_FORM_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          success: action.success
        }
      }

    case actionTypes.SIGNUP_FORM_ERROR:
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
