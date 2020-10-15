import React, { useEffect, useState } from 'react'
import { Card, Typography, Space, Divider, Button, Checkbox, Skeleton } from 'antd'
import { CheckCircleOutlined, HeartTwoTone } from '@ant-design/icons'
import useTranslation from 'lib/translations/useTranslation'

const { Title, Text } = Typography

const gridStyle = {
  width: '50%',
}

const MembershipList = (props) => {
  const {
    onSelect,
    selected,
    header,
    data
  } = props

  const { t } = useTranslation()

  const isSelected = (index) => {
    if (selected) {
      if (data.mems.length) {
        return data.mems[index].id === selected
      }
    }

    return false
  }

  return (
    <Card>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Title level={5}>
          { t('psf_membership') }
        </Title>
        <p className="text-grey mb-0">
          { t('psf_membership_meta') }
        </p>
        {
          header === 'simple'
            ? null
            : <div className="mt-5">
                <Space direction="vertical">
                  <p className="mb-3">
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    { t('cancel_or_edit') }
                  </p>
                  <p className="mb-3">
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    { t('view_activity') }
                  </p>
                  <p className="mb-3">
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    { t('receive_updates') }
                  </p>
                </Space>
              </div>
        }
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Skeleton loading={data.loading} active>
          <Title level={5} strong>
            { `${t('support')} ${t('monthly')}` }
          </Title>
          <Title className="mt-5 mb-3" level={3}>
            ${
              data.mems.length
                ? data.mems[0].unit_amount / 100
                : null
            }
          </Title>
          <Text type="secondary">{ t('per_month') }</Text>
          <Divider />
          <Button
            type="primary"
            onClick={() => onSelect(0)}
            disabled={isSelected(0)}
          >
            {
              isSelected(0)
                ? t('selected')
                : t('select')
            }
          </Button>
        </Skeleton>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Skeleton loading={data.loading} active>
          <Title level={5} strong>
            { `${t('support')} ${t('yearly')}` }
          </Title>
          <Title className="mt-5 mb-3" level={3}>
            ${
              data.mems.length
                ? (data.mems[1].unit_amount / 100)
                : null
            }
          </Title>
          <Text type="secondary">{ t('per_year') }</Text>
          <Divider />
          <Button
            type="primary"
            onClick={() => onSelect(1)}
            disabled={isSelected(1)}
          >
            {
              isSelected(1)
                ? t('selected')
                : t('select')
            }
          </Button>
        </Skeleton>
      </Card.Grid>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Card.Meta
          description={t('currency_disclaimer')}
        />
      </Card.Grid>
    </Card>
  )
}

MembershipList.defaultProps = {
  header: 'default',
}

export default MembershipList
