import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux'
import Head from 'next/head'
import { Skeleton, Typography, Modal } from 'antd'
import { DashboardLayout } from 'components/layouts'
import { PaymentMethodForm } from 'components/forms'
import BillingSummary from 'components/BillingSummary'
import PaymentMethodList from 'components/PaymentMethodList'
import useLocalization from 'lib/localization/useLocalization'
import handleMessage from 'lib/handleMessage'
import withAuth from 'hocs/withAuth'

import { handleFetch as subFetch } from 'actions/subActions'

import {
  handleFetch as pmListFetch,
  handleMakeDefault as pmListOnMakeDefault,
  handleRemove as pmListOnRemove
} from 'actions/pmListActions'

import {
  handleChange as pmFormOnChange,
  handleSubmit as pmFormOnSubmit
} from 'actions/pmFormActions'

const { Text } = Typography

const Billing = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const sub = useSelector(state => state.sub)
  const pmList = useSelector(state => state.pmList)
  const pmForm = useSelector(state => state.pmForm)

  const [showModal, setShowModal] = useState(false)
  const { t, dir } = useLocalization()

  // fetch subscription and pmList after user is fetched
  useEffect(() => {
    if (user.auth) {
      if (!sub.sub) dispatch(subFetch(user.stripe.subscriptionId))
      if (!pmList.pms.length) dispatch(pmListFetch(user.stripe.customerId))
    }
  }, [user.auth])

  // track pmForm success & error
  useEffect(() => {
    const { success, error } = pmForm
    if (success && showModal) setShowModal(false) 
    handleMessage(success, error, t)
  }, [pmForm.success, pmForm.error])

  // track pmList success & error
  useEffect(() => {
    const { success, error } = pmList
    handleMessage(success, error, t)

    // fetch subscription again to get customer's default pm
    if (success === 'make_default_pm_success') {
      dispatch(subFetch(user.stripe.subscriptionId))
    }
    // fetch pms again to update list
    if (success === 'remove_pm_success') {
      dispatch(pmListFetch(user.stripe.customerId))
    }
  }, [pmList.success, pmList.error])

  return (
    <>
      <Head>
        <title>{t('billing_hd_title')}</title>
      </Head>
      <DashboardLayout>
        <BillingSummary
          billingMode={sub.sub
            ? `${sub.sub.plan.interval}ly`
            : ''
          }
          price={sub.sub
            ? sub.sub.plan.amount / 100
            : 0
          }
          loading={sub.loading}
        />
        <br />
        <PaymentMethodList
          onAddNew={() => setShowModal(!showModal)}
          onMakeDefault={(pmId) => dispatch(pmListOnMakeDefault(pmId))}
          onRemove={(pmId) => dispatch(pmListOnRemove(pmId))}
          defaultPm={sub.sub
            ? sub.sub.customer.invoice_settings.default_payment_method
            : ''
          }
          data={pmList}
        />
        <Modal
          visible={showModal}
          onCancel={() => setShowModal(!showModal)}
          footer={null}
          maskClosable={false}
          bodyStyle={{ padding: '0px' }}
        >
          <PaymentMethodForm
            btnTitle={t('add_card')}
            onChange={(a, b) => dispatch(pmFormOnChange(a, b))}
            onSubmit={form => dispatch(pmFormOnSubmit({
              ...form,
              cusId: user.stripe.customerId
            }))}
            data={pmForm}
          />
        </Modal>
      </DashboardLayout>
    </>
  )
}

export default compose(withLocale, withAuth)(Billing)
