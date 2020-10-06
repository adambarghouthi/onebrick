export const actionTypes = {
  PMLIST_FETCH: 'PMLIST_FETCH',
  PMLIST_SUCCESS: 'PMLIST_SUCCESS',
  PMLIST_ERROR: 'PMLIST_ERROR',
  PMLIST_POPULATE: 'PMLIST_POPULATE',
  PMLIST_SUBMIT: 'PMLIST_SUBMIT'
}

export const handlePopulate = mems => ({
  type: actionTypes.PMLIST_POPULATE,
  pms: pms
})

export const handleFetch = () => ({
  type: actionTypes.PMLIST_FETCH
})

export const handleSuccess = success => ({
  type: actionTypes.PMLIST_SUCCESS,
  success: success
})

export const handleError = error => ({
  type: actionTypes.PMLIST_ERROR,
  error: error
})
