export const actionTypes = {
  SIGNUP_FORM_EDIT: 'SIGNUP_FORM_EDIT',
  SIGNUP_FORM_SUBMIT: 'SIGNUP_FORM_SUBMIT',
  SIGNUP_FORM_SUCCESS: 'SIGNUP_FORM_SUCCESS',
  SIGNUP_FORM_ERROR: 'SIGNUP_FORM_ERROR'
}

export const handleChange = (changedValues, allValues) => ({
  type: actionTypes.SIGNUP_FORM_EDIT,
  ...allValues
})

export const handleSubmit = form => ({
  type: actionTypes.SIGNUP_FORM_SUBMIT,
  form: { ...form }
})

export const handleSuccess = success => ({
  type: actionTypes.SIGNUP_FORM_SUCCESS,
  success: success
})

export const handleError = error => ({
  type: actionTypes.SIGNUP_FORM_ERROR,
  error: error
})
