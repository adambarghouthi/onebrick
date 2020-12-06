import React from 'react'
import { Layout, Menu, Button, Space, Row, Col, ConfigProvider } from 'antd';
import { ProfileOutlined, CreditCardOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import Header from '../Header'
import useLocalization from 'lib/localization/useLocalization'
import LocaleSwitch from '../LocaleSwitch'

const { SubMenu } = Menu;

const DashboardLayout = (props) => {
  const { Footer, Content, Sider } = Layout;
  const { t, dir } = useLocalization()
  const router = useRouter()

  let path

  if (router.pathname.includes('profile')) {
    path = 'profile'
  } else if (router.pathname.includes('billing')) {
    path = 'billing'
  } else if (router.pathname.includes('membership')) {
    path = 'membership'
  }

  return (
    <ConfigProvider direction={direction}>
      <Layout>
        <Header />
        <Layout className="container">
          <Row>
            <Col xs={24} sm={6}>
              <Menu
                selectedKeys={[path]}
                mode="vertical">
                <Menu.Item
                  key="profile"
                  icon={<ProfileOutlined />}>
                  <Link href="/[lang]/dashboard/profile" as={`/${locale}/dashboard/profile`}>
                    <a>{ t('profile_pg_title') }</a>
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="billing"
                  icon={<CreditCardOutlined />}>
                  <Link href="/[lang]/dashboard/billing" as={`/${locale}/dashboard/billing`}>
                    <a>{ t('billing_pg_title') }</a>
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="membership"
                  icon={<SettingOutlined />}>
                  <Link href="/[lang]/dashboard/membership" as={`/${locale}/dashboard/membership`}>
                    <a>{ t('membership_pg_title') }</a>
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col xs={24} sm={18}>
              <Content className={direction === 'ltr'
                ? 'ml-3'
                : 'mr-3'
              }>
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
