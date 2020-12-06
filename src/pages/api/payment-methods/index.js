import nextConnect from 'next-connect';
import Stripe from 'stripe'
import { handleError, handleSuccess } from 'lib/apiHelpers/resHandler'
import handleAsync from 'lib/apiHelpers/handleAsync'
import userWithToken from 'lib/apiHelpers/userWithToken'
import onError from 'lib/apiHelpers/onError'
import middleware from 'lib/middleware'

const stripe = Stripe(process.env.STRIPE_SK);

const handler = nextConnect({ onError });

handler.use(middleware)

handler.get(async (req, res) => {
  const { query } = req
  const { token, customerId } = query

  const [user, userError] = await handleAsync(userWithToken(token))
  if (userError) throw userError

  const [pms, pmsError] = await handleAsync(stripe.paymentMethods.list({
    customer: customerId,
    type: 'card'
  }))
  if (pmsError) throw pmsError

  res.json(handleSuccess(pms.data))
})

handler.post(async (req, res) => {
  const { body } = req
  const {
    token,
    customerId,
    cardToken
  } = body

  if (!customerId) throw Error('unauthorized')

  const [user, userError] = await handleAsync(userWithToken(token))
  if (userError) throw userError

  const [pm, pmError] = await handleAsync(stripe.paymentMethods.create({
    type: 'card',
    card: { token: cardToken }
  }))
  if (pmError) throw pmError

  const [attachedPm, attachedError] = await handleAsync(stripe.paymentMethods.attach(pm.id, {
    customer: customerId
  }))
  if (attachedError) throw attachedError

  res.json(handleSuccess(pm))
})

handler.delete(async (req, res) => {
  const { query } = req
  const { token, paymentMethodId } = query

  const [user, userError] = await handleAsync(userWithToken(token))
  if (userError) throw userError

  const [pm, pmError] = await handleAsync(stripe.paymentMethods.detach(paymentMethodId))
  if (pmError) throw pmError

  res.json(handleSuccess(pm))
})

export default handler
