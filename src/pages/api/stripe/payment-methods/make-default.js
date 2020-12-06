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

handler.put(async (req, res) => {
  const { body } = req
  const {
    token,
    paymentMethodId
  } = body

  const [user, userError] = await handleAsync(userWithToken(token))
  if (userError) throw userError

  const [pm, pmError] = await handleAsync(stripe.paymentMethods.retrieve(paymentMethodId))
  if (pmError) throw pmsError

  if (pm.customer === user.stripe.customerId) {
    const [cus, cusError] = await handleAsync(stripe.customers.update(
      user.stripe.customerId,
      {
        invoice_settings: {
          default_payment_method: pm.id
        }  
      }
    ))
    if (cusError) throw cusError
  } else {
    throw Error('unauthorized')
  }

  res.json(handleSuccess(pm))
})

export default handler
