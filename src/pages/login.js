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
import { GeneralLayout } from 'src/components/layouts'
import { LoginForm } from 'src/components/forms'
import useLocalization from 'src/lib/localization/useLocalization'
import handleMessage from 'src/lib/handleMessage'
import withNonAuth from 'src/hocs/withNonAuth'

import {
  handleChange,
  handleSubmit
} from 'src/actions/loginFormActions'

const Login = () => {
  const dispatch = useDispatch()
  const loginForm = useSelector(state => state.loginForm)
  const { t } = useLocalization()

  useEffect(() => {
    const { success, error } = loginForm
    handleMessage(success, error, t)
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

export default withNonAuth(Login)
