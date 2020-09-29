import Stripe from 'stripe'
import nextConnect from 'next-connect';
import { handleError, handleSuccess } from 'lib/apiHelpers/resHandler'
import handleAsync from 'lib/apiHelpers/handleAsync'
import middleware from 'lib/middleware'
import onError from 'lib/apiHelpers/onError'

const handler = nextConnect({ onError });

const stripe = Stripe(process.env.STRIPE_SK);

handler.get(async (req, res) => {
  const { query } = req
  const { product } = query

  const [prices, pricesError] = await handleAsync(stripe.prices.list({ active: true, product: product }))
  if (pricesError) throw pricesError

  res.json(handleSuccess(prices.data))
})

export default handler