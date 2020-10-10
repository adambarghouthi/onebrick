export const actionTypes = {
  SUB_FETCH: 'SUB_FETCH',
  SUB_SUBMIT: 'SUB_SUBMIT',
  SUB_EDIT: 'SUB_EDIT',
  SUB_POPULATE: 'SUB_POPULATE',
  SUB_ERROR: 'SUB_ERROR',
  SUB_SUCCESS: 'SUB_SUCCESS'
}

export const handleFetch = subId => ({
  type: actionTypes.SUB_FETCH,
  subId: subId
})

export const handleSubmit = subId => ({
  type: actionTypes.SUB_SUBMIT,
  subId: subId
})

export const handleEdit = params => ({
  type: actionTypes.SUB_EDIT,
  params: params
})

// export const handleProrate = params => ({
//   type: actionTypes.SUB_UPDATE,
//   ...params
// })

export const handlePopulate = sub => ({
  type: actionTypes.SUB_POPULATE,
  sub: sub
})

export const handleSuccess = success => ({
  type: actionTypes.SUB_SUCCESS,
  success: success
})

export const handleError = error => ({
  type: actionTypes.SUB_ERROR,
  error: error
})
