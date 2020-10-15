import { actionTypes } from 'actions/memListActions'

const initialState = {
  mems: [],
  selected: null,
  loading: false,
  success: null,
  error: null
}

function reducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.MEMLIST_SELECT:
      return {
        ...state,
        selected: action.selected
      }

    case actionTypes.MEMLIST_POPULATE:
      return {
        ...state,
        ...{
          mems: action.mems
        }
      }

    case actionTypes.MEMLIST_FETCH:
      return {
        ...state,
        ...{
          loading: true
        }
      }

    case actionTypes.MEMLIST_SUBMIT:
      return {
        ...state,
        ...{
          loading: true
        }
      }

    case actionTypes.MEMLIST_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          success: action.success
        }
      }

    case actionTypes.MEMLIST_ERROR:
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
