import React from 'react';
import { Typography, Card, Descriptions, Tag, Statistic } from 'antd';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'
import useLocalization from 'src/lib/localization/useLocalization'

const { Title, Text } = Typography

const BillingSummary = (props) => {
  const { billingMode, price, loading } = props
  const { t } = useLocalization()

  return (
    <Card loading={loading}>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Title className="mb-0" level={5}>
          { t('summary') }
        </Title>
      </Card.Grid>
      <Card.Grid hoverable={false} style={{ width: '50%' }}>
        <div className="mb-3">
          <Text strong>
            { t('billing_mode') }
          </Text>
        </div>
        <div>
          <Text type="secondary">
            { t(billingMode) }
          </Text>
        </div>
      </Card.Grid>
      <Card.Grid hoverable={false} style={{ width: '50%' }}>
        <div className="mb-3">
          <Text strong>
            { t('price') }
          </Text>
        </div>
        <div>
          <Text type="secondary">
            ${ price }
          </Text>
        </div>
      </Card.Grid>
    </Card>
  )
}

export default BillingSummary
