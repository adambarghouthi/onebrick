import React, { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import {
  message,
  Steps,
  Row,
  Col,
  Layout,
  Button,
  Result,
  Card
} from 'antd'
import {
  LoginOutlined,
  BookOutlined,
  CreditCardOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons'
import { GeneralLayout } from 'components/layouts'
import { PaymentMethodForm, SignupForm } from 'components/forms'
import BillingSummary from 'components/BillingSummary'
import MembershipList from 'components/MembershipList'
import { LocaleContext } from 'context/LocaleContext'
import { languageDirection } from 'lib/translations/config'
import useTranslation from 'lib/translations/useTranslation'
import withLocale from 'hocs/withLocale'
import withNonAuth from 'hocs/withNonAuth'

import {
  handleChange as signupFormOnChange,
  handleSubmit as signupFormOnSubmit
} from 'actions/signupFormActions'

import {
  handleFetch as memListOnFetch,
  handleSelect as memListOnSelect
} from 'actions/memListActions'

import {
  handleChange as pmFormOnChange,
  handleSubscribe as pmFormOnSubscribe
} from 'actions/pmFormActions'

const { Step } = Steps

const Signup = () => {
  const dispatch = useDispatch()
  const signupForm = useSelector(state => state.signupForm)
  const user = useSelector(state => state.user)
  const memList = useSelector(state => state.memList)
  const pmForm = useSelector(state => state.pmForm)

  const [step, setStep] = useState(0)
  const { locale } = useContext(LocaleContext)
  const router = useRouter()
  const direction = languageDirection[locale] || 'ltr'
  const { t } = useTranslation()

  // track user authorization
  useEffect(() => {
    if (user.auth) setStep(1)
  }, [user.auth])

  // track memList selected
  useEffect(() => {
    const { selected } = memList
    if (selected !== null) setStep(2)
  }, [memList.selected])

  // track signupForm success & error
  useEffect(() => {
    const { success, error } = signupForm
    if (success) message.success(t(success))
    else if (error) {
      if (t(error)) message.error(t(error))
      else message.error(error)
    }
  }, [signupForm.success, signupForm.error])

  // track memList error
  useEffect(() => {
    const { error } = memList
    if (error) {
      if (t(error)) message.error(t(error))
      else message.error(error)
    }
  }, [memList.error])

  // track pmForm success & error
  useEffect(() => {
    const { success, error } = pmForm
    if (success) {
      message.success(t(success))
    } else if (error) {
      if (t(error)) message.error(t(error))
      else message.error(error)
    }
  }, [pmForm.succes, pmForm.error])

  const renderStep = (step) => {
    switch (step) {
      case 0:
        return (
          <SignupForm
            onChange={(a, b) => dispatch(signupFormOnChange(a, b))}
            onSubmit={form => dispatch(signupFormOnSubmit(form))}
            data={signupForm}
          />
        )
      case 1:
        return (
          <MembershipList
            onFetch={product => dispatch(memListOnFetch(product))}
            onSelect={selected => dispatch(memListOnSelect(selected))}
            data={memList}
          />
        )
      case 2:
        return (
          <div className="mb-3">
            <BillingSummary
              billingMode={
                memList.mems[memList.selected].recurring.interval === 'year'
                  ? 'yearly'
                  : 'monthly'
              }
              price={memList.mems[memList.selected].unit_amount / 100} />
            <br />
            <PaymentMethodForm
              btnTitle={t('support_now')}
              onChange={(a, b) => dispatch(pmFormOnChange(a, b))}
              onSubmit={form => dispatch(pmFormOnSubscribe({
                ...form,
                price: memList.mems[memList.selected].id
              }))}
              data={pmForm} />
          </div>
        )
      default:
        return null
    }
  }

  const renderWelcome = () => (
    <Card>
      <Result
        status="success"
        title={t('thank_you')}
        subTitle={t('welcome')}
        extra={[
          <Button
            type="primary"
            key="dashboard"
            href={`/${locale}/dashboard/profile`}
          >
            { t('view_dashboard') }
          </Button>
        ]}
      />
    </Card>
  )

  return (
    <div>
      <Head>
        <title>{t('signup_hd_title')}</title>
      </Head>
      <GeneralLayout>
        <Layout className="container">
          <Row type="flex" justify="center">
            <Col xs={24} sm={16}>
              <Steps current={step}>
                <Step title={t('signup')} icon={<LoginOutlined />} />
                <Step title={t('membership')} icon={<BookOutlined />} />
                <Step title={t('payment')} icon={<CreditCardOutlined />} />
              </Steps>
              <br />
              {
                pmForm.success
                  ? renderWelcome()
                  : renderStep(step)
              }
              {
                step !== 2 || pmForm.success
                  ? null
                  : (
                    <Button
                      icon={
                        direction === 'ltr'
                          ? <ArrowLeftOutlined />
                          : <ArrowRightOutlined />
                      }
                      onClick={() => {
                        setStep(step - 1)
                        dispatch(memListOnSelect(null))
                      }}
                    >
                      {t('back')}
                    </Button>
                  )
              }
            </Col>
          </Row>
        </Layout>
      </GeneralLayout>
    </div>
  )
}

export default compose(withLocale, withNonAuth)(Signup)
