import React, { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux'
import Head from 'next/head'
import { PageHeader } from 'antd'
import { DashboardLayout } from 'components/layouts'
import MembershipSettings from 'components/MembershipSettings'
import MembershipList from 'components/MembershipList'
import { LocaleContext } from 'context/LocaleContext'
import { languageDirection } from 'lib/translations/config'
import useTranslation from 'lib/translations/useTranslation'
import handleMessage from 'lib/handleMessage'
import withLocale from 'hocs/withLocale'
import withAuth from 'hocs/withAuth'

import {
  handleFetch as subFetch,
  handleEdit as subOnEdit
} from 'actions/subActions'

import {
  handleFetch as memListFetch
} from 'actions/memListActions'

const prodId = process.env.NEXT_PUBLIC_PROD_ID

const Membership = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const sub = useSelector(state => state.sub)
  const memList = useSelector(state => state.memList)

  const { t } = useTranslation()
  const { locale } = useContext(LocaleContext)
  const direction = languageDirection[locale] || 'ltr'

  // fetch subscription and memList after user is fetched
  useEffect(() => {
    if (user.auth) {
      dispatch(subFetch(user.stripe.subscriptionId))
      dispatch(memListFetch(prodId))
    }
  }, [user.auth])

  // track sub success & error
  useEffect(() => {
    const { success, error } = sub
    if (success === 'fetch_sub_success') return
    handleMessage(success, error, t)
  }, [sub.success, sub.error])

  return (
    <>
      <Head>
        <title>{t('membership_hd_title')}</title>
      </Head>
      <DashboardLayout>
        <MembershipList
          header="simple"
          selected={sub.sub
            ? sub.sub.plan.id
            : null
          }
          onFetch={product => dispatch(memListOnFetch(product))}
          onSelect={selected => dispatch(subOnEdit({
            subId: sub.sub.id,
            items: [{
              id: sub.sub.items.data[0].id,
              price: memList.mems[selected].id,
            }],
            proration_behavior: 'none',
          }))}
          data={{
            ...memList,
            loading: memList.loading || sub.loading
          }}
        />
        <br />
        <MembershipSettings
          onEdit={params => dispatch(subOnEdit(params))}
          data={sub}
        />
      </DashboardLayout>
    </>
  )
}

export default compose(withLocale, withAuth)(Membership)
