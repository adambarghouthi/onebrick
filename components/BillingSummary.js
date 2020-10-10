import React from 'react';
import { Typography, Card, Descriptions, Tag, Statistic } from 'antd';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'
import useTranslation from 'lib/translations/useTranslation'

const { Title } = Typography

const BillingSummary = (props) => {
  const { billingMode, price, loading } = props
  const { t } = useTranslation()

  return (
    <Card loading={loading}>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Title className="mb-0" level={4}>
          { t('summary') }
        </Title>
      </Card.Grid>
      <Card.Grid hoverable={false} style={{ width: '50%' }}>
        <Card.Meta
          title={t('billing_mode')}
          description={t(billingMode)}
        />
      </Card.Grid>
      <Card.Grid hoverable={false} style={{ width: '50%' }}>
        <Card.Meta
          title={t('price')}
          description={`$${ price }`}
        />
      </Card.Grid>
    </Card>
  )
}

export default BillingSummary
