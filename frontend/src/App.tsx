import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { CloudOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import logo from './assets/logo.png'

import { ROUTERS } from './constants'
import CalculatorCO2 from './views/CalculatorCO2'

import './App.less';

const { Sider, Content, Header, Footer } = Layout;

const App = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Sider
        width={150}
        className="aside_main"
      >
        <div className="logo">
          <img src={logo} />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<CloudOutlined />}>
            <Link to={ROUTERS.CALCULATOR_CO2.path}>
              { t('aside.co2') }
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background"></Header>
        <Content className="body-gradient p-2">
          <Switch>
            <Route
              exact
              path={ROUTERS.CALCULATOR_CO2.path}
            >
              <CalculatorCO2/>
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          { t('footer.main-text') }
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
