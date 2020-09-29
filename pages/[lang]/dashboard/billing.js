import React from 'react'
import { compose } from 'redux'
import Head from 'next/head'
import { PageHeader } from 'antd'
import { DashboardLayout } from 'components/layouts'
import { LocaleContext } from 'context/LocaleContext'
import { languageDirection } from 'lib/translations/config'
import useTranslation from 'lib/translations/useTranslation'
import withLocale from 'hocs/withLocale'
import withAuth from 'hocs/withAuth'

const Billing = () => {
  const { t } = useTranslation()
  const { locale } = React.useContext(LocaleContext)
  const direction = languageDirection[locale] || 'ltr'

  return (
    <>
      <Head>
        <title>{t('billing_hd_title')}</title>
      </Head>
      <DashboardLayout>
        <PageHeader
          className="site-page-header"
          title={t('billing_pg_title')}
        />
      </DashboardLayout>
    </>
  )
}

export default compose(withLocale, withAuth)(Billing)
