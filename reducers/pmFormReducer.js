import { actionTypes } from 'actions/pmFormActions'

const initialState = {
  cardholder: '',
  country: null,
  loading: false,
  success: null,
  error: null
}

function reducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.PM_FORM_EDIT:
      return {
        ...state,
        ...{
          cardholder: action.cardholder,
          country: action.country
        }
      }

    case actionTypes.PM_FORM_SUBMIT:
    case actionTypes.PM_FORM_SUBSCRIBE:
      return {
        ...state,
        ...{
          loading: true,
          success: initialState.success,
          error: initialState.error
        }
      }

    case actionTypes.PM_FORM_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          success: action.success
        }
      }

    case actionTypes.PM_FORM_ERROR:
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
