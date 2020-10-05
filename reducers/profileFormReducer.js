import { actionTypes } from 'actions/profileFormActions'

const initialState = {
  email: '',
  loading: false,
  success: null,
  error: null
}

function reducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.PROFILE_FORM_EDIT:
      return {
        ...state,
        ...{
          email: action.email
        }
      }

    case actionTypes.PROFILE_FORM_SUBMIT:
      return {
        ...state,
        ...{
          loading: true,
          error: initialState.error,
          success: initialState.success
        }
      }

    case actionTypes.PROFILE_FORM_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          success: action.success
        }
      }

    case actionTypes.PROFILE_FORM_ERROR:
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
