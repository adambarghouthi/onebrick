import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'
import { PageHeader } from 'antd'
import { DashboardLayout } from 'src/components/layouts'
import MembershipSettings from 'src/components/MembershipSettings'
import MembershipList from 'src/components/MembershipList'
import useLocalization from 'src/lib/localization/useLocalization'
import handleMessage from 'src/lib/handleMessage'
import withAuth from 'src/hocs/withAuth'

import {
  handleFetch as subFetch,
  handleEdit as subOnEdit
} from 'src/actions/subActions'

import {
  handleFetch as memListFetch
} from 'src/actions/memListActions'

const prodId = process.env.NEXT_PUBLIC_PROD_ID

const Membership = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const sub = useSelector(state => state.sub)
  const memList = useSelector(state => state.memList)

  const { t, dir } = useLocalization()

  // fetch subscription and memList after user is fetched
  useEffect(() => {
    if (user.auth) {
      if (!sub.sub) dispatch(subFetch(user.stripe.subscriptionId))
      if (!memList.mems.length) dispatch(memListFetch(prodId))
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

export default withAuth(Membership)
