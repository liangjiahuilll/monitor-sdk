import { Layout, Menu } from 'antd';
import { WarningOutlined, DashboardOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { Outlet, Link, useLocation } from 'react-router-dom';
import './layout.less';

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const location = useLocation();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible width={300} theme="light" className="custom-sider">
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={[
            {
              key: '/',
              label: <Link to="/">性能监控</Link>,
              icon: <DashboardOutlined />
            },
            {
              key: '/user',
              label: <Link to="/user">事件埋点</Link>,
              icon: <ThunderboltOutlined />
            },
            {
              key: '/settings',
              label: <Link to="/settings">错误埋点</Link>,
              icon: <WarningOutlined />
            }
          ]}
        />
      </Sider>

      <Layout>
        <Header>前端埋点监控平台</Header>
        <Content style={{ margin: 20, padding: 20 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
