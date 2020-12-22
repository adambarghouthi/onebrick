import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import Navbar from '../Navbar';
import useLocalization from 'src/lib/localization/useLocalization';

const GeneralLayout = (props) => {
  const { Footer, Content } = Layout;
  const { dir } = useLocalization();

  return (
    <ConfigProvider direction={dir}>
      <Layout>
        <Navbar />
        <Content>
          { props.children }
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          One Brick
        </Footer>
      </Layout>
    </ConfigProvider>
  )
};

export default GeneralLayout;
