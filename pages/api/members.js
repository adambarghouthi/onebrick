import nextConnect from 'next-connect';
import Stripe from 'stripe'
import onError from 'lib/apiHelpers/onError'
import { handleError, handleSuccess } from 'lib/apiHelpers/resHandler'
import handleAsync from 'lib/apiHelpers/handleAsync'
import userWithToken from 'lib/apiHelpers/userWithToken'
import middleware from 'lib/middleware'

const stripe = Stripe(process.env.STRIPE_SK);

const handler = nextConnect({ onError });

handler.use(middleware)

handler.post(async (req, res) => {
  const { body } = req
  const { token } = body

  const [user, userError] = await handleAsync(userWithToken(token))
  if (userError) throw userError

  const [cus, cusError] = await handleAsync(stripe.customers.create({
    email: user.email,
  }))
  if (cusError) throw cusError

  res.json(handleSuccess(cus))
})

handler.put(async (req, res) => {
  const { body } = req
  const {
    token,
    customerId,
    ...data
  } = body

  const [user, userError] = await handleAsync(userWithToken(token))
  if (userError) throw userError

  const [cus, cusError] = await handleAsync(stripe.customers.update(
    customerId,
    { ...data }
  ))
  if (cusError) throw cusError

  res.json(handleSuccess(cus))
})

export default handler
