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
  Image,
  Divider,
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

const AboutUs = () => {
  const { t, dir } = useLocalization();
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{t('home_hd_title')}</title>
      </Head>
      <GeneralLayout>
        <div className="flex-section about-us">
          <div className="shade" />
          <Layout className="container">
            <Title className="text-light text-center" level={1}>
              About Us
            </Title>
            <Title className="text-light text-center" level={4}>
              We are three partners, having met
              while working on a squalor in 
              one of the affected areas of
              the city, we decided to build
              this organisation in order to
              tackle the most pressing cases
              in Lebanon.
            </Title>
            <Title className="text-light text-center" level={4}>
              Knowing how hard it is for donors
              to trust recipients in Lebanon
              due to corruption. We aim to be
              driven by Transparency because
              we know that our lifeline is built
              on your Trust.  
            </Title>
          </Layout>
        </div>
        <div className="team">
          <Layout className="container">
            <Title level={1}>
              Team
            </Title>
            <Row align="middle" gutter={[30, 60]}>
              <Col md={24} lg={8}>
                <Image
                  width="100%"
                  src="/assets/rayan.jpg"
                />
                <Divider />
                <Title level={4}>
                  Rayan
                </Title>
                <Text>
                  I moved to Beirut following
                  the August 4th blast. Since
                  then I have been involved in
                  bringing humanitarian aid to
                  the most affected corners of
                  Beirut. One day, while on my
                  scouting trips, I met a man
                  that was severely injured by
                  the blast that lived in a
                  desperate situation. Having
                  decided to throw a fundraiser
                  for his case, that’s where I
                  met Chahine and Johnny my current
                  partners.
                </Text>
              </Col>
              <Col md={24} lg={8}>
                <Image
                  width="100%"
                  src="/assets/rayan.jpg"
                />
                <Divider />
                <Title level={4}>
                  Chahine
                </Title>
                <Text>
                  I moved to Beirut following
                  the August 4th blast. Since
                  then I have been involved in
                  bringing humanitarian aid to
                  the most affected corners of
                  Beirut. One day, while on my
                  scouting trips, I met a man
                  that was severely injured by
                  the blast that lived in a
                  desperate situation. Having
                  decided to throw a fundraiser
                  for his case, that’s where I
                  met Chahine and Johnny my current
                  partners.
                </Text>
              </Col>
              <Col md={24} lg={8}>
                <Image
                  width="100%"
                  src="/assets/rayan.jpg"
                />
                <Divider />
                <Title level={4}>
                  Johnny
                </Title>
                <Text>
                  I moved to Beirut following
                  the August 4th blast. Since
                  then I have been involved in
                  bringing humanitarian aid to
                  the most affected corners of
                  Beirut. One day, while on my
                  scouting trips, I met a man
                  that was severely injured by
                  the blast that lived in a
                  desperate situation. Having
                  decided to throw a fundraiser
                  for his case, that’s where I
                  met Chahine and Johnny my current
                  partners.
                </Text>
              </Col>
            </Row>
          </Layout>
        </div>
      </GeneralLayout>
    </>
  )
};

export default AboutUs;
