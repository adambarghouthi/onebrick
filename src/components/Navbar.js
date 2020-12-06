import React from 'react'
import { Layout, Row, Col, Button, Menu, Avatar, Dropdown, Typography } from 'antd';
import {
  LogoutOutlined,
  UserOutlined,
  BookOutlined,
  CreditCardOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/dist/client/router'
import Dimensions from 'react-dimensions'
import useLocalization from 'lib/localization/useLocalization'
import LocaleSwitch from 'components/LocaleSwitch';

import { handleLogout } from 'actions/userActions'

const { Header } = Layout
const { Title } = Typography

const Navbar = (props) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const { t, dir } = useLocalization()
  const router = useRouter()

  const dropdownOverlay = (
    <Menu
      onClick={(item) => {
        if (item.key === 'logout') dispatch(handleLogout());
        else router.replace(`/dashboard/${item.key}`);
      }}>
      <Menu.Item key="profile">
        <UserOutlined /> { t('profile_pg_title') }
      </Menu.Item>
      <Menu.Item key="billing">
        <CreditCardOutlined /> { t('billing_pg_title') }
      </Menu.Item>
      <Menu.Item key="membership">
        <BookOutlined /> { t('membership_pg_title') }
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined /> { t('logout') }
      </Menu.Item>
    </Menu>
  )

  return (
    <Header theme="light">
      <Row wrap={false}>
        <Col flex="0 0 auto">
          <Title className="mb-0">
            <Link href="/">
              <a>
                <img
                  className="nav-logo"
                  src={`/assets/logo-nav-${
                    props.containerWidth > 575
                      ? 'lg'
                      : 'sm'
                  }.png`} />
              </a>
            </Link>
          </Title>
        </Col>
        <Col className="menu-row" flex="1 1 auto">
          <Menu mode="horizontal" direction={dir}>
            {!user.auth && (
              <>
                <Menu.Item>
                  <Button size="large" type="primary">
                    <Link href="/signup">
                      <a>
                        { t('support') }&nbsp;&nbsp;
                        <ThunderboltOutlined style={{ margin: '0' }} />
                      </a>
                    </Link>
                  </Button>
                </Menu.Item>
                <Menu.Item>
                  <Button size="large" type="text">
                    <Link href="/login">
                      <a>{ t('login') }</a>
                    </Link>
                  </Button>
                </Menu.Item>
              </>
            )}
            {user.auth && (
              <Menu.Item>
                <Dropdown
                  overlay={dropdownOverlay}
                  arrow={false}
                  placement={
                    dir === 'ltr'
                      ? 'bottomRight'
                      : 'bottomLeft'
                  }
                >
                  <Avatar style={{ backgroundColor: '#87d068' }} size="large">
                    A
                  </Avatar>
                </Dropdown>
              </Menu.Item>
            )}
            <Menu.Item>
              <LocaleSwitch />
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  )
}

export default Dimensions()(Navbar);
