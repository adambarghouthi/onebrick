import React from 'react'
import { Card, Form, Input, Button, Typography } from 'antd'
import useLocalization from 'src/lib/localization/useLocalization'

const { Title } = Typography

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}

const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
}

const ChangePwdForm = (props) => {
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
          { t('change_password') }
        </Title>
      </Card.Grid>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Form
          {...layout}
          name="changePwdForm"
          size="large"
          fields={fields}
          onValuesChange={onChange}
          onFinish={(form) => {
            delete form.confirmNewPassword
            onSubmit(form)
          }}
        >
          {
            data.reset ? null :
              <Form.Item
                label={t('current_password')}
                name="currentPassword"
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
            name="newPassword"
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
            name="confirmNewPassword"
            required={true}
            dependencies={['newPassword']}
            rules={[
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value) {
                    return Promise.reject(`${t('please_confirm')} ${t('password')}.`)
                  } else if (getFieldValue('newPassword') !== value) {
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
            >
              { t('change_password') }
            </Button>
          </Form.Item>
        </Form>
      </Card.Grid>
    </Card>
  )
}

export default ChangePwdForm
