import React from 'react';

import Logo from './Logo/Logo';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import SearchInput from './SearchInput/SearchInput';
import LoginContent from './LoginContent/LoginContent';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

import { useAuth } from 'hooks/auth-hook';
import AuthContent from './LoginContent/AuthContent';

const HeaderContainer = styled.header`
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  const { isAuth } = useAuth();
  return (
    <HeaderContainer>
      <ThemeSwitcher />
      <Logo />
      <SearchInput />
      {isAuth ? <AuthContent /> : <LoginContent />}
    </HeaderContainer>
  );
};

export default Header;
