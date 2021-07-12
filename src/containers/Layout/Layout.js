import React, { useState } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './layout.css';
import Home from '../Home/Home';
import Account from '../Account/Account';


export default function MaintLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const { Header, Sider, Content } = Layout;

    const toggleCollapse = () => {
        setCollapsed(prevState => !prevState);
    }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <NavLink exact to='/home'>Home</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <NavLink exact  to='/account'>Account</NavLink>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <NavLink exact to='/'>Nav 3</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggleCollapse,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/account' component={Account} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}
