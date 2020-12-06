import React from 'react'
import { Card, Typography, Space, Form, Input, Button, Select } from 'antd'
import { LockFilled } from '@ant-design/icons'
import { loadStripe } from '@stripe/stripe-js'
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { useRouter } from 'next/dist/client/router'
import countries from 'lib/countries'
import useLocalization from 'src/lib/localization/useLocalization'

const { Title } = Typography

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK)

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}

const tailLayout = {
  wrapperCol: {
    sm: { offset: 0, span: 24 },
    md: { offset: 6, span: 18 }
  }
}

const Body = (props) => {
  const { onSubmit, onChange, btnTitle, bordered, data } = props
  const { loading, ...rest } = data
  const stripe = useStripe()
  const elements = useElements()
  const { t } = useLocalization()

  const fields = Object.keys(rest).map(key => ({
    name: [key],
    value: rest[key]
  }))

  return (
    <Card>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Title level={5}>
          { t('payment_method') }
        </Title>
        <Space size={5}>
          <img src="/assets/visa.png" width="40px" />
          <img src="/assets/mastercard.png" width="40px" />
          <img src="/assets/amex.png" width="40px" />
          <img src="/assets/discover.png" width="40px" />
        </Space>
      </Card.Grid>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          fields={fields}
          size="large"
          onValuesChange={onChange}
          onFinish={async (form) => {
            form.cardElement = elements.getElement(CardElement)
            form.stripe = stripe
            onSubmit(form)
          }}
        >

          <Form.Item
            label={t('cardholder')}
            name="cardholder"
            rules={[{
              required: true,
              message: t('cardholder_error')
            }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={t('country')}
            name="country"
            rules={[{
              required: true,
              message: t('country_error')
            }]}
          >
            <Select
              allowClear
              showSearch
              optionFilterProp="children"
            >
              {
                countries.map((country) => (
                  <Select.Option
                    key={country.code}
                    value={country.code}
                  >
                    { country.name }
                  </Select.Option>
                ))
              }
            </Select>
          </Form.Item>

          <Form.Item
            label={t('credit_card')}
            name="cardElement"
          >
            <CardElement />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={!stripe}
              loading={loading}>
              <LockFilled /> { btnTitle }
            </Button>
          </Form.Item>
        </Form>
      </Card.Grid>
    </Card>
  )
}

const PaymentMethodForm = (props) => {
  const { locale } = useRouter()

  return (
    <Elements key={locale} locale={locale} stripe={stripePromise}>
      <Body {...props} />
    </Elements>
  )
}

PaymentMethodForm.defaultProps = {
  bordered: false
}

export default PaymentMethodForm
