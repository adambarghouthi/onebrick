import nextConnect from 'next-connect';
import Stripe from 'stripe'
import { handleError, handleSuccess } from 'lib/apiHelpers/resHandler'
import handleAsync from 'lib/apiHelpers/handleAsync'
import session from 'lib/apiHelpers/session'
import userWithToken from 'lib/apiHelpers/userWithToken'
import onError from 'lib/apiHelpers/onError'
import middleware from 'lib/middleware'

const stripe = Stripe(process.env.STRIPE_SK);

const handler = nextConnect({ onError });

handler.use(middleware)

handler.get(async (req, res) => {
  const { query } = req
  const {
    token,
    subscriptionId
  } = query

  const [user, userError] = await handleAsync(userWithToken(token))
  if (userError) throw userError

  const [sub, subError] = await handleAsync(stripe.subscriptions.retrieve(subscriptionId, {
    expand: ['customer']
  }))
  if (subError) throw subError

  res.json(handleSuccess(sub))
})

handler.post(async (req, res) => {
  const { body } = req
  const {
    token,
    customerId,
    price
  } = body

  const [user, userError] = await handleAsync(userWithToken(token))
  if (userError) throw userError

  const [sub, subError] = await handleAsync(stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: price }]
  }))
  if (subError) throw subError

  res.json(handleSuccess(sub))
})

handler.put(async (req, res) => {
  const { body } = req
  const {
    token,
    subscriptionId,
    ...data
  } = body

  const [user, userError] = await handleAsync(userWithToken(token))
  if (userError) throw userError

  const [sub, subError] = await handleAsync(stripe.subscriptions.update(
    subscriptionId,
    { ...data }
  ))
  if (subError) throw subError

  res.json(handleSuccess(sub))
})

export default handler
