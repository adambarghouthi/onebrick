import React from 'react';
import Head from 'next/head';
import {
  Typography,
  Layout,
  Row,
  Col,
  Button,
  Card,
  Space,
  List,
  Progress,
  Descriptions,
} from 'antd';
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  DownOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/dist/client/router';
import { GeneralLayout } from 'src/components/layouts';
import useLocalization from 'src/lib/localization/useLocalization';

const { Title, Text } = Typography;

const listData = [
  {
    title: `Help Dany Rebuild his Life`,
    img: '/assets/dany.jpg',
    description:
      'We want to raise funds for Dany to rebuild his home and set his life back on track following the tragic blast of Beirut on the 4th of August.',
    data: {
      area: 'Rmeil Beirut',
      cost: '$2685',
      status: 'completed',
      progress: 100,
    },
  },
  {
    title: `Next project`,
    img: '/assets/dany.png',
    description:
      'TBD',
    data: {
      area: 'TBD',
      cost: 'TBD',
      status: 'In Progress',
      progress: 0,
    },
  }
];

const Index = () => {
  const { t, dir } = useLocalization();
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{t('home_hd_title')}</title>
      </Head>
      <GeneralLayout>
        <div className="flex-section banner">
          <div className="shade" />
          <Layout className="container">
            <Title className="text-light text-center" level={1}>
              { t('splash_title') }
            </Title>
            <Title className="text-light text-center" level={2}>
              { t('splash_text') }
            </Title>
          </Layout>
        </div>
        <div className="flex-section story">
          <div className="shade" />
          <Layout className="container">
            <Row gutter={[30, 60]}>
              <Col md={24} lg={10}>
                <Title
                  level={1}
                  className="text-light"
                >
                  { t('story_title') }
                </Title>
                <Title className="text-light" level={4}>
                  { t('story_text') }
                </Title>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Button size="large" href="/about-us">
                  { t('learn_more') }
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
        <div className="flex-section values">
          <div className="shade" />
          <Layout className="container">
            <Row gutter={[30]}>
              <Col md={24} lg={8}>
                <img src="/assets/self-sufficiency.png" className="mb-5" />
                <Title className="text-light" level={3}>
                  { t('values_title_1') }
                </Title>
                <Title className="text-light mb-0" level={5}>
                  { t('values_text_1') }
                </Title>
              </Col>
              <Col md={24} lg={8}>
                <img src="/assets/cooperativism.png" className="mb-5" />
                <Title className="text-light" level={3}>
                  { t('values_title_2') }
                </Title>
                <Title className="text-light mb-0" level={5}>
                  { t('values_text_2') }
                </Title>
              </Col>
              <Col md={24} lg={8}>
                <img src="/assets/transparency.png" className="mb-5" />
                <Title className="text-light" level={3}>
                  { t('values_title_3') }
                </Title>
                <Title className="text-light mb-0" level={5}>
                  { t('values_text_3') }
                </Title>
              </Col>
            </Row>
          </Layout>
        </div>
        <div className="flex-section projects">
          <div className="shade" />
          <Layout className="container">
            <Row align="middle" gutter={[30, 60]}>
              <Col md={24}>
                <Title className="text-light text-center" level={1}>
                  { t('projects_title') }
                </Title>
              </Col>
            </Row>
            <Row align="middle" gutter={[30, 60]}>
              <List
                style={{ backgroundColor: 'white' }}
                itemLayout="vertical"
                size="large"
                dataSource={listData}
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    extra={
                      <img
                        width={272}
                        alt="logo"
                        src={item.img}
                      />
                    }
                  >
                    <>
                      <List.Item.Meta
                        title={item.title}
                        description={item.description}
                      />
                      <div className="mb-4">
                        <Descriptions>
                          <Descriptions.Item label="Area">{item.data.area}</Descriptions.Item>
                          <Descriptions.Item label="Total Cost">{item.data.cost}</Descriptions.Item>
                          <Descriptions.Item label="Status">{item.data.status}</Descriptions.Item>
                        </Descriptions>
                      </div>
                      <Progress strokeColor="#1eb320" percent={item.data.progress} status="active" />
                    </>
                  </List.Item>
                )}
              />
            </Row>
          </Layout>
        </div>
        <div className="flex-section donations">
          <Layout className="container">
            <Row align="middle" gutter={[30, 60]}>
              <Col md={24} lg={10}>
                <Title className="text-light" level={1}>
                  { t('start_title') }
                </Title>
                <p className="text-light">
                  { t('start_text') }
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
                <Button size="large" href="/signup">
                  { t('support_now') }
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
        <div>
          <Layout className="container">
            <Row align="middle" gutter={[30, 60]}>
              <Col md={24}>
                <Title level={2}>
                  Contact Us
                </Title>
                <div className="mb-5">
                  <p>
                    There will have to be a contact
                    us part at the end of the home
                    page with our contact info.
                    Something basic, I didn’t think
                    there was a need to detail the
                    layout and background for this one.
                  </p>
                </div>
                <Button size="large" href="/signup">
                  Contact
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
      </GeneralLayout>
    </>
  )
};

export default Index;
