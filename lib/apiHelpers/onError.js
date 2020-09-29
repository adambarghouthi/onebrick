import { handleError } from './resHandler'

function onError(error, req, res) {
  res.json(handleError(error))
}

export default onError