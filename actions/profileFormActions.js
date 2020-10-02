export const actionTypes = {
  PROFILE_FORM_EDIT: 'PROFILE_FORM_EDIT',
  PROFILE_FORM_SUBMIT: 'PROFILE_FORM_SUBMIT',
  PROFILE_FORM_SUCCESS: 'PROFILE_FORM_SUCCESS',
  PROFILE_FORM_ERROR: 'PROFILE_FORM_ERROR'
}

export const handleChange = (changedValues, allValues) => ({
  type: actionTypes.PROFILE_FORM_EDIT,
  ...allValues
})

export const handleSubmit = form => ({
  type: actionTypes.PROFILE_FORM_SUBMIT,
  form: form
})

export const handleSuccess = success => ({
  type: actionTypes.PROFILE_FORM_SUCCESS,
  success: success
})

export const handleError = error => ({
  type: actionTypes.PROFILE_FORM_ERROR,
  error: error
})
