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
      return {
        ...state,
        ...{
          loading: true,
          succes: initialState.success,
          error: initialState.error
        }
      }

    case actionTypes.SUB_SUCCESS:
      return {
        ...state,
        ...{
          loading: false
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

    default:
      return { ...state }
  }
}

export default reducer
