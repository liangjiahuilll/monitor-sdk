import React from "react";
import { Layout, Menu } from "antd";
import { Outlet, Link, useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const location = useLocation();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible width={300}>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={[
            {
              key: "/",
              label: <Link to="/">Dashboard</Link>,
            },
            {
              key: "/user",
              label: <Link to="/user">User</Link>,
            },
            {
              key: "/settings",
              label: <Link to="/settings">Settings</Link>,
            },
          ]}
        />
      </Sider>

      <Layout>
        <Header style={{ background: "#fff" }}>Monitor Dashboard</Header>
        <Content style={{ margin: 20, padding: 20, background: "#fff" }}>
          <Outlet /> {/* 子路由内容渲染在这里 */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
