import React from 'react';
import { List, Typography, Button, Dropdown, Menu, Tag } from 'antd';
import { PlusOutlined, MoreOutlined } from '@ant-design/icons'
import { LocaleContext } from 'context/LocaleContext'
import { languageDirection } from 'lib/translations/config'
import useTranslation from 'lib/translations/useTranslation'

const { Title } = Typography

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
]

const PaymentMethodList = (props) => {
  const { locale } = React.useContext(LocaleContext)
  const direction = languageDirection[locale] || 'ltr'
  const { t } = useTranslation()

  const { loading, fetchPaymentMethods } = props
  const [showForm, setShowForm] = React.useState(false)

  const overlay = (
    <Menu onClick={() => {}}>
      <Menu.Item key="1">
        { t('set_default') }
      </Menu.Item>
      <Menu.Item key="2">
        { t('remove') }
      </Menu.Item>
    </Menu>
  )

  return (
    <List
      header={<Title className="mb-0" level={4}>{t('payment_method_list')}</Title>}
      footer={<Button type="link"><PlusOutlined /> {t('add_new_payment_method')}</Button>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item
          actions={[
            <Dropdown
              overlay={overlay}
              placement={direction === 'ltr' ? 'bottomRight' : 'bottomLeft'}
            >
              <Button>
                <MoreOutlined />
              </Button>
            </Dropdown>
          ]}
        >
          <List.Item.Meta
            avatar={
              <img src="/assets/visa.png" height="45px" />
            }
            title={<div>Visa **** 1234&nbsp;&nbsp;&nbsp;<Tag>{t('default')}</Tag></div>}
            description={`${t('expiration_date')}: 20/12/2020`}
          />
        </List.Item>
      )}
    />
  )
}

export default PaymentMethodList
