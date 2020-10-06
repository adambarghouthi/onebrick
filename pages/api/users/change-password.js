import nextConnect from 'next-connect';
import bcrypt from 'bcrypt'
import User from 'models/User'
import { handleError, handleSuccess } from 'lib/apiHelpers/resHandler'
import handleAsync from 'lib/apiHelpers/handleAsync'
import session from 'lib/apiHelpers/session'
import userWithToken from 'lib/apiHelpers/userWithToken'
import onError from 'lib/apiHelpers/onError'
import middleware from 'lib/middleware'

const handler = nextConnect({ onError });

handler.use(middleware)

handler.put(async (req, res) => {
  const { body } = req
  const {
    token,
    currentPassword,
    newPassword
  } = body

  const [user, userError] = await handleAsync(userWithToken(token))
  if (userError) throw userError

  const [valid, validError] = await handleAsync(bcrypt.compare(currentPassword, user.password))
  if (validError) throw validError
  if (!valid) throw Error('current_password_error')

  const saltRounds = 10
  const hash = await bcrypt.hash(newPassword, saltRounds)

  user.password = hash

  const [savedUser, savedError] = await handleAsync(user.save())
  if (savedError) throw savedError
  
  res.json(handleSuccess(session(savedUser)))
})

export default handler
