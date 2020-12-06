import React from 'react'
import Head from 'next/head'
import {
  Typography,
  Layout,
  Row,
  Col,
  Button,
  Card,
  Space
} from 'antd'
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  DownOutlined,
  CheckCircleOutlined
} from '@ant-design/icons'
import { useRouter } from 'next/dist/client/router';
import { GeneralLayout } from 'components/layouts'
import useLocalization from 'lib/localization/useLocalization'
import withNonAuth from 'hocs/withNonAuth'

const { Title, Text } = Typography

const Index = () => {
  const { t, dir } = useLocalization();
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{t('home_hd_title')}</title>
      </Head>
      <GeneralLayout>
        <div className="flex-section">
          <Layout className="container">
            <div className="text-center mb-4">
              <img src="/assets/psf-logo.png" height="150" width="123" />
            </div>
            <Title className="text-center" level={1}>
              { t('splash_title') }
            </Title>
            <p className="text-center">
              { t('splash_text') }
            </p>
            <br />
            <div className="text-center">
              <Text type="secondary">
                { t('scroll') }
              </Text>
              <br />
              <Text type="secondary">
                <DownOutlined />
              </Text>
            </div>
          </Layout>
        </div>
        <div className="flex-section green">
          <Layout className="container">
            <Title
              level={1}
              className="text-light text-center"
            >
              { t('green_title') }
            </Title>
            <p className="text-light text-center mb-5">
              { t('green_text') }
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button size="large">
                { t('support_fund') }
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                {
                  dir === 'ltr'
                    ? <ArrowRightOutlined />
                    : <ArrowLeftOutlined />
                }
              </Button>
            </div>
          </Layout>
        </div>
        <div className="flex-section red">
          <Layout className="container">
            <Row gutter={[30, 60]}>
              <Col md={24} lg={8}>
                <img src="/assets/self-sufficiency.png" className="mb-5" />
                <Title className="text-light" level={4}>
                  { t('red_title_1') }
                </Title>
                <p className="text-light mb-0">
                  { t('red_text_1') }
                </p>
              </Col>
              <Col md={24} lg={8}>
                <img src="/assets/cooperativism.png" className="mb-5" />
                <Title className="text-light" level={4}>
                  { t('red_title_2') }
                </Title>
                <p className="text-light mb-0">
                  { t('red_text_2') }
                </p>
              </Col>
              <Col md={24} lg={8}>
                <img src="/assets/transparency.png" className="mb-5" />
                <Title className="text-light" level={4}>
                  { t('red_title_3') }
                </Title>
                <p className="text-light mb-0">
                  { t('red_text_3') }
                </p>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Button
                  size="large"
                >
                  { t('support_fund') }
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  {
                    dir === 'ltr'
                      ? <ArrowRightOutlined />
                      : <ArrowLeftOutlined />
                  }
                </Button>
              </Col>
            </Row>
          </Layout>
        </div>
        <div className="flex-section black">
          <Layout className="container">
            <Row align="middle" gutter={[30, 60]}>
              <Col md={24} lg={10}>
                <Title className="text-light" level={1}>
                  { t('black_title') }
                </Title>
                <p className="text-light">
                  { t('black_text') }
                </p>
                <div className="mt-5 mb-5">
                  <Space direction="vertical">
                    <p className="text-light mb-3">
                      <CheckCircleOutlined /> { t('cancel_or_edit') }
                    </p>
                    <p className="text-light mb-3">
                      <CheckCircleOutlined /> { t('view_activity') }
                    </p>
                    <p className="text-light mb-3">
                      <CheckCircleOutlined /> { t('receive_updates') }
                    </p>
                  </Space>
                </div>
                <Button
                  size="large"
                >
                  { t('support_fund') }
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  {
                    dir === 'ltr'
                      ? <ArrowRightOutlined />
                      : <ArrowLeftOutlined />
                  }
                </Button>
              </Col>
              <Col md={24} lg={7}>
                <Card style={{ width: 205 }}>
                  <Title level={5}>
                    { `${t('support')} ${t('monthly')}` }
                  </Title>
                  <Title className="mt-5 mb-3" level={3}>
                    $11
                  </Title>
                  <Text type="secondary">
                    { t('per_month') }
                  </Text>
                </Card>
              </Col>
              <Col md={24} lg={7}>
                <Card style={{ width: 205 }}>
                  <Title level={5}>
                    { `${t('support')} ${t('yearly')}` }
                  </Title>
                  <Title className="mt-5 mb-3" level={3}>
                    $103
                  </Title>
                  <Text type="secondary">
                    { t('per_year') }
                  </Text>
                </Card>
              </Col>
            </Row>
          </Layout>
        </div>
      </GeneralLayout>
    </>
  )
}

export default withNonAuth(Index)
