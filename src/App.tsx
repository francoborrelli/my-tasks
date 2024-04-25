import './App.scss';

import New from './components/new/new';
import List from './components/list/list';
import { NewModal } from './components/new/newModal';
import { theme as ANTD_Theme, Col, ConfigProvider, Layout, Row } from 'antd';

import { useAppSelector } from './store/store';

const { defaultAlgorithm, darkAlgorithm } = ANTD_Theme;

export const App = () => {
  const selectedTheme = useAppSelector((state) => state.theme.selectedTheme);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3f7bc2',
        },
        algorithm: selectedTheme === 'dark' ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Layout style={{ height: '100vh' }}>
        <Row justify='center' style={{ marginTop: 40 }}>
          <Col xs={22} md={15} lg={13} xl={10} xxl={8}>
            <New />

            <List />

            <NewModal />
          </Col>
        </Row>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
