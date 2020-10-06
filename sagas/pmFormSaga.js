import axios from 'axios'
import { call, put, takeLeading } from 'redux-saga/effects'
import {
  actionTypes,
  handleSuccess,
  handleError
} from 'actions/pmFormActions'

async function createCardToken(params) {
  const {
    cardElement,
    cardholder,
    country,
    stripe
  } = params

  try {
    const res = await stripe.createToken(cardElement, {
      name: cardholder,
      address_country: country
    })

    if (res.error) throw res.error

    return res.token.id
  } catch (error) {
    throw error
  }
}

async function createPaymentMethod(params) {
  const url = '/api/payment-methods'
  const { token, customerId, cardToken } = params

  try {
    const res = await axios.post(url, {
      token: token,
      customerId: customerId,
      cardToken: cardToken
    })

    if (res.data.status === 'error') throw res.data

    return res.data.data
  } catch (error) {
    throw error
  }
}

function* pmFormSubscribe(action) {
  const { form } = action
  const { stripe, price } = form
  const urls = {
    users: '/api/users',
    members: '/api/members',
    subscriptions: '/api/subscriptions'
  }

  let token, cus, sub, toke

  try {
    // 1. create cardToken from CardElement using stripe.js
    // 2. create customer on stripe
    // 3. create paymentMethod for user on stripe with cardToken
    // 4. update customer on stripe with default payment method
    // 5. create subscription for user on stripe with price
    // 6. save customer id and subscription id in user

    // get jwt
    token = localStorage.getItem('token')
    
    // create cardToken
    const cardToken = yield call(() => createCardToken({
      cardElement: form.cardElement,
      cardholder: form.cardholder,
      country: form.country,
      stripe: stripe
    }))

    // create customer on stripe if user doesn't have a customerId
    const cusRes = yield call(() => axios.post(urls.members, { token: token }))

    const cusData = cusRes.data
    if (cusData.status === 'error') throw cusData

    // create payment method
    const pm = yield call(() => createPaymentMethod({
      token: token,
      customerId: cusData.data.id,
      cardToken: cardToken
    }))

    // update stripe customer with default payment method
    yield call(() => axios.put(urls.members, {
      token: token,
      customerId: cusData.data.id,
      invoice_settings: { default_payment_method: pm.id }
    }))

    // create subscription on stripe if user doesn't have a subscriptionId
    const subRes = yield call(() => axios.post(urls.subscriptions, {
      token: token,
      customerId: cusData.data.id,
      price: price
    }))

    const subData = subRes.data
    if (subData.status === 'error') throw subData

    cus = cusData.data
    sub = subData.data

    yield put(handleSuccess('create_membership_success'))
  } catch (error) {
    yield put(handleError(error.message))
  }

  // update user with customer id and subscription id
  yield call(() => axios.put(urls.users, {
    token: token,
    stripe: {
      customerId: cus.id,
      subscriptionId: sub.id
    }
  }))
}

export function* watchPmFormSubscribe() {
  yield takeLeading(actionTypes.PM_FORM_SUBSCRIBE, pmFormSubscribe)
}

export function* watchPmFormSubmit() {
  yield takeLeading(actionTypes.PM_FORM_SUBMIT, pmFormSubmit)
}
