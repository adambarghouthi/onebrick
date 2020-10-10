import React, { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux'
import Head from 'next/head'
import { PageHeader } from 'antd'
import { DashboardLayout } from 'components/layouts'
import MembershipSettings from 'components/MembershipSettings'
import { LocaleContext } from 'context/LocaleContext'
import { languageDirection } from 'lib/translations/config'
import useTranslation from 'lib/translations/useTranslation'
import withLocale from 'hocs/withLocale'
import withAuth from 'hocs/withAuth'

import {
  handleFetch as subFetch,
  handleEdit as onSubEdit
} from 'actions/subActions'

const Membership = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const sub = useSelector(state => state.sub)

  const { t } = useTranslation()
  const { locale } = useContext(LocaleContext)
  const direction = languageDirection[locale] || 'ltr'

  // fetch subscription and pmList after user is fetched
  useEffect(() => {
    if (user.auth) {
      if (!sub.sub) {
        dispatch(subFetch(user.stripe.subscriptionId))
      }
    }
  }, [user.auth])

  return (
    <>
      <Head>
        <title>{t('membership_hd_title')}</title>
      </Head>
      <DashboardLayout>
        <MembershipSettings
          onEdit={params => dispatch(onSubEdit(params))}
          onProrate={() => {}}
          data={sub}
        />
      </DashboardLayout>
    </>
  )
}

export default compose(withLocale, withAuth)(Membership)
