import React from 'react';

import Logo from './Logo/Logo';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import SearchInput from './SearchInput/SearchInput';
import LoginContent from './LoginContent/LoginContent';

import styled from 'styled-components';

import { useAuth } from 'hooks/auth-hook';
import AuthContent from './LoginContent/AuthContent';
import { headerAndFormLink, headerAndFormLinkHover } from 'styles/mixins';

const HeaderContainer = styled.header`
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;

const AuthHeaderContainer = styled.div`
  display: flex;
  align-items: center;

  & a {
    margin: 0 10px;
    ${headerAndFormLink}

    &:hover {
      ${headerAndFormLinkHover}

      &:after {
        position: absolute;
        content: '';
        height: 2px;
        bottom: -4px;
        margin: 0 auto;
        left: 0;
        right: 0;
        width: 100%;
        background-color: var(--color-5);
      }
    }
  }
`;

const Header = () => {
  const { isAuth } = useAuth();
  return (
    <HeaderContainer>
      <ThemeSwitcher />
      <Logo />
      <SearchInput />
      <AuthHeaderContainer>{isAuth ? <AuthContent /> : <LoginContent />}</AuthHeaderContainer>
      
    </HeaderContainer>
  );
};

export default Header;
