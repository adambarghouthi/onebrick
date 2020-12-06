import { wrapper } from 'store';

import 'antd/dist/antd.css';
import 'styles/vars.css';
import 'styles/global.css';

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
