import React, { useEffect, useState } from 'react'
import { Card, Typography, Space, Divider, Button, Checkbox, Skeleton } from 'antd'
import { CheckCircleOutlined, HeartTwoTone } from '@ant-design/icons'
import useTranslation from 'lib/translations/useTranslation'

const { Title, Text } = Typography

const gridStyle = {
  width: '50%',
}

const prodId = process.env.NEXT_PUBLIC_PROD_ID

const MembershipList = (props) => {
  const { onFetch, onSelect, data } = props
  const [fetched, setFetched] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    if (!fetched) {
      onFetch(prodId)
      setFetched(true)
    }
  })

  return (
    <Card>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Title level={4}>
          { t('psf_membership') }
        </Title>
        <Card.Meta
          description={t('psf_membership_meta')}
        />
        <br />
        <Space direction="vertical">
          <Text><CheckCircleOutlined /> { t('cancel_or_edit') }</Text>
          <Text><CheckCircleOutlined /> { t('view_activity') }</Text>
          <Text><CheckCircleOutlined /> { t('receive_updates') }</Text>
        </Space>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Skeleton loading={data.loading} active>
          <Title level={4}>{ `${t('support')} ${t('monthly')}` }</Title>
          <Title className="my-0" level={2}>
            ${data.mems.length ? data.mems[0].unit_amount / 100 : null}
          </Title>
          <Text type="secondary">{ t('per_month') }</Text>
          <Divider />
          <Button
            type="primary"
            onClick={() => onSelect(0)}
          >
            { t('select') }
          </Button>
        </Skeleton>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Skeleton loading={data.loading} active>
          <Title level={4}>{ `${t('support')} ${t('yearly')}` }</Title>
          <Title className="my-0" level={2}>
            ${data.mems.length ? (data.mems[1].unit_amount / 100) : null}
          </Title>
          <Text type="secondary">{ t('per_year') }</Text>
          <Divider />
          <Button
            type="primary"
            onClick={() => onSelect(1)}
          >
            { t('select') }
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

export default MembershipList
