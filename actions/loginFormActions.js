export const actionTypes = {
  LOGIN_FORM_EDIT: 'LOGIN_FORM_EDIT',
  LOGIN_FORM_SUBMIT: 'LOGIN_FORM_SUBMIT',
  LOGIN_FORM_SUCCESS: 'LOGIN_FORM_SUCCESS',
  LOGIN_FORM_ERROR: 'LOGIN_FORM_ERROR'
}

export const handleChange = (changedValues, allValues) => ({
  type: actionTypes.LOGIN_FORM_EDIT,
  ...allValues
})

export const handleSubmit = form => ({
  type: actionTypes.LOGIN_FORM_SUBMIT,
  form: { ...form }
})

export const handleSuccess = success => ({
  type: actionTypes.LOGIN_FORM_SUCCESS,
  success: success
})

export const handleError = error => ({
  type: actionTypes.LOGIN_FORM_ERROR,
  error: error
})
