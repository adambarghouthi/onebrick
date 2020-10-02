import React from 'react'
import { Card, Form, Input, Button, Typography } from 'antd'
import useTranslation from 'lib/translations/useTranslation'

const { Title } = Typography

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}

const tailLayout = {
  wrapperCol: {
    sm: { offset: 0, span: 24 },
    md: { offset: 6, span: 18 }
  }
}

const LoginForm = (props) => {
  const { onChange, onSubmit, data } = props
  const { loading, ...rest } = data
  const { t } = useTranslation()

  const fields = Object.keys(rest).map(key => ({
    name: [key],
    value: rest[key]
  }))

  return (
    <Card>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Title className="mb-0" level={4}>
          { t('login') }
        </Title>
      </Card.Grid>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Form
          {...layout}
          name="loginForm"
          size="large"
          fields={fields}
          onValuesChange={onChange}
          onFinish={(form) => onSubmit(form)}
        >
          <Form.Item
            label={t('email')}
            name="email"
            rules={[{
              required: true,
              message: `${t('please_input')} ${t('email')}.`
            }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={t('password')}
            name="password"
            rules={[{
              required: true,
              message: `${t('please_input')} ${t('password')}.`
            }]}
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
              { t('login') }
            </Button>
          </Form.Item>
        </Form>
      </Card.Grid>
    </Card>
  )
}

LoginForm.defaultProps = {
  data: {},
  onChange: () => {}
}

export default LoginForm
