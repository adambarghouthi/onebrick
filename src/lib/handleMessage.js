import { message } from 'antd'

const handleMessage = (success, error, t) => {
  if (success) {
    message.success(t(success))
  } else if (error) {
    if (t(error)) message.error(t(error))
    else message.error(error)
  }
}

export default handleMessage
