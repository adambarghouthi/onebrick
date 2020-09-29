import React from 'react'
import { Card, Form, Input, Button, Typography } from 'antd'
import useTranslation from 'lib/translations/useTranslation'

const { Title } = Typography

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}

const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
}

const ChangePasswordForm = (props) => {
  const { reset } = props
  const { t } = useTranslation()

  return (
    <Card>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Title className="mb-0" level={4}>
          { t('change_password') }
        </Title>
      </Card.Grid>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          size="large"
        >
          {
            reset ? null :
              <Form.Item
                label={t('current_password')}
                name="current_password"
                rules={[{
                  required: true,
                  message: `${t('please_input')} ${t('current_password')}.`
                }]}
              >
                <Input.Password />
              </Form.Item>
          }
          <Form.Item
            label={t('new_password')}
            name="new_password"
            rules={[{
              required: true,
              message: `${t('please_input')} ${t('password')}.`
            }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label={`${t('confirm')} ${t('password')}`}
            name="confirm_new_password"
            rules={[{
              required: true,
              message: `${t('please_confirm')} ${t('password')}.`
            }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              { t('change_password') }
            </Button>
          </Form.Item>
        </Form>
      </Card.Grid>
    </Card>
  )
}

export default ChangePasswordForm
