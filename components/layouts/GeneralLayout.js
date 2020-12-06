import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import Header from '../Header';
import LocaleSwitch from '../LocaleSwitch';
import useLocalization from 'lib/localization/useLocalization';

const GeneralLayout = (props) => {
  const { Footer, Content } = Layout;
  const { dir } = useLocalization();

  return (
    <ConfigProvider direction={dir}>
      <Layout>
        <Header />
        <Content>
          { props.children }
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <LocaleSwitch />
        </Footer>
      </Layout>
    </ConfigProvider>
  )
};

export default GeneralLayout;
