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

handler.get(async (req, res) => {
  const { query } = req
  const { token } = query

  const [user, userError] = await handleAsync(userWithToken(token))
  if (userError) throw userError

  res.json(handleSuccess(session(user)))
})

handler.post(async (req, res) => {
  const { body } = req
  const { email, password } = body

  const saltRounds = 10
  const hash = await bcrypt.hash(password, saltRounds)

  const newUser = new User({ email: email, password: hash })

  const [savedUser, error] = await handleAsync(newUser.save())
  if (error) throw error

  res.json(handleSuccess(session(savedUser)))
})

handler.put(async (req, res) => {
  const { body } = req
  const { token, ...data } = body

  const [user, userError] = await handleAsync(userWithToken(token))
  if (userError) throw userError

  Object.keys(data).forEach((key) => {
    user[key] = data[key]
  })

  user.markModified('stripe');

  const [savedUser, savedError] = await handleAsync(user.save())
  if (savedError) throw savedError
  
  res.json(handleSuccess(session(savedUser)))
})

export default handler
