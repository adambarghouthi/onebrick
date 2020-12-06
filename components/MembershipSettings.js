import React, { useEffect } from 'react'
import { Card, Typography, Button, Row, Col, Skeleton } from 'antd'
// import { CheckCircleOutlined, HeartTwoTone } from '@ant-design/icons'
import useLocalization from 'lib/localization/useLocalization'

const { Title, Text } = Typography

const gridStyle = {
  width: '50%',
}

const MembershipSettings = (props) => {
  const { onEdit, data } = props

  const { t, dir } = useLocalization()

  const subIsActive = (data.sub &&
    data.sub.pause_collection &&
    data.sub.pause_collection.behaviour)
      ? true
      : false

  return (
    <Card>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Title className="mb-0" level={5}>
          { t('membership_settings') }
        </Title>
      </Card.Grid>
      <Card.Grid hoverable={false} style={{ width: '100%' }}>
        <Row justify="space-between" align="middle">
          <Col span={18}>
            <Skeleton
              loading={data.loading && !data.sub}
              paragraph={{ rows: 1 }}
              active
            >
              <Text>
                {
                  subIsActive
                    ? t('cancel_membership')
                    : t('activate_membership')
                }
              </Text>
              <br />
              <Text type="secondary">
                {
                  subIsActive
                    ? t('cancel_membership_secondary')
                    : t('activate_membership_secondary')
                }
              </Text> 
            </Skeleton>
          </Col>
          <Col span={6}>
            {
              !data.sub
                ? <Skeleton.Button
                    loading={data.loading}
                    size="large"
                    shape="default"
                    active
                  />
                : <Button
                    type="primary"
                    size="large"
                    style={{
                      float: direction === 'ltr'
                        ? 'right'
                        : 'left'
                    }}
                    danger={subIsActive}
                    onClick={() => {
                      onEdit({
                        subId: data.sub.id,
                        pause_collection: subIsActive
                          ? { behavior: 'mark_uncollectible' }
                          : ''
                      })
                    }}
                    loading={data.loading}
                  >
                    {
                      subIsActive
                        ? t('cancel')
                        : t('activate')
                    }
                  </Button>
            }
          </Col>
        </Row>
      </Card.Grid>
    </Card>
  )
}

export default MembershipSettings
