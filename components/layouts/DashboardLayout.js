import React from 'react'
import { Layout, Menu, Button, Space, Row, Col, ConfigProvider } from 'antd';
import { ProfileOutlined, CreditCardOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link'
import Header from '../Header'
import { LocaleContext } from 'context/LocaleContext'
import { languageDirection } from 'lib/translations/config'
import LocaleSwitch from '../LocaleSwitch'

const { SubMenu } = Menu;

const DashboardLayout = (props) => {
  const { Footer, Content, Sider } = Layout;
  const { locale } = React.useContext(LocaleContext)
  const direction = languageDirection[locale] || 'ltr'

  return (
    <ConfigProvider direction={direction}>
      <Layout>
        <Header />
        <Layout className="container">
          <Row>
            <Col xs={24} sm={6}>
              <Menu
                selectedKeys={['profile']}
                mode="vertical">
                <Menu.Item
                  key="profile"
                  icon={<ProfileOutlined />}>
                  <Link href="/[lang]/dashboard/profile" as={`/${locale}/dashboard/profile`}>
                    <a>Profile</a>
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="billing"
                  icon={<CreditCardOutlined />}>
                  <Link href="/[lang]/dashboard/billing" as={`/${locale}/dashboard/billing`}>
                    <a>Billing</a>
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="membership"
                  icon={<SettingOutlined />}>
                  <Link href="/[lang]/dashboard/membership" as={`/${locale}/dashboard/membership`}>
                    <a>Membership</a>
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col xs={24} sm={18}>
              <Content>
                { props.children }
              </Content>
            </Col>
          </Row>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>
          <LocaleSwitch />
        </Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default DashboardLayout
