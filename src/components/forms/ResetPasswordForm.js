import React from 'react'
import { Card, Form, Input, Button, Typography } from 'antd'
import useLocalization from 'lib/localization/useLocalization'

const { Title } = Typography

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}

const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
}

const ResetPasswordForm = (props) => {
  const { t } = useLocalization()

  return (
    <Card>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Title className="mb-0" level={5}>
          { `${t('reset')} ${t('password')}` }
        </Title>
      </Card.Grid>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          size="large"
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

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              { t('reset') }
            </Button>
          </Form.Item>
        </Form>
      </Card.Grid>
    </Card>
  )
}

export default ResetPasswordForm
