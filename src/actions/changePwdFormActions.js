export const actionTypes = {
  CP_FORM_EDIT: 'CP_FORM_EDIT',
  CP_FORM_SUBMIT: 'CP_FORM_SUBMIT',
  CP_FORM_SUCCESS: 'CP_FORM_SUCCESS',
  CP_FORM_ERROR: 'CP_FORM_ERROR'
}

export const handleChange = (changedValues, allValues) => ({
  type: actionTypes.CP_FORM_EDIT,
  ...allValues
})

export const handleSubmit = form => ({
  type: actionTypes.CP_FORM_SUBMIT,
  form: form
})

export const handleSuccess = success => ({
  type: actionTypes.CP_FORM_SUCCESS,
  success: success
})

export const handleError = error => ({
  type: actionTypes.CP_FORM_ERROR,
  error: error
})
