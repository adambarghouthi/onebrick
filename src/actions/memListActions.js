export const actionTypes = {
  MEMLIST_FETCH: 'MEMLIST_FETCH',
  MEMLIST_SUCCESS: 'MEMLIST_SUCCESS',
  MEMLIST_ERROR: 'MEMLIST_ERROR',
  MEMLIST_SELECT: 'MEMLIST_SELECT',
  MEMLIST_POPULATE: 'MEMLIST_POPULATE',
  MEMLIST_SUBMIT: 'MEMLIST_SUBMIT'
}

export const handlePopulate = mems => ({
  type: actionTypes.MEMLIST_POPULATE,
  mems: mems
})

export const handleSelect = selected => ({
  type: actionTypes.MEMLIST_SELECT,
  selected: selected
})

export const handleFetch = product => ({
  type: actionTypes.MEMLIST_FETCH,
  product: product
})

export const handleSuccess = success => ({
  type: actionTypes.MEMLIST_SUCCESS,
  success: success
})

export const handleError = error => ({
  type: actionTypes.MEMLIST_ERROR,
  error: error
})
