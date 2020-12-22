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
  Table,
  Image,
  Progress,
} from 'antd';
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  DownOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/dist/client/router';
import { GeneralLayout } from 'src/components/layouts';
import useLocalization from 'src/lib/localization/useLocalization';

const { Title, Text } = Typography;

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
  },
  {
    dataIndex: 'description',
    key: 'description',
  },
];

const data = [
  {
    key: '1',
    name: 'Status',
    description: (
      <>
        Completed
        <Progress strokeColor="#1eb320" percent={100} status="active" />
      </>
    ),
  },
  {
    key: '2',
    name: 'Nature of Project',
    description: 'Complete Home Restoration',
  },
  {
    key: '3',
    name: 'Accomplishments',
    description: (
      <ol>
        <li>Installed a central piping system</li>
        <li>Installed a central electrical system</li>
        <li>Fixed a major leak in the building’s main sewage pipeline</li>
        <li>Installed 37 m2 of tiling</li>
        <li>Installed 3 doors and 2 windows</li>
        <li>Installed a toilet seat, sink, lavatory mixers, sink mixers and douche mixers</li>
        <li>Complete house painting</li>
        <li>Pesticide spraying</li>
      </ol>
    ),
  },
  {
    key: '4',
    name: 'Receipts',
    description: (
      <Image.PreviewGroup>
        <Image
          width={100}
          src="/assets/receipt.jpg"
        />
        <Image
          width={100}
          src="/assets/receipt.jpg"
        />
      </Image.PreviewGroup>
    ),
  },
];

const Projects = () => {
  const { t, dir } = useLocalization();
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{t('home_hd_title')}</title>
      </Head>
      <GeneralLayout>
        <div className="team">
          <Layout className="container">
            <Title level={1}>
              Our projects
            </Title>
            <Row align="middle" gutter={[30, 60]}>
              <Col md={24}>
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  title={() => `Help Rebuild Dany's Home`}
                  bordered
                />
              </Col>
            </Row>
          </Layout>
        </div>
      </GeneralLayout>
    </>
  )
};

export default Projects;
