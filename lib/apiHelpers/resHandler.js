const handleError = (error) => {
  let message;

  if (error.name === 'TokenExpiredError') {
    message = 'token_expired'
  } else if (error._message === 'User validation failed') {
    if (error.errors.email) message = 'email_not_unique'
    else message = 'Object validation error.'
  } else if (error.name === 'CastError') {
    message = `Object cast error.`
  } else if (error.code === 'card_declined') {
    message = 'card_declined'
  } else {
    message = error.message
  }

  return {
    status: 'error',
    message: message
  }
}

const handleSuccess = data => ({
  status: 'success',
  data: data
})

export {
  handleError,
  handleSuccess,
}
