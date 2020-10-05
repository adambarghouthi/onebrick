import { actionTypes } from 'actions/userActions'

const initialState = {
  email: '',
  stripe: {},
  loading: false,
  auth: false
}

function reducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.USER_FETCH:
      return {
        ...state,
        ...{
          loading: true
        }
      }

    case actionTypes.USER_LOGIN:
      return {
        ...state,
        ...{
          email: action.email,
          stripe: action.stripe,
          loading: false,
          auth: true
        }
      }

    case actionTypes.USER_EDIT:
      return {
        ...state,
        ...{
          email: action.email,
          stripe: action.stripe
        }
      }

    case actionTypes.USER_LOGOUT:
      return { ...initialState }

    default:
      return { ...state }
  }
}

export default reducer
