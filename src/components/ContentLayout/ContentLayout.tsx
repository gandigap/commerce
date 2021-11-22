import React from 'react';
import { Outlet } from 'react-router-dom';
import _Header from './Header/Header';
import Sidebar from './Main/MainSection/Sidebar/Sidebar';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const ContentLayout = () => {
  return (
    <>
      <_Header />

      <Sidebar />
      <Outlet />
    </>
  );
};

export default ContentLayout;
