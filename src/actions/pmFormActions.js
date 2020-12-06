export const actionTypes = {
  PM_FORM_EDIT: 'PM_FORM_EDIT',
  PM_FORM_SUBMIT: 'PM_FORM_SUBMIT',
  PM_FORM_SUBSCRIBE: 'PM_FORM_SUBSCRIBE',
  PM_FORM_SUCCESS: 'PM_FORM_SUCCESS',
  PM_FORM_ERROR: 'PM_FORM_ERROR'
}

export const handleChange = (changedValues, allValues) => ({
  type: actionTypes.PM_FORM_EDIT,
  ...allValues
})

export const handleSubmit = form => ({
  type: actionTypes.PM_FORM_SUBMIT,
  form: form
})

export const handleSubscribe = form => ({
  type: actionTypes.PM_FORM_SUBSCRIBE,
  form: form
})

export const handleSuccess = success => ({
  type: actionTypes.PM_FORM_SUCCESS,
  success: success
})

export const handleError = error => ({
  type: actionTypes.PM_FORM_ERROR,
  error: error
})
