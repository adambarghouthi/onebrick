import nextConnect from 'next-connect';
import bcrypt from 'bcrypt'
import User from 'models/User'
import { handleError, handleSuccess } from 'lib/apiHelpers/resHandler'
import handleAsync from 'lib/apiHelpers/handleAsync'
import session from 'lib/apiHelpers/session'
import onError from 'lib/apiHelpers/onError'
import middleware from 'lib/middleware'

const handler = nextConnect({ onError });

handler.use(middleware)

handler.post(async (req, res) => {
  const { body } = req
  const { email, password } = body

  const [fetchedUser, fetchedError] = await handleAsync(User.findOne({ email: email }))
  if (fetchedError) throw fetchedError

  const [valid, validError] = await handleAsync(bcrypt.compare(password, fetchedUser.password))
  if (validError) throw validError
  if (!valid) throw Error('login_user_error')

  res.json(handleSuccess(session(fetchedUser)))
})

export default handler