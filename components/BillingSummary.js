import React from 'react';
import { Typography, Card, Descriptions, Tag, Skeleton } from 'antd';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'
import useTranslation from 'lib/translations/useTranslation'

const { Title } = Typography

const BillingSummary = (props) => {
  const { billingMode, price, loading } = props
  const { t } = useTranslation()

  return (
    <Card>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Title className="mb-0" level={4}>
          { t('summary') }
        </Title>
      </Card.Grid>
      <Card.Grid hoverable={false} style={{ width: '100%', padding: '0px' }}>
        <Descriptions
          className="billing-summary-descriptions"
          layout="vertical"
          size="middle"
          bordered>
          <Descriptions.Item
            label={t('billing_mode')}
            style={{ borderLeft: '0' }}
          >
            <Skeleton
              loading={loading}
              paragraph={{ rows: 0 }}
              active>
              { t(billingMode) }
            </Skeleton>
          </Descriptions.Item>
          <Descriptions.Item label={t('price')}>
            <Skeleton
              loading={loading}
              paragraph={{ rows: 0 }}
              active>
              ${ price }
            </Skeleton>
          </Descriptions.Item>
        </Descriptions>
      </Card.Grid>
    </Card>
  )
}

export default BillingSummary
