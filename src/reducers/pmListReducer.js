import { actionTypes } from 'actions/pmListActions'

const initialState = {
  pms: [],
  loading: false,
  success: null,
  error: null
}

function reducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.PMLIST_POPULATE:
      return {
        ...state,
        ...{
          pms: action.pms
        }
      }

    case actionTypes.PMLIST_FETCH:
    case actionTypes.PMLIST_SUBMIT:
    case actionTypes.PMLIST_MAKE_DEFAULT:
    case actionTypes.PMLIST_REMOVE:
      return {
        ...state,
        ...{
          loading: true,
          success: initialState.success,
          error: initialState.error
        }
      }

    case actionTypes.PMLIST_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          success: action.success
        }
      }

    case actionTypes.PMLIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case actionTypes.USER_LOGOUT:
      return { ...initialState }

    default:
      return { ...state }
  }
}

export default reducer
