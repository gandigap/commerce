import React from 'react';

import Logo from './Logo/Logo';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import SearchInput from './SearchInput/SearchInput';
import LoginContent from './LoginContent/LoginContent';

import { Layout, Menu, Row } from 'antd';

const { Header } = Layout;

const _Header = () => {
  return (
    <Header className="header">
      <Row>
        <ThemeSwitcher />
        <Logo />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        <SearchInput />
        <LoginContent />
      </Row>
    </Header>
  );
};

export default _Header;
