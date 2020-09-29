import React from 'react'
import Head from 'next/head'
import { ConfigProvider } from 'antd'
import { compose } from 'redux'
import { GeneralLayout } from 'components/layouts'
import { LocaleContext } from 'context/LocaleContext'
import { languageDirection } from 'lib/translations/config'
import useTranslation from 'lib/translations/useTranslation'
import withNonAuth from 'hocs/withNonAuth'
import withLocale from 'hocs/withLocale'

const Index = () => {
  const { t } = useTranslation()
  const { locale } = React.useContext(LocaleContext)
  const direction = languageDirection[locale] || 'ltr'

  return (
    <>
      <Head>
        <title>{t('home_hd_title')}</title>
      </Head>
      <ConfigProvider direction={direction}>
        <GeneralLayout>
          Home
        </GeneralLayout>
      </ConfigProvider>
    </>
  )
}

export default compose(withLocale, withNonAuth)(Index)
