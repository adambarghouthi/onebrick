import React from 'react';
import {
  List,
  Typography,
  Button,
  Dropdown,
  Menu,
  Tag,
  Skeleton,
  Modal
} from 'antd';
import {
  PlusOutlined,
  MoreOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'
import { LocaleContext } from 'context/LocaleContext'
import { languageDirection } from 'lib/translations/config'
import useTranslation from 'lib/translations/useTranslation'

const { Title, Text } = Typography

const PaymentMethodList = (props) => {
  const {
    onFetch,
    onAddNew,
    onMakeDefault,
    onRemove,
    defaultPm,
    data
  } = props

  const { locale } = React.useContext(LocaleContext)
  const direction = languageDirection[locale] || 'ltr'
  const { t } = useTranslation()
  const [modal, contextHolder] = Modal.useModal()

  const confirmRemove = (pmId) => {
    const pm = data.pms.filter(pm => pm.id === pmId)[0]

    modal.confirm({
      title: t('confirm_remove'),
      icon: <ExclamationCircleOutlined />,
      content: `**** ${pm.card.last4}`,
      okText: t('yes'),
      cancelText: t('no'),
      maskClosable: true,
      onOk: () => onRemove(pmId)
    })
  }

  const overlay = (pmId, isDefault) => (
    <Menu onClick={(item) => {
      if (item.key === 'makeDefault') {
        onMakeDefault(pmId)
      } else if (item.key === 'remove') {
        confirmRemove(pmId)
      }
    }}>
      {
        isDefault
          ? null
          : <Menu.Item key="makeDefault">
              { t('make_default') }
            </Menu.Item> 
      }
      <Menu.Item key="remove">
        { t('remove') }
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <List
        bordered
        header={
          <Title
            className="my-2"
            level={5}>
            { t('payment_methods') }
          </Title>
        }
        footer={
          <Button
            type="link"
            icon={<PlusOutlined />}
            onClick={() => onAddNew()}>
            { t('add_new_payment_method') }
          </Button>
        }
        dataSource={data.pms}
        locale={{ emptyText: t('no_data') }}
        size="large"
        renderItem={(pm, index) => (
          <List.Item
            actions={[
              <Dropdown
                overlay={overlay(pm.id, pm.id === defaultPm)}
                placement={direction === 'ltr'
                  ? 'bottomRight'
                  : 'bottomLeft'
                }
              >
                <Button icon={<MoreOutlined />} />
              </Dropdown>
            ]}
          >
            <Skeleton
              loading={data.loading}
              paragraph={{ rows: 0 }}
              avatar={{ shape: 'square' }}
              active
            >
              <List.Item.Meta
                avatar={
                  <img src={`/assets/${pm.card.brand}.png`} height="45px" />
                }
                title={
                  <div>
                    <Text>
                      {
                        pm.card.brand.charAt(0).toUpperCase()
                        + pm.card.brand.slice(1)
                      }&nbsp;
                    </Text>
                    <Text>
                      **** { pm.card.last4 }
                      &nbsp;&nbsp;&nbsp;
                    </Text>
                    {
                      pm.id === defaultPm
                        ? <Tag>{ t('default') }</Tag>
                        : null
                    }
                  </div>
                }
                description={
                  `${t('expiration_date')}: ${('0' + pm.card.exp_month).slice(-2)}/${pm.card.exp_year}`
                }
              />
            </Skeleton>
          </List.Item>
        )}
      />
      { contextHolder }
    </>
  )
}

export default PaymentMethodList
