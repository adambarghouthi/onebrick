import { actionTypes } from 'actions/subActions'

const initialState = {
  sub: null,
  loading: false,
  success: null,
  error: null
}

function reducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.SUB_POPULATE:
      return {
        ...state,
        ...{
          sub: action.sub
        }
      }

    case actionTypes.SUB_FETCH:
    case actionTypes.SUB_SUBMIT:
    case actionTypes.SUB_EDIT:
      return {
        ...state,
        ...{
          loading: true,
          success: initialState.success,
          error: initialState.error
        }
      }

    case actionTypes.SUB_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          success: action.success
        }
      }

    case actionTypes.SUB_ERROR:
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
