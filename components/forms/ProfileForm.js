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

const ProfileForm = (props) => {
  const { t } = useTranslation()

  return (
    <Card>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Title className="mb-0" level={4}>
          { t('profile') }
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
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              { t('save') }
            </Button>
          </Form.Item>
        </Form>
      </Card.Grid>
    </Card>
  )
}

export default ProfileForm
