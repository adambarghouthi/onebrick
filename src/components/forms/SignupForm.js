import React, { useEffect } from 'react'
import { message, Card, Form, Input, Button, Typography } from 'antd'
import Link from 'next/link'

import useLocalization from 'src/lib/localization/useLocalization'
import validateEmail from 'lib/validateEmail'

const { Title, Text } = Typography

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

const SignupForm = (props) => {
  const { onChange, onSubmit, data } = props
  const { loading, ...rest } = data
  const { t } = useLocalization()

  const fields = Object.keys(rest).map(key => ({
    name: [key],
    value: rest[key]
  }))

  return (
    <Card>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Title className="mb-0" level={5}>
          { t('create_new_account') }
        </Title>
      </Card.Grid>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Form
          {...layout}
          name="signupForm"
          size="large"
          fields={fields}
          onValuesChange={onChange}
          onFinish={(form) => {
            delete form.confirmPassword
            onSubmit(form)
          }}
        >
          <Form.Item
            label={t('email')}
            name="email"
            required={true}
            rules={[
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!validateEmail(value)) {
                    return Promise.reject(t('email_invalid_error'))
                  } else if (!value.length) {
                    return Promise.reject(`${t('please_input')} ${t('email')}.`)
                  }
                  return Promise.resolve()
                }
              })
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={t('password')}
            name="password"
            required={true}
            rules={[
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (value.length < 8) {
                    return Promise.reject(t('password_length_error'))
                  } else if (!value.length) {
                    return Promise.reject(`${t('please_input')} ${t('password')}.`)
                  }
                  return Promise.resolve()
                }
              })
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label={`${t('confirm')} ${t('password')}`}
            name="confirmPassword"
            required={true}
            dependencies={['password']}
            rules={[
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value) {
                    return Promise.reject(`${t('please_confirm')} ${t('password')}.`)
                  } else if (getFieldValue('password') !== value) {
                    return Promise.reject(t('password_match_error'))
                  }
                  return Promise.resolve()
                }
              })
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={rest.success}
            >
              { t('signup') }
            </Button>
          </Form.Item>
        </Form>
      </Card.Grid>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Card.Meta
          description={
            <>
              { t('owns_an_account') }
              &nbsp;
              <Link href="/login">
                <a>{ t('login') }</a>
              </Link>
            </>
          }
        />
      </Card.Grid>
    </Card>
  )
}

SignupForm.defaultProps = {
  data: {},
  onChange: () => {}
}

export default SignupForm
