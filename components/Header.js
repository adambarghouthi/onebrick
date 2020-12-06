import React from 'react'
import { Layout, Space, Button, Menu, Avatar, Dropdown } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/dist/client/router'
import Dimensions from 'react-dimensions'
import useLocalization from 'lib/localization/useLocalization'

import { handleLogout } from 'actions/userActions'

const Header = (props) => {
  const { Header } = Layout
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const { t, dir } = useLocalization()
  const router = useRouter()

  const dropdownOverlay = (
    <Menu
      onClick={(item) => {
        switch(item.key) {
          case 'logout':
            dispatch(handleLogout())
            break
          case 'dashboard':
            router.replace('/[lang]/dashboard/profile', `/${locale}/dashboard/profile`)
            break
          default:
            break
        }
      }}>
      <Menu.Item key="dashboard">
        <UserOutlined /> { t('dashboard') }
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined /> { t('logout') }
      </Menu.Item>
    </Menu>
  )

  return (
    <Header theme="light">
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
      <Menu
        mode="horizontal"
        style={{
          float: dir === 'ltr'
            ? 'right'
            : 'left'
        }}
      >
      {
        user.auth
          ? (
              <>
                <Dropdown
                  overlay={dropdownOverlay}
                  arrow={false}
                  placement={
                    dir === 'ltr'
                      ? 'bottomRight'
                      : 'bottomLeft'
                  }
                >
                  <Avatar size="middle" icon={<UserOutlined />} />
                </Dropdown>
              </>
            )
          : (
              <>
                <Button type="text">
                  <Link href="/login">
                    <a>{ t('login') }</a>
                  </Link>
                </Button>
                <Button type="primary">
                  <Link href="/signup">
                    <a>{ t('support') }</a>
                  </Link>
                </Button>
              </>
            )
      }
      </Menu>
    </Header>
  )
}

export default Dimensions()(Header)
