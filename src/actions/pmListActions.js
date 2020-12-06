export const actionTypes = {
  PMLIST_FETCH: 'PMLIST_FETCH',
  PMLIST_SUCCESS: 'PMLIST_SUCCESS',
  PMLIST_ERROR: 'PMLIST_ERROR',
  PMLIST_POPULATE: 'PMLIST_POPULATE',
  PMLIST_SUBMIT: 'PMLIST_SUBMIT',
  PMLIST_REMOVE: 'PMLIST_REMOVE',
  PMLIST_MAKE_DEFAULT: 'PMLIST_MAKE_DEFAULT'
}

export const handlePopulate = pms => ({
  type: actionTypes.PMLIST_POPULATE,
  pms: pms
})

export const handleMakeDefault = pmId => ({
  type: actionTypes.PMLIST_MAKE_DEFAULT,
  pmId: pmId
})

export const handleRemove = pmId => ({
  type: actionTypes.PMLIST_REMOVE,
  pmId: pmId
})

export const handleFetch = cusId => ({
  type: actionTypes.PMLIST_FETCH,
  cusId: cusId
})

export const handleSuccess = success => ({
  type: actionTypes.PMLIST_SUCCESS,
  success: success
})

export const handleError = error => ({
  type: actionTypes.PMLIST_ERROR,
  error: error
})
