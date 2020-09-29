import React, { useEffect } from 'react'
import { compose } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'
import {
  message,
  Card,
  Form,
  Input,
  Button,
  Layout,
  Space,
  Row,
  Col
} from 'antd'
import { GeneralLayout } from 'components/layouts'
import { LoginForm } from 'components/forms'
import useTranslation from 'lib/translations/useTranslation'
import withLocale from 'hocs/withLocale'
import withNonAuth from 'hocs/withNonAuth'

import {
  handleChange,
  handleSubmit
} from 'actions/loginFormActions'

const Login = () => {
  const dispatch = useDispatch()
  const loginForm = useSelector(state => state.loginForm)
  const { t } = useTranslation()

  useEffect(() => {
    const { success, error } = loginForm
    if (success) message.success(t(success))
    else if (error) {
      if (t(error)) message.error(t(error))
      else message.error(error)
    }
  }, [loginForm.success, loginForm.error])

  return (
    <div>
      <Head>
        <title>{t('login_title')}</title>
      </Head>
      <GeneralLayout>
        <Layout className="container">
          <Row type="flex" justify="center">
            <Col xs={24} sm={16}>
              <LoginForm
                onChange={(a, b) => dispatch(handleChange(a, b))}
                onSubmit={form => dispatch(handleSubmit(form))}
                data={loginForm}
              />
            </Col>
          </Row>
        </Layout>
      </GeneralLayout>
    </div>
  )
}

export default compose(withLocale, withNonAuth)(Login)
