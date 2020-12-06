import React from 'react'
import { Card, Form, Input, Button, Typography } from 'antd'
import useLocalization from 'src/lib/localization/useLocalization'
import validateEmail from 'lib/validateEmail'

const { Title } = Typography

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

const ProfileForm = (props) => {
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
          { t('profile') }
        </Title>
      </Card.Grid>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Form
          {...layout}
          name="profileForm"
          size="large"
          fields={fields}
          onValuesChange={onChange}
          onFinish={(form) => {
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

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              { t('save') }
            </Button>
          </Form.Item>
        </Form>
      </Card.Grid>
    </Card>
  )
}

ProfileForm.defaultProps = {
  data: {},
  onChange: () => {}
}

export default ProfileForm
