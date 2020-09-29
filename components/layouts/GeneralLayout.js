import React from 'react'
import { Layout, ConfigProvider } from 'antd'
import Header from '../Header'
import LocaleSwitch from '../LocaleSwitch'
import { LocaleContext } from 'context/LocaleContext'
import { languageDirection } from 'lib/translations/config'

const GeneralLayout = (props) => {
  const { Footer, Content } = Layout;
  const { locale } = React.useContext(LocaleContext)
  const direction = languageDirection[locale] || 'ltr'

  return (
    <ConfigProvider direction={direction}>
      <Layout>
        <Header />
        <Content>
          { props.children }
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <LocaleSwitch />
        </Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default GeneralLayout
